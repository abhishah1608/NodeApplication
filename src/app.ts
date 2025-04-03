import express from 'express';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import { setupSwagger } from './utils/swagger';


const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

setupSwagger(app);

export default app;
