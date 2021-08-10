import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { createBrowserHistory } from 'history';
import ExampleAlert from './components/ExampleAlert';
import Home from './components/Home/Home';
import AppContext from './components/AppContext';
import { createStore } from 'redux';
import combainedall from './components/Reducers'
import { Provider} from 'react-redux';
import store from './redux/reducers/store';

// const store = createStore(combainedall, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = createBrowserHistory();

export const App = () => {


  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </Provider>

    </div>
  )

}

export default App
