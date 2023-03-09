import express from 'express';
import config from './config/config.js';
import dbSetup from './database/setup.js';
import indexRouter from './routes/index-router.js';
import cors from 'cors';

const app = express();
const port = config.api.port;

app.use(cors());
app.use('/', indexRouter);

dbSetup.connectAsync().then((success) => {
  if (success) {
    dbSetup.initTables();
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  }
});