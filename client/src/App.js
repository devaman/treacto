import React, { Component } from 'react';
import Home from './containers/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";
class App extends Component {
  componentDidMount(){
    this.props.setToken();
    console.log("Set Token")
    
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/auth' component={Auth} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
const mapDispatchToProps= dispatch=>{
  return{
    setToken:()=>dispatch(actionCreators.setToken())
  }
}
export default connect(null,mapDispatchToProps)(App);
