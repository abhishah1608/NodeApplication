import dotenv from 'dotenv';
import sql from 'mssql';
dotenv.config(); // MUST BE at the top before using process.env


const config: sql.config = {
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  server: process.env.DB_SERVER!, // IP or hostname
  port: parseInt(process.env.DB_PORT || '1433'), // Default is 1433
  database: process.env.DB_NAME!,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  }
};

export const connectToDb = async () => {
  try {
    await sql.connect(config);
    console.log('Connected to SQL Server');
  } catch (err) {
    console.error('DB Connection Failed:', err);
  }
};

export default sql;
