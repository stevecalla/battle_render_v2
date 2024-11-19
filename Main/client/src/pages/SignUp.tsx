const SignUp = () => {
    return (
        <div id="signUpPage">
            <div id="signUpImage"></div>
            <div id="signUpRoom">
                <h1 id="signUpTitle">Sign Up</h1>
                <form id="signUpForm">
                    <label htmlFor="signUpUsername">Username:</label>
                    <input type="text" id="signUpUsername" name="signUpUsername" />
                    <label htmlFor="signUpPassword">Password:</label>
                    <input type="password" id="signUpPassword" name="signUpPassword" />
                    <label htmlFor="signUpConfirm">Confirm Password:</label>
                    <input type="password" id="signUpConfirm" name="signUpConfirm" />
                    <input type="button" value="Submit" id="signUpSubmit"/>
                </form>
            </div>
        </div>
    );
}

export default SignUp;