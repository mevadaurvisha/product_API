const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const port = 3000;
const db = require('./config/db');

app.use('/v1', routes);
app.use(bodyParser.json());
app.use(express.json());

app.listen(port , (err) => {

    if(!err) {
        console.log(`server is runnign on http://localhost:${port}/v1`);
    }
})