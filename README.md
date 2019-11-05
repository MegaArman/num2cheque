# num2cheque
converts a number to words for a cheque. 

Ex: 123123123.12 => "One hundred and twenty-three million, one hundred and twenty-three thousand, one hundred and twenty-three and 12/100"

## Installation <a name="installation"></a>
```
npm install num2cheque
```

## Example Usage

```javascript
const num2cheque = require("num2cheque");

console.log(num2cheque(123123123.12));

```

## Notes 
* this module intentionally does *no* input validation, so you should make sure you are passing in a number between 0-999999999
