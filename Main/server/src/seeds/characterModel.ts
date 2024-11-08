import { QueryInterface } from 'sequelize';
import charactersData from '../seeds/characterData.json';

interface Character {
  name: string;
  anime: string;
  stats: {
    health_points: number;
    attack: number;
    defense: number;
    speed: number;
    mana: number;
    plot_armor: number;
  };
  abilities: {
    name: string;
    description: string;
    damage?: number;
    effect?: string;
    cooldown: number;
  }[];
}

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const characters = (charactersData.characters as Character[]).map(character => ({
      name: character.name,
      anime: character.anime,
      health_points: character.stats.health_points,
      attack: character.stats.attack,
      defense: character.stats.defense,
      speed: character.stats.speed,
      mana: character.stats.mana,
      plot_armor: character.stats.plot_armor,
      abilities: JSON.stringify(character.abilities),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Characters', characters);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Characters', {});
  }
};