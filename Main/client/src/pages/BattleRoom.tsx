import Battle from '../components/battle';

const BattleRoom = () => {
    return (
        <div id="battlePage">
            <div id="battleImage"></div>
            <div id="battleRoom">
                <h1 id="battleRoomTitle">Battle Room</h1>
                <Battle />
            </div>
        </div>
    );
}

export default BattleRoom;