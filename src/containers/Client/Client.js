import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Lock from "@material-ui/icons/Lock";
import { Redirect, Router, Route } from "react-router-dom";
import Hist from '../../index';
import ReactDOM from 'react-dom';
import Products from '../../components/Products/Products';
import Login from '../Login/Login';





class User extends Component {
  
  state = {
    component: '',
    products: ''
  }

componentDidMount(){
  alert('Welcome to your Profile');
}

  
  render() {

    return (
      
    <div className='root'>

        <CssBaseline />

        <AppBar position="fixed" className='appBar'>
          <Toolbar>
            <Button style={{ padding: "0 0 0 70%" }} color="inherit" onClick={() => {
              const path = <Redirect to="/Login" />;
              return (
                ReactDOM.render(
                  <Router history={Hist}>
                    <Route path="/Login" component={Login} />
                    {path}
                  </Router>,
                  document.getElementById("root")
                )
              );

            }}>
              <Lock />  Logout
          </Button>
        </Toolbar>
      </AppBar>
     
      <main   className='content'>
          <Toolbar />
          <Router history={Hist}>
                <Route path="/User/Products/:username" component={Products} />
                <Redirect to={"/User/Products/" + this.props.match.params.username} /> 
          </Router>
      </main>
      
    </div>
    );
  }
}
export default User;
