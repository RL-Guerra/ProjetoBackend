import { Pool } from 'pg';

const connectionString = 'postgresql://postgres:xXQyMYHbJWkzoKRjVdsqCSnGNmCxSTWs@junction.proxy.rlwy.net:25852/railway';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, 
  }
});

export default pool;