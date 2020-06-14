const axios = require("axios").default;

function getAllUser(callback) {
  axios({
    method: "get",
    url: "https://jsonplaceholder.cypress.io/users",
    responseType: "json",
  })
    .then(function (response) {
      callback(null, response.data);
    })
    .catch(function (error) {
      callback(error, null);
    });
}

getAllUser((error, result) => {
  if (!error) {
    console.log(`Size of result = ${result.length}`);
  } else {
    console.log(error.response.data);
    console.log(error.response.status);
  }
});
