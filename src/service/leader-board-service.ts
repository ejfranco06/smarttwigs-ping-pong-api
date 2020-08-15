import { leaderBoardRepository } from '../repository/leader-board-repository';

export const add = async (username: string) => {
  return await leaderBoardRepository.add(username);
};

export const getBoard = async () => {
  return await leaderBoardRepository.getBoard();
};

export const leaderBoardService = {
  add,
  getBoard,
};
