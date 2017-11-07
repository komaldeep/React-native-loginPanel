import React from 'react';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import Login from './Login';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

import * as reducers from '../../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

test('renders without crashing', () => {
  const rendered = renderer.create(<Provider store={store}><Login /></Provider>).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('on click of button', () => {
  const component = shallow(<Provider store={store}><Login /></Provider>);
  component.simulate( 'onPress' );
  expect(component).toMatchSnapshot();
});