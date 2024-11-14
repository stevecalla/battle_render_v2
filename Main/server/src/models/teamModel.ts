import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { Character } from './characterModel.js'; // Import the Character model

// Define the attributes interface
interface TeamAttributes {
    id: number;
    name: string;
}

// Define creation attributes interface, making 'id' optional for creation
interface TeamCreationAttributes extends Optional<TeamAttributes, 'id'> {}

// Teams model class
export class Teams extends Model<TeamAttributes, TeamCreationAttributes> 
    implements TeamAttributes {
    public id!: number;
    public name!: string;

    // Add the addCharacters method
    public addCharacters!: (characters: Character[]) => Promise<void>;
}

// Factory function for initializing the Teams model
export function TeamFactory(sequelize: Sequelize): typeof Teams {
  Teams.init(
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
    },
    {
      tableName: 'teams',
      sequelize,
      timestamps: false,
      name: {
        singular: 'team',
        plural: 'teams'
      }
    }
  );

  return Teams;
}