const axios = require("axios").default;

async function getAllUser() {
  try {
    const response = await axios({
      method: "get",
      url: "https://jsonplaceholder.cypress.io/users",
      responseType: "json",
    });
    return {
      code: 200,
      data: response.data,
    };
  } catch (error) {
    return {
      code: 500,
    };
  }
}

const result = getAllUser().then((result) => {
  if (result.code === 200) {
    console.log(`Size of result = ${result.data.length}`);
  } else {
    console.log(result.code);
  }
});
