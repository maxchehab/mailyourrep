import * as reps from "./reps";

export const sendLetter = letter => {
  return new Promise((resolve, reject) => {
    console.log("letter sent", letter);
    resolve();
  });
};

export const lookupReps = address => {
  return reps.lookup(address);
};
