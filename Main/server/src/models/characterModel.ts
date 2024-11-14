import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define the attributes interface
interface CharacterAttributes {
  id: number;
  name: string;
  anime: string;
  health_points: number;
  attack: number;
  defense: number;
  speed: number;
  mana: number;
  plot_armor: number;
}

// Define creation attributes interface, making 'id' optional for creation
interface CharacterCreationAttributes extends Optional<CharacterAttributes, 'id'> {}

// Character model class
export class Character extends Model<CharacterAttributes, CharacterCreationAttributes> 
  implements CharacterAttributes {
  public id!: number;
  public name!: string;
  public anime!: string;
  public health_points!: number;
  public attack!: number;
  public defense!: number;
  public speed!: number;
  public mana!: number;
  public plot_armor!: number;
}

// Factory function for initializing the Character model
export function CharacterFactory(sequelize: Sequelize): typeof Character {
  Character.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      anime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      health_points: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mana: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      plot_armor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'character',
      sequelize,
    }
  );

  return Character;
}

/*import { QueryInterface } from 'sequelize';
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
};*/