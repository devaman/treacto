import React from 'react';
import "./Login.css";
const Login = (props) => {
    return (
        <div className="Login">
            <form onSubmit={props.onFormSubmit}>
                <h3>Login</h3>
                <input type="username" name="username" placeholder="Username" value={props.valUser}  onChange={props.onUsernameChange} />
                <input type="password" name="password" placeholder="Password" value={props.valPass}  onChange={props.onPasswordChange} />
                <input type="submit" value="Signin" />
                <a href="javascript:void(0)" onClick={props.toggle}>SignUp</a>
            </form>
        </div>
    );
};
export default Login;