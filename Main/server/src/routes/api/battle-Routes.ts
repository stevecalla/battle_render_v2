import { Router } from 'express';
import type { Request, Response } from 'express';
import { Team, Character } from '../../models/index.js';
import type { Character as CharacterInstance } from '../../models/characterModel.js'; // import the type "Character"

const router = Router();

// get characters on a team
const getTeamCharacters = async (teamId: string) => {
    return await Character.findAll({
        include: [
            {
                model: Team,
                where: { id: teamId },
                through: { attributes: [] },
            },
        ], 
    });
};


// simulate battle between two teams
const simulateBattle = async (team1: CharacterInstance[], team2: CharacterInstance[], team1Points: number, team2Points: number) => {
    const minLength = Math.min(team1.length, team2.length);

    for (let i = 0; i < minLength; i++) {
        if (team1[i].attack > team2[i].attack) {
            team1Points++;
        } else if (team1[i].attack < team2[i].attack) {
            team2Points++;
        }
    }

    if (team1Points > team2Points) {
        console.log('Team 1 wins!');
    } else if (team1Points < team2Points) {
        console.log('Team 2 wins!');
    } else {
        console.log('It\'s a tie!');
    }

    return { team1Points, team2Points }; // return points for both teams
};

// POST /battling - Simulate a battle between two teams
router.post('/battling', async (req: Request, res: Response) => {
    try {
        const { team1Id, team2Id } = req.body;

        if (!team1Id || !team2Id) {
            return res.status(400).json({ message: 'Both team1Id and team2Id are required.' });
        }

        // fetch chars for both teams
        const team1characters = await getTeamCharacters(team1Id);
        const team2characters = await getTeamCharacters(team2Id);

        if (team1characters.length === 0 || team2characters.length === 0) {
            return res.status(404).json({ message: 'One or both teams not found or have no characters.' });
        }

        let t1points = 0; // initialize points for team 1
        let t2points = 0; // initialize points for team 2

        const { team1Points, team2Points } = await simulateBattle(team1characters, team2characters, t1points, t2points);

        // return points for both teams, send back to client
        return res.status(200).json({
            team1Points: team1Points,
            team2Points: team2Points,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export { router as battleRouter };