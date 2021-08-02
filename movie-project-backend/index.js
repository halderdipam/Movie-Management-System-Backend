const express = require("express");
const app = express();
const dbsequlize = require("./db/sequelize");
const db = require("./db");
const { router } = require("./routes")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
  res.send({ data: "This is the Home Page" });
});

app.use("/", router);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listing on port ${port}..`));


