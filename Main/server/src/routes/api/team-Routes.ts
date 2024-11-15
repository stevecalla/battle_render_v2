import { Router } from 'express';
import type { Request, Response } from 'express';
import { Team, Character } from '../../models/index.js';
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

router.delete('/', async (req: Request, res: Response) => {
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



router.post('/:teamId/characters', async (req: Request, res: Response) => {
    try {
        // Find team by ID
        const team = await Team.findByPk(req.params.teamId);


        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
   
        // Find character by ID
        const character = await Character.findByPk(req.body.characterId);
   
        if (!character) {
            return res.status(404).json({ message: 'Character not found' });
        }
   
        // Add character to team
        await team.addCharacters(character); // `addCharacter` if singular in your relationship
   
        console.log(`Successfully added character with ID ${character.id} to the team.`);
        return res.status(201).json({ message: 'Character added to team successfully', team });
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ error: err.message });
        } else {
            return res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
});


export { router as teamRouter };