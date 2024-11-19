
import { Router } from 'express';
import { teamRouter } from './team-Routes.js';
import { imageData } from './image-routes.js';
const router = Router();
router.use('/image', imageData);
router.use('/team', teamRouter);
export { router as apiRoutes };