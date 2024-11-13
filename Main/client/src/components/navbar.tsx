const NavBar = () => {
    const a=true;
    if (a) {
        return (
            <nav>
                <h3>Shonen Showdown</h3>
                <ul>
                    <li><a href="/">Battle Dash</a></li>
                    <li><a href="/teamsRoom">Teams Room</a></li>
                    <li><a href="/battleRoom">Battle Room</a></li>
                    <li><a href="/login">Log Out</a></li>
                </ul>
            </nav>
        )
    } else {
        return (
            <nav>
                <h1>Shonen Showdown</h1>
                <ul>
                    <li><a href="/">Battle Dash</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signUp">SignUp</a></li>
                </ul>
            </nav>
        )
    }
};

export default NavBar;