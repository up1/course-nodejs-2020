const axios = require("axios").default;

axios({
  method: "get",
  url: "https://jsonplaceholder.cypress.io/users",
  responseType: "json",
})
  .then(function (response) {
    console.log(response.data.length);
  })
  .catch(function (error) {
    console.log(error.message);
  });
