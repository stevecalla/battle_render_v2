
import { Router } from 'express';
import { teamRouter } from './team-Routes.js';
import { imageData } from './image-routes.js';
import { userRoutes } from './user.js';
const router = Router();
router.use('/image', imageData);
router.use('/team', teamRouter);
router.use('/user', userRoutes);
export { router as apiRoutes };