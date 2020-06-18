import express from "express";

const port: string = process.env.PORT || "3000";
const app: express.Application = express();

app.get("/", (req, res) => {
  res.send("Hello TypeScript");
});

app.listen(port, () => {
  console.log(`Start server on ${port}`);
});
