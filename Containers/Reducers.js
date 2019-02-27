import { UPDATE_VALUE, UPDATE_EXPRESSION } from "./Actions";

export default function(state = [], action) {
  console.log("STATE: ", state);
  console.log("ACTION: ", action);
  switch (action.type) {
    case UPDATE_VALUE:
      return [...state, action.payload];
    case UPDATE_EXPRESSION:
      return [...state, action.payload];
    default:
      return state;
  }
}
