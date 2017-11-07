import React from 'react';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import InputText from './InputText';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const rendered = renderer.create(<InputText placeholder="placeholder for tests"/>).toJSON();
  expect(rendered).toMatchSnapshot();
});

// test('on change of Type input', () => {
//   const wrapper = mount(
//     <InputText
//       placeholder="placeholder for tests"
//       inputFieldValue={()=>{}}
//     />
//   );
//   wrapper.find('TextInput').simulate('onChangeText', { target: {
//     text: 'Change function' },
//   });
//   expect(wrapper.state().text).toEqual('Change function');
// });
