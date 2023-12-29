/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorhandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();
//parsers
app.use(express.json());
app.use(cors());
// application routers
app.use('/api/v1', router);
const test = async (req: Request, res: Response) => {
  //throw new Error();
  const a = 10;
  res.send(a);
};
app.get('/', test);

app.use(globalErrorhandler);
//Not found route
app.use(notFound);

export default app;
