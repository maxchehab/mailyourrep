export const sendLetter = letter => {
  return new Promise((resolve, reject) => {
    console.log("letter sent", letter);
    resolve();
  });
};
