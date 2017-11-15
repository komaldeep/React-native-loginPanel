import React from 'react';
import findById from './../../../../test/find';
import { shallow, mount } from 'enzyme'
import Button from './Button';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const rendered = renderer.create(<Button> this is button </Button>).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('onPress of button', () => {
  const component = renderer.create(<Button
    onClick={()=>{}}
  >
    BUTTON
  </Button>).toJSON();

  expect(findById(component, 'button')).toBeDefined()
});
