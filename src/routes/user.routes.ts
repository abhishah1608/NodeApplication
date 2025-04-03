import { Router } from 'express';
import { getAllUsers } from '../controllers/user.controller';
import { authenticate } from '../middleware/auth';


const router = Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users (protected)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', authenticate, getAllUsers);

export default router;
