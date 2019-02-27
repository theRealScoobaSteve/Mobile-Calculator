import { UPDATE_VALUE, UPDATE_EXPRESSION, CLEAR } from "./Actions";

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_VALUE:
      return [...state, action.payload];
    case UPDATE_EXPRESSION:
      return [...state, action.payload];
    case CLEAR:
      return action.payload;
    default:
      return state;
  }
}
