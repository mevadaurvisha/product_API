import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import routes from './routes/routes.js';
const port = 3000;
import db from './config/db.js';

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use('/v1', routes);

app.listen(port , (err) => {

    if(!err) {
        console.log(`server is runnign on http://localhost:${port}/v1`);
    }
})