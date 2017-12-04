export const letter = state => state.letter;
export const name = state => letter(state).name;
export const address = state => letter(state).address;
export const message = state => letter(state).message;
export const reps = state => letter(state).reps;
