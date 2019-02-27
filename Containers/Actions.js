export const UPDATE_VALUE = "UPDATE_VALUE";
export const UPDATE_EXPRESSION = "UPDATE_EXPRESSION";
export const CLEAR = "CLEAR";

function clearData() {
  return {
    type: CLEAR,
    payload: []
  };
}

export function updateExpression(expression) {
  if (expression === "c") {
    return clearData();
  }
  return {
    type: UPDATE_EXPRESSION,
    payload: expression
  };
}

export function updateValue(number) {
  return {
    type: UPDATE_VALUE,
    payload: number
  };
}
