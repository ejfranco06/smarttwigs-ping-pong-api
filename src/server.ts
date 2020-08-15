import express, {
  Response,
  Request,
  Application,
  json,
  urlencoded,
  NextFunction,
} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './auth/auth';
import { userController } from './controller/UserController';
import { leaderBoardController } from './controller/leader-board-controller';

dotenv.config();

const app: Application = express();
const PORT: Number = parseInt(`${process.env.PORT}`, 10) || 3000;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => res.send(`I'm a working server`));

//mount users
app.use('/user', userController);
app.use('/board', leaderBoardController);

// Handler errors
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  res.status(err.status || 500);
  res.json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
