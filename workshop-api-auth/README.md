## Workshop :: REST API with express

- Working with JSON
- Use Router
- Authentication with JWT
  - Use middleware in express
- Error handling witth express

### Authentication with JWT

- using [JSONWebTooken library](https://www.npmjs.com/package/jsonwebtoken)

```
$npm i -s jsonwebtoken
```

Create file `auth.js` to check a JSON Token from HTTP Request

```
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = { id: 1, name: "fake user" };

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;

```

Add to middleware of express (`route.js`)

```
router.get("/secure", authorization, (req, res) => {
  res.send("Secure ...");
});
```

Start server

```
$JWT_SECRET=xxx node src/index.js
```
