import { CharacterData } from './CharacterData';

export interface TeamData extends CharacterData {
    name: string;
    characters: CharacterData[];
    health: number;
    attack: number;
    defense: number;
    speed: number;
}
