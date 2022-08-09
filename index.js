import express from "express";
import bodyParser from "body-parser";
import database from "./database.js";
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

import accountRoute from "./accounts.js";
app.use('/accounts', accountRoute);

const port = 5000;

database
.sync()
.then(results => {
    console.log(results);
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}.`);
    })}
)
.catch(err => {
    console.log(err);
})
