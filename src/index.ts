import app from './app';
import dotenv from 'dotenv';
import { connectToDb } from './db/sql';

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

connectToDb();
