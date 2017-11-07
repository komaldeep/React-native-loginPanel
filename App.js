import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";
import logger from "redux-logger";

import * as reducers from './src/reducers';
import Login from './src/components/pages/Login';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
import { Router, Scene } from 'react-native-router-flux';

export default class App extends Component {

  navigatorRenderScene(route,navigator){
    switch (route.id){
      case "Login":
        return(<Login navigator={navigator} title ="Login"/>);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="Login" component={Login} hideNavBar={true} initial={true} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
