const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");

const API_PORT = 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || API_PORT;

app.use(cors({origin: "http://localhost:3000"}));
app.use("/api", routes);
app.listen(port);

console.log(`API runs on port ${port}`);
