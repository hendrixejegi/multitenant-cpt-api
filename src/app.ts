import config from './config';
import express, { Request, Response } from 'express';
import errorHandler from './middlewares/error-handler';
import { AppError } from './utils/error';

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
