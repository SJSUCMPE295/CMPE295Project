// import * as React from 'react';
import path from 'path';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import manifestHelpers from 'express-manifest-helpers';
import bodyParser from 'body-parser';
import appointmentsRouter from 'routes/appointments';
import paths from '../../config/paths';
import mongoDB from './utils/config';
// import { configureStore } from '../shared/store';
import errorHandler from './middleware/errorHandler';
import serverRenderer from './middleware/serverRenderer';
import addStore from './middleware/addStore';
import webhookVerification from './middleware/webhookVerification';
import getHelpRouter from './routes/gethelp';
import homeRouter from './routes/home';
import giveHelpRouter from './routes/givehelp';
import signUpRouter from './routes/signUp';
import loginRouter from './routes/login';
import staticRouter from './routes/static';

const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
// const app = express.default();

// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
// if (process.env.NODE_ENV === 'development') {
app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));
// }

app.use(cors());

// @ts-ignore
app.use(bodyParser.json());
// @ts-ignore
app.use(bodyParser.urlencoded({ extended: true }));

/* Api routes*/
app.use('/api/gethelp', getHelpRouter);
app.use('/api/givehelp', giveHelpRouter);
app.use('/api/home', homeRouter);
app.use('/api/signup', signUpRouter);
app.use('/api/login', loginRouter);
app.use('/api/appointments', appointmentsRouter);
app.use('/api/static', staticRouter);

/* End: Api routes*/
app.use(addStore);

const manifestPath = path.join(paths.clientBuild, paths.publicPath);

app.use(
    manifestHelpers({
        manifestPath: `${manifestPath}/manifest.json`,
    })
);

app.use(serverRenderer());

app.use(errorHandler);
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(
    process.env.MONGO_URI ||
        'mongodb+srv://wecare:wecare@wecare.l5tdm.mongodb.net/wecare?retryWrites=true&w=majority',
    options,
    (err, res) => {
        if (err) {
            console.log(err);
            console.log('MongoDB Connection Failed');
        } else {
            console.log('MongoDB Connected');
        }
    }
);

app.listen(process.env.PORT || 8500, () => {
    console.log(
        `[${new Date().toISOString()}]`,
        chalk.blue(`App is running: http://localhost:${process.env.PORT || 8500}`)
    );
});

export default app;
