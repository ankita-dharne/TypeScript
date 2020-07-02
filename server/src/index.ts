import express, {Response,Request } from 'express';
import {router} from './routes/LoginRoutes'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(3000,() => {
    console.log('Listening on port 3000');
}); 