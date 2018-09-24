import React from 'react';
import './Register.css'
const Register = (props) => {
    return (
        <div className="Register">
            <form onSubmit={props.onFormSubmit}>
                <h3>SignUp</h3>
                <input type="username" name="username" placeholder="Username" value={props.valUser} onChange={props.onUsernameChange} />
                <input type="password" name="password" placeholder="Password" value={props.valPass} onChange={props.onPasswordChange} />
                <input type="submit" value="SignUp" />
                <a href="javascript:void(0)" onClick={props.toggle}>SignIn</a>

            </form>
        </div>
    );
};
export default Register;