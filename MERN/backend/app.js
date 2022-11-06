const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

app.use(express.json());

app.use(cookieParser);
// Route Imports
// const product = require("./routes/productRoute");
// const user = require("./routes/userRoute");
app.get("/", (req, res) => res.send("Hello World!"));
// app.use("/api/v1", product);
// app.use("/api/v1", user);

//Middleware for Error
// app.use(errorMiddleware);
// module.exports = app;

app.listen(4000, () => console.log(`Example app listening on port ${4000}!`));
