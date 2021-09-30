getFormToCalculate() && getFormToCalculate().addEventListener('change', initCalculator);

function getElementsToCalculate() {
    return document.getElementsByClassName('calc');
}
function getFormToCalculate() {
    var calculatedForm = document.getElementsByClassName('calc-form');
    return calculatedForm && calculatedForm[0];
}
function getResultContainer() {
    var resultContainer = document.getElementsByClassName('calc-result')
    return resultContainer.length && resultContainer[0];
}

function initCalculator() {
    var elementsArray = [...getElementsToCalculate()];
    var result = getListValue(elementsArray);
    console.log(result);
    setResult(result);
}

function getListValue(list, prevValue) {
    prevValue = prevValue || 0;
    if (!list.length) {
        return prevValue;
    } else {
        prevValue += handleChildren(
            list[0],
            handleOperation(
                getOperation(list[0])
            ));
        return getListValue(list.slice(1), prevValue);
    }
}

function handleChildren(el, operation) {
    var childrenValue = 0;
    if (el.children.length) {
        var children = [...el.children];
        var strToEval = "";

        strToEval = children.map(getElementValue).join(operation);
        var val = eval(strToEval);
        childrenValue = isFinite(val) ? val : 0;
    }
    else {
        childrenValue = getElementValue(el);
    }

    return childrenValue;
}

function setResult(result) {
    var container = getResultContainer();
    if (container && container.tagName === "INPUT") {
        container.value = result;
    } else if (container) {
        container.innerHTML = result;
    }
}

function handleOperation(operation) {
    var normalizedOperation = operation.toUpperCase();
    var action = "";
    switch (normalizedOperation) {
        case "ADD":
            action = "+"
            break;
        case "SUBSTR":
            action = "-"
            break;
        case "DIV":
            action = "/"
            break;
        case "MULT":
            action = "*"
            break;
        default:
            action = "+"
            break;
    }
    return action;
}

function getOperation(el) {
    var operationValue = el.attributes.operation && el.attributes.operation.value;
    return operationValue || "";
}

function getElementValue(el) {
    var value = 0;
    if (el && el.value) {
        var parsedValue = parseInt(el.value, 10);
        if (!isNaN(parsedValue)) {
            value = parsedValue;
        }
    }
    return value;
}

initCalculator();