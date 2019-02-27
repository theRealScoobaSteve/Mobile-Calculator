export const UPDATE_VALUE = "UPDATE_VALUE";
export const UPDATE_EXPRESSION = "UPDATE_EXPRESSION";

export function updateExpression(expression) {
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

// export const
