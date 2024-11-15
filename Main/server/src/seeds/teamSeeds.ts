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

  await addCharacterToTeam(exampleTeam2.id, 12);
}
// testing
export const addCharacterToTeam = async (teamId: number, characterId: number) => {
    // find team by id
    const team = await Team.findByPk(teamId);

    if (!team) {
      throw new Error('Team not found');
    }

    const characters = await Character.findOne({
      where: {
        id: characterId, // find char by id
      },
    });

    if (!characters) {
      throw new Error('Character not found');
    }

    // add char to team
    await team.addCharacters(characters); // method `addCharacters` comes from the many-to-many relationship

    console.log(`Successfully added ${characters} characters to the team.`);
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

  // remove char from team
  await team.removeCharacter(character); // method `removeCharacter` comes from the many-to-many relationship

  console.log(`Successfully removed character with ID ${characterId} from the team.`);
};

export const deleteTeam = async (teamId: number) => {
  try {
    const team = await Team.findByPk(teamId);

    if (!team) {
      throw new Error('Team not found');
    }

    // delete team
    await team.destroy();

    console.log(`Successfully deleted team with ID ${teamId}.`);
  } catch (error) {
    console.error(`Error deleting team with ID ${teamId}:`, error);
    throw error;
  }
};
