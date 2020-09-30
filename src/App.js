import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Students from './containers/Students/Students';
import Student from './components/Student/Student';
import StudentForm from './containers/StudentForm/StudentForm';
import Login from './auth/Login/Login';
import PrivateRoute from './components/routes/PrivateRoute/PrivateRoute';

import { Provider } from 'react-redux';
import store, { rrfProps } from './store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <div className="App">
            <PrivateRoute component={Navbar} /> 
            <Switch>
              <PrivateRoute exact path="/" component={Students} /> 
              <PrivateRoute exact path="/student/:id" component={Student} /> 
              <PrivateRoute exact path="/studentform/:id?" component={StudentForm} /> 
              <Route exact path="/login" component={Login} />
            </Switch>

          </div>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
