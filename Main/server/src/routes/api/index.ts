
import { Router } from 'express';
import { teamRouter } from './team-Routes.js';
const router = Router();
router.use('/team', teamRouter);
export { router as apiRoutes };