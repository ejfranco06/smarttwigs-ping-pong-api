import { pool } from '../db/db';
const TABLE = 'ping_user';

export const add = async (username: string) => {
  const SQL: string = `INSERT INTO ${TABLE} (username ) VALUES($1) RETURNING username`;
  const PARAMS: string[] = [username];
  return (await pool.query(SQL, PARAMS)).rows[0];
};

export const getALLUsers = async () => {
  const SQL: string = `SELECT  username FROM ${TABLE}`;
  const PARAMS: string[] = [];
  return (await pool.query(SQL, PARAMS)).rows;
};

export const userRepository = {
  getALLUsers,
  add,
};
