import React, { Component } from 'react';
import './Home.css';
import * as actionCreators from "../../store/actions/index";
import { connect } from "react-redux";
import axios from "axios";
class Home extends Component {
    state = {
        value: "get it first",
        form: 0,
    }

    componentDidUpdate() {
        
        if (!this.props.token) {
            this.props.history.push(this.props.match.path+'auth');

        }
    }
    getHandler = () => {
        axios.get("http://localhost:4000/api/get")
            .then(res => {
                // console.log(res);
                this.setState({
                    value: res.data.val
                })

            })
    }
    setHandler = (e) => {
        e.preventDefault();
        // console.log(this.state.form);

        axios.get(`http://localhost:4000/api/set/${this.state.form}?token=${this.props.token}`)

    }
    render() {

        return (
            <div className="Home">
                <h2>{this.state.value}</h2>

                <button onClick={this.getHandler}>Get</button>
                <form onSubmit={this.setHandler}>
                    <input type="text" name="value" value={this.state.form} onChange={(e) => { this.setState({ form: e.target.value }) }} />
                    <button >Set</button>
                </form>
                <button onClick={this.props.Logout}>Logout</button>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuthStart: (email, password) => dispatch(actionCreators.auth(email, password)),
        Logout:()=>dispatch(actionCreators.logout())
    }
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
