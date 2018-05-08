const addition = require('./Addition/index');
const subtraction = require('./Subtraction/index');
const multiplication = require('./Multiplication/index');
const division = require('./Division/index');


function getSteps (expression) {
  let operator = '';
  let steps;
  try{
  operator = expression[expression.indexOf(expression.match(/[\\+/*/-]/i)[0])];
  }
  catch(e){
    console.log('No such operator')
  }
  switch(operator){
    case "+":
        steps = addition.add(expression);
        console.log(steps);
        break;
    case "-":
        steps = subtraction.subtract(expression);
        console.log(steps);
        break;
    case "*":
        steps = multiplication.multiply(expression);
        console.log(steps);
        break;
    case "/":
        steps = division.divide(expression);
        console.log(steps);
        break;
  }
}

function getFullSolution(expression){
  let operator = '';
  let steps;
  try{
  operator = expression[expression.indexOf(expression.match(/[\\+/*/-]/i)[0])];
  }
  catch(e){
    console.log('No such operator')
  }
  switch(operator){
    case "+":
        steps = addition.fullSolution(expression);
        console.log(steps);
        break;
    case "-":
        steps = subtraction.fullSolution(expression);
        console.log(steps);
        break;
    case "*":
        steps = multiplication.fullSolution(expression);
        console.log(steps);
        break;
    case "/":
        steps = division.fullSolution(expression);
        console.log(steps);
        break;
  }
}

getSteps('2/2')
getFullSolution('2+2')
