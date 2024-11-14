/*import sequelize from '../config/connection.js';
import { CharacterFactory } from './characterModel.js';
import { UserFactory } from './userModel.js';
import { TeamFactory } from './teamModel.js';
import { TeamCharactersFactory } from './teamCharactersModel.js';

const Character = CharacterFactory(sequelize);
const User = UserFactory(sequelize);
const Team = TeamFactory(sequelize);
const TeamCharacters = TeamCharactersFactory(sequelize);

Team.belongsToMany(Character, { through: TeamCharacters });
Character.belongsToMany(Team, { through: TeamCharacters });

Team.hasMany(TeamCharacters, { foreignKey: 'teamId' });
Character.hasMany(TeamCharacters, { foreignKey: 'characterId' });

export { Character , User, Team, TeamCharacters };*/

import sequelize from '../config/connection.js';
import { CharacterFactory } from './characterModel.js';
import { UserFactory } from './userModel.js';
import { TeamFactory } from './teamModel.js';
import { TeamCharactersFactory } from './teamCharactersModel.js';

const Character = CharacterFactory(sequelize);
const User = UserFactory(sequelize);
const Team = TeamFactory(sequelize);
const TeamCharacters = TeamCharactersFactory(sequelize);

// Define the many-to-many relationship
Team.belongsToMany(Character, { through: TeamCharacters });
Character.belongsToMany(Team, { through: TeamCharacters });

Team.hasMany(TeamCharacters, { foreignKey: 'teamId' });
Character.hasMany(TeamCharacters, { foreignKey: 'characterId' });

export { sequelize, Character, User, Team, TeamCharacters };