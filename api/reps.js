const got = require("got");

export const lookup = address => {
  let result = new Array();

  return got(
    "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyAJeOUUNN_QwQNUwuj1nK2WkywtIL2EQ5s&address=" +
      address
  )
    .then(response => {
      const json = JSON.parse(response.body);
      if (response.statusCode != 200 || json.error) {
        return {
          reps: false,
          err: "Sorry, we could not find any representatives near that zipcode."
        };
      }

      let indices = Array(0);
      for (let office of json.offices) {
        if (
          office.name.indexOf("Representatives") > -1 ||
          office.name.indexOf("Senate") > -1
        ) {
          indices = indices.concat(office.officialIndices);
        }
      }
      if (!indices.length) {
        return {
          reps: false,
          err: "Sorry, we could not find any representatives near that zipcode."
        };
      }
      for (let index of indices) {
        result.push(json.officials[index]);
      }
      return { reps: result, err: false };
    })
    .catch(error => {
      console.error("Reps Error", error);
      return {
        reps: false,
        err: "Sorry, we could not find any representatives near that zipcode."
      };
    });
};
