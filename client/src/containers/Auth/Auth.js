import React, { Component } from 'react';
import Login from "./Login/Login";
import Register from "./Register/Register";
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";
class Auth extends Component {
    state = {
        login: true,
        username: "",
        password: ""
    }
    componentDidUpdate() {
        console.log(this.props.token);
        
        if (this.props.token!==null)
            this.props.history.push("/")
    }
    onUsernameChangeHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    onPasswordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onAuthStart(this.state.username, this.state.password, this.state.login);
    }
    toggleForm = ()=>{
        this.setState(prevState=>{
            return{
                login:!prevState.login
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.login ? <Login valUser={this.state.username} valPass={this.state.password} toggle={this.toggleForm} error={ this.props.error } onUsernameChange={this.onUsernameChangeHandler} onPasswordChange={this.onPasswordChangeHandler} onFormSubmit={this.onFormSubmit} /> :
                    <Register valUser={this.state.username} valPass={this.state.password} toggle={this.toggleForm} error={this.props.error} onUsernameChange={this.onUsernameChangeHandler} onPasswordChange={this.onPasswordChangeHandler} onFormSubmit={this.onFormSubmit} />}
                <br /> 
            </div>
        );
    }

};
const mapDispatchToProps = dispatch => {
    return {
        onAuthStart: (username, password, login) => dispatch(actionCreators.auth(username, password, login)),
    }
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);