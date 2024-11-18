import { Pool } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DATABASE_URL;

// const connectionString = 'postgresql://postgres:xXQyMYHbJWkzoKRjVdsqCSnGNmCxSTWs@junction.proxy.rlwy.net:25852/railway';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, 
  }
});

export default pool;