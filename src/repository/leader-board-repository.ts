import { pool } from '../db/db';
const TABLE = 'leader_board';

export const add = async (username: string) => {
  const SQL: string = `
  INSERT INTO ${TABLE} as m (username) VALUES($1) 
  ON CONFLICT ON CONSTRAINT leader_board_username_key 
		  DO UPDATE SET score = m.score + 1 
      where m.username = EXCLUDED.username
  RETURNING *`;
  const PARAMS: [string] = [username];
  return (await pool.query(SQL, PARAMS)).rows[0];
};

export const getBoard = async () => {
  const SQL: string = `SELECT  username, score FROM ${TABLE} ORDER BY score DESC`;
  const PARAMS: string[] = [];
  return (await pool.query(SQL, PARAMS)).rows || [];
};

export const leaderBoardRepository = {
  add,
  getBoard,
};
