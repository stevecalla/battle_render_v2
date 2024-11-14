import { DataTypes, Sequelize, Model} from 'sequelize';

// Define the attributes interface
interface TeamCharactersAttributes {
    teamId: number;
    characterId: number;
}

// Teams model class
export class TeamCharacters extends Model<TeamCharactersAttributes> 
    implements TeamCharactersAttributes {
    public teamId!: number;
    public characterId!: number;
}

export function TeamCharactersFactory(sequelize: Sequelize): typeof TeamCharacters {
    TeamCharacters.init(
      {
        teamId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        characterId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
      },
      {
        tableName: 'team_characters',
        sequelize,
        timestamps: false
      }
    );
  
    return TeamCharacters;
  }
  