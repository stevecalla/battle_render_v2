import { useOutletContext } from 'react-router-dom';

const Login = () => {

    const { setLoginToken } = useOutletContext<{
        loginToken: string | null,
        setLoginToken: (loginToken: string | null) => void
    }>();

    return (
        <div id="loginPage">
            <div id="loginImage"></div>
            <div id="loginRoom">
                <h1 id="loginTitle">Login</h1>
                <form id="loginForm">
                    <label htmlFor="loginUsername">Username:</label>
                    <input type="text" id="loginUsername" name="loginUsername" />
                    <label htmlFor="loginPassword">Password:</label>
                    <input type="password" id="loginPassword" name="loginPassword" />
                    <input type="button" value="Submit" id="loginSubmit" onClick={() => {
                        localStorage.setItem('LOGIN_TOKEN', 'Logged In');
                        setLoginToken('Logged In');
                        window.location.href = '/';
                    }}/>
                </form>
            </div>
        </div>
    );
}

export default Login;