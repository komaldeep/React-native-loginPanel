import React from 'react';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import Button from './Button';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const rendered = renderer.create(<Button> this is button </Button>).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('on click of button', () => {
  const component = shallow(<Button
    onClick={()=>{}}>
    BUTTON
    </Button>);
  component.simulate( 'onPress' );
});
