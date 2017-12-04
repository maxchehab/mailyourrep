import { letter, address } from "../selectors";
import * as api from "../../api";

// Action names

export const SET_NAME = "SET_NAME";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_MESSAGE = "SET_MESSAGE";
export const SET_REPS = "SET_REPS";
export const CLEAR_LETTER = "CLEAR_LETTER";

// Action Creators

export const setName = name => {
  return { type: SET_NAME, name: name };
};

export const setAddress = address => {
  return { type: SET_ADDRESS, address: address };
};

export const setMessage = message => {
  return { type: SET_MESSAGE, message: message };
};

export const setReps = reps => {
  return { type: SET_REPS, reps: reps };
};

export const clearLetter = () => {
  return { type: CLEAR_LETTER };
};

export const sendLetter = () => (dispatch, getState) => {
  api.sendLetter(letter(getState())).then(() => {
    dispatch(clearLetter());
  });
};

export const lookupReps = () => (dispatch, getState) => {
  const addr = address(getState());
  api.lookupReps(addr).then(reps => {
    dispatch(setReps(reps));
  });
};
