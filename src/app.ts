import config from './config/config';
import express, { type Request, type Response } from 'express';
import errorHandler from './middlewares/error.middleware';
import { AppError } from './utils/error';
import initializePassport from './config/passport';
import passport from 'passport';

initializePassport(passport);

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send(`<h1>Welcome</h1>`);

  // throw new AppError({
  //   status: 400,
  //   message: 'just bad',
  //   code: 'bad_request',
  // });
});

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`server listening on port ${config.port}`);
});
