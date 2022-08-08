import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

import * as router from "./benjamin.js";

const port = 5000
app.listen(port, function() {
    console.log(`Server is running on port: ${port}.`)
})