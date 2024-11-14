import { Team, Character } from '../models/index.js';

export const addCharactersToTeam = async (teamId: number, characterIds: number[]) => {
    // Find the team by its ID
    const team = await Team.findByPk(teamId);

    if (!team) {
      throw new Error('Team not found');
    }

    // Find the characters by their IDs
    const characters = await Character.findAll({
      where: {
        id: characterIds, // Find characters with the given IDs
      },
    });

    // Add the characters to the team
    await team.addCharacters(characters); // The method `addCharacters` comes from the many-to-many relationship

    console.log(`Successfully added ${characters.length} characters to the team.`);
};

export const seedTeams = async () => {
  const exampleTeam = await Team.create({ name: 'Team 1' });

  const characterIds = [1, 2, 3, 4, 5, 6];       
  await addCharactersToTeam(exampleTeam.id, characterIds);
}
