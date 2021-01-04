import express, {Response,Request } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import {AppRouter} from './AppRouter';
import './controllers/LoginControllers';
import './controllers/RootControllers';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({keys: ['lasdfij']}));
app.use(AppRouter.getInstance());

app.listen(3000,() => {
    console.log('Listening on port 3000');
});