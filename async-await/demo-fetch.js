// https://www.npmjs.com/package/node-fetch
// npm install node-fetch
const fetch = require("node-fetch");

const getData = async (url) => {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error with ${response.status}`);
  }
  return await response.json();
};

getData("https://jsonplaceholder.typicode.com/users")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
