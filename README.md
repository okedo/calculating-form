# calculating-form
Library to calculate form data

## Start using
Install module using Node Package Manager

```js
npm install calculating-form --save
```
Add `calc-form` script into your html

```html
<script src="node_modules/calculating-form"></script>
```

In case you need get sum of inputs just add class `calc` to your input and class `calc-form` to the form itself.

In case you need to multiply two inputs or divide it, wrap inputs into any tag, add class `calc` to wrapper and attribute `operation` 

Result of the operation will be displayed as a content of html tag with class `calc-result`

### Allowed operations
- ADD: Add value
- SUBSTR: Substract value
- DIV: Divide value
- MULT: multiply value

```html
<form class="calc-form">
        <input class="calc" operation="ADD" type="number" placeholder="number">
        <div operation="MULT" class="calc">
            <input type="number" placeholder="number">
            <input type="number" placeholder="number">
        </div>
        <div operation="DIV" class="calc">
            <input type="number" placeholder="number">
            <input type="number" placeholder="number">
        </div>
        <span class="calc-result"></span>
</form>
```
