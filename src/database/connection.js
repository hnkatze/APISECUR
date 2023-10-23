import { createPool } from 'mysql2/promise';
import config from '../config';

const pool = createPool({
  host: config .dbServer,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbDatabase,
  port: config.portDb,
});

export { pool };
