import express from 'express';
import { UserFactory } from '../../models/userModel.js';

const router = express.Router();

router.post('/', UserFactory);

export { router as userRoutes };