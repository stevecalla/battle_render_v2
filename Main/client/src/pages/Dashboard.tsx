const Dashboard = () => {
    if (true) {
        return (
            <div>
                <h1>Battle Dash</h1>
                <div>
                    <h3>Welcome {user.userName}</h3>
                    <section>
                        <p>Wins:</p>
                        <p>Losses:</p>
                        <p>Draws:</p>
                        <p>Games Played:</p>
                    </section>
                    <section>
                        <p>Win Rate:</p>
                        <p>Win Streak:</p>
                        <p>Biggest Win Streak:</p>
                        <p>Biggest Losing Strea:</p>
                    </section>
                </div>
                <div>
                    <h3>HiScores</h3>
                    <p>1. 1000</p>
                    <p>2. 900</p>
                    <p>3. 800</p>
                    <p>4. 700</p>
                    <p>5. 600</p>
                    <p>6. 500</p>
                    <p>7. 400</p>
                    <p>8. 300</p>
                    <p>9. 200</p>
                    <p>10. 100</p>
                </div>
            </div>
        );
    } else {  
        return (
            <div>
                <h1>Battle Dash</h1>
                <div>
                    <h3>Welcome! Please <a href="/login">Login</a> or <a href="/singUp">Create</a> an account!</h3>
                    <button>Create Account</button>
                    <button>Login</button>
                </div>
                <div>
                    <h3>HiScores</h3>
                    <p>1. 1000</p>
                    <p>2. 900</p>
                    <p>3. 800</p>
                    <p>4. 700</p>
                    <p>5. 600</p>
                    <p>6. 500</p>
                    <p>7. 400</p>
                    <p>8. 300</p>
                    <p>9. 200</p>
                    <p>10. 100</p>
                </div>
            </div>
        );
    }
};

export default Dashboard;