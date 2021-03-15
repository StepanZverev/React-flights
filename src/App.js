import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Main from './pages/Main/Main';
import { autoLogin } from './store/loginReducer';

function App(props) {
  React.useEffect(() => {
    props.autoLogin();
  }, [])
  console.log(props.isAuthenticated);
  return (
    <div>
      {props.isAuthenticated ?
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
        :
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>
      }

    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.login.token,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
