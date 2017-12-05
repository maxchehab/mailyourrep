import { combineReducers } from "redux";
import {
  SET_NAME,
  SET_ADDRESS,
  SET_MESSAGE,
  CLEAR_LETTER,
  SET_REPS
} from "../actions";

const initialState = {};

const letter = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return Object.assign({}, state, {
        name: action.name
      });
    case SET_ADDRESS:
      return Object.assign({}, state, {
        address: action.address
      });
    case SET_MESSAGE:
      return Object.assign({}, state, {
        message: action.message
      });
    case SET_REPS:
      return Object.assign({}, state, {
        reps: action.reps
      });
    case CLEAR_LETTER:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};

export default combineReducers({ letter });
