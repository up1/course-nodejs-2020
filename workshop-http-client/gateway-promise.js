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

// Parallel call apis
Promise.all([getAllUser()]).then(function (results) {
  const getAllUser = results[0];
  if (getAllUser.code === 200) {
    console.log(`Size of result = ${getAllUser.data.length}`);
  } else {
    console.log(getAllUser.code);
  }
});
