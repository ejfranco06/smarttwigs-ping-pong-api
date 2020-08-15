import express, { Response, Request, Router } from 'express';
import passport from 'passport';

import { getALLUsers } from '../repository/UserRepository';
export const userController: Router = express.Router();

interface CustomUser {
  username?: string;
}

userController.post(
  '/register',
  passport.authenticate('register', { session: false, failWithError: true }),
  async (req: Request, res: Response) => {
    res.status(201).json({
      message: 'User registered',
      user: req.user,
    });
  }
);

userController.get('/', async (req: Request, res: Response) => {
  try {
    const allUser = await getALLUsers();
    res.status(200).json({
      message: 'List of users',
      users: allUser,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Bad request/ no users',
    });
  }
});

// userController.post(
//   '/login',
//   passport.authenticate('login', { session: false, failWithError: true }),
//   async (req: Request, res: Response) => {
//     try {
//       const { username } = req.user as CustomUser;
//       const token = await generateToken('felipe');
//       res.status(200).json({
//         message: 'User login successful',
//         token: token,
//       });
//     } catch (error) {
//       res.status(401).json({ message: error.message });
//     }
//   }
// );
