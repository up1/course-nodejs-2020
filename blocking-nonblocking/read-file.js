const fs = require("fs");

function readSync(filename) {
  try {
    console.log("Start ...");
    const result = fs.readFileSync(filename);
    console.log(result.toString());
    console.log("Finish ...");
  } catch (e) {
    console.error("Got error", e.message);
  }
}

function readAsync(filename) {
  console.log("Start async ...");
  fs.readFile(filename, function (error, result) {
    if (error) {
      console.error("Got error", error);
    } else {
      console.log(result.toString());
    }
  });
  console.log("Finish async ...");
}

readSync("input.json");
readAsync("input.json");
