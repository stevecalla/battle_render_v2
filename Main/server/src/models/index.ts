import sequelize from '../config/connection.js';
import { CharacterFactory } from './characterModel.js';

const character = CharacterFactory(sequelize);

export { character };