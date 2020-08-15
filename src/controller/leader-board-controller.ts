import express, { Response, Request, Router } from 'express';
import { leaderBoardService } from '../service/leader-board-service';

export const leaderBoardController: Router = express.Router();

leaderBoardController.get('/', async (req: Request, res: Response) => {
  try {
    const board = await leaderBoardService.getBoard();
    res.status(200).json({
      message: 'List of users',
      board,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Bad request/ no board',
    });
  }
});

leaderBoardController.post('/', async (req: Request, res: Response) => {
  try {
    const {username} = req.body;
    const boardData = await leaderBoardService.add(username);
    res.status(200).json({
      message: 'Added a score',
      board: boardData,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Bad request/ no board / no user',
    });
  }
});