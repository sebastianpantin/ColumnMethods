require('mathjs');

function subtract(expression){
  return(generateSteps(expression));
}

function generateSteps(expression){
  let step = 'Generating steps for ' + expression;
  return(step)
}

function fullSolution(expression){
  let solution = 'Generating full solution for ' + expression;
  return(solution);
}

module.exports = {
    subtract,
    fullSolution,
};
