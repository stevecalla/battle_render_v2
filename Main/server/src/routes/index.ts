import { Router } from "express";
import { securityRoutes } from  "./security";
import { apiRoutes } from "./api";


const router = Router();

router.use('/auth', securityRoutes);
router.use('/api', apiRoutes);

export { router as routes };



