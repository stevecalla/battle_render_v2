import Team from './team';
import { TeamData } from '../interfaces/TeamData';

const myTeam:TeamData = {
    name: "Team Name",
    characters: [
        {name: "Character1", health: 100, attack: 10, defense: 5, speed: 5},
        {name: "Character2", health: 100, attack: 10, defense: 5, speed: 5},
        {name: "Character3", health: 100, attack: 10, defense: 5, speed: 5},
        {name: "Character4", health: 100, attack: 10, defense: 5, speed: 5},
        {name: "Character5", health: 100, attack: 10, defense: 5, speed: 5}
    ],
    health: 500,
    attack: 50,
    defense: 25,
    speed:25
}

const Battle = () => {
    return (
        <div id="battle">
            <h1 id="battleTitle">Battle</h1>
            <div id="battleDisplay">
                <Team teamDisplay={0} team={myTeam} teamNames={[]} align="left"/>
                <div id="battleVSContainer">
                    <h1 id="battleVS">VS</h1>
                </div>
                <Team teamDisplay={0} team={myTeam} teamNames={[]} align="right"/>
            </div>
        </div>
    )
}

export default Battle;