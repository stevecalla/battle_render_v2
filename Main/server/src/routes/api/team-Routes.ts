import { Router } from 'express';
import type { Request, Response } from 'express';
import { Team } from '../../models/index.js';
const router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const team = await Team.create({
        name: req.body.name,
        });
        res.status(201).json(team);
    } catch (err) {
        res.status(400).json(err);
    }
});
router.post('/', async (req: Request, res: Response) => {
    try {
        const team = await Team.findByPk(req.body.teamId);
        if (!team) {
          throw new Error('Team not found');
        }
        // delete team
        await team.destroy();
        console.log(`Successfully deleted team with ID ${req.body.teamId}.`);
        res.status(201).json(team);
    } catch (err) {
        res.status(400).json(err);
    }
});

export { router as teamRouter };