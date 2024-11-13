import Team from './team';

const Battle = () => {
    return (
        <div>
            <h1>Battle</h1>
            <div>
                <Team />
                <h1>VS</h1>
                <Team />
            </div>
        </div>
    )
}

export default Battle;