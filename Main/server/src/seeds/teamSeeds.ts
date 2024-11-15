import { Team, Character } from '../models/index.js';

// testing
export const seedTeams = async () => {
  const exampleTeam = await Team.create({ name: 'Team 1' });
  const exampleTeam2 = await Team.create({ name: 'Team 2' });

  await addCharacterToTeam(exampleTeam.id, 1);
  await addCharacterToTeam(exampleTeam.id, 4);
  await addCharacterToTeam(exampleTeam.id, 9);
  await addCharacterToTeam(exampleTeam.id, 10);

  await addCharacterToTeam(exampleTeam2.id, 2);
}

export const addCharacterToTeam = async (teamId: number, characterId: number) => {
    // Find the team by its ID
    const team = await Team.findByPk(teamId);

    if (!team) {
      throw new Error('Team not found');
    }

    const characters = await Character.findAll({
      where: {
        id: characterId, // find char by id
      },
    });

    // add char to team
    await team.addCharacters(characters); // The method `addCharacters` comes from the many-to-many relationship

    console.log(`Successfully added ${characters.length} characters to the team.`);
};

export const removeCharacterFromTeam = async (teamId: number, characterId: number) => {

  const team = await Team.findByPk(teamId);

  if (!team) {
    throw new Error('Team not found');
  }

  const character = await Character.findByPk(characterId);

  if (!character) {
    throw new Error('Character not found');
  }

  // Remove the character from the team
  await team.removeCharacter(character); // The method `removeCharacter` comes from the many-to-many relationship

  console.log(`Successfully removed character with ID ${characterId} from the team.`);
};
