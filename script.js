const btn = document.querySelector('button')
const pTag = document.querySelector('#result')

btn.addEventListener('click', () => {
    
    const operation = document.querySelector('#math').value
    const value1 = parseInt(document.querySelector('#num1').value)
    const value2 = parseInt( document.querySelector('#num2').value)

    function basicOp(operation, value1, value2) {
 switch (operation) {
       case '+':
           return value1 + value2;
           break;
       case '-':
           return value1 - value2;
           break;
       case '*':
           return value1 * value2;
           break;
       case '/':
           return value1 / value2;
           break;
       default:
           return 0;
           break;
   }
}
pTag.innerText = (basicOp(operation,value1,value2))
return pTag
})


