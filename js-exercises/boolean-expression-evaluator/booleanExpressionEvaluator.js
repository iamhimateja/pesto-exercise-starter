/* eslint-disable no-bitwise */
/* eslint-disable quote-props */
const allowedOperators = ['&', '|', '^'];
const booleanMap = {
  'true': true,
  'false': false,
  '!true': false,
  '!false': true,
};

const throwNewError = (errorMessage) => {
  throw errorMessage;
};

// eslint-disable-next-line max-len
const isValidToken = (token) => (Object.keys(booleanMap).indexOf(token) > -1 || allowedOperators.indexOf(token) > -1);

function booleanExpressionEvaluator(expression) {
  if (typeof expression !== 'string') {
    throwNewError(`expected string, got ${typeof expression}`);
  }

  const symbols = expression.split(' ');

  let result;
  let operator;
  for (const token of symbols) {
    if (!isValidToken(token)) {
      throwNewError('Invalid tokens in the expression');
    } else if (allowedOperators.indexOf(token) > -1) {
      operator = token;
    } else if (operator) {
      // eslint-disable-next-line default-case
      switch (operator) {
        case '&':
          result = Boolean(result & booleanMap[token]);
          break;
        case '|':
          result = Boolean(result | booleanMap[token]);
          break;
        case '^':
          result = Boolean(result ^ booleanMap[token]);
          break;
      }
    } else {
      result = booleanMap[token];
    }
  }
  return result;
}

export { booleanExpressionEvaluator };
