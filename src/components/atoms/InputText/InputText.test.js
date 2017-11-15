import React from 'react';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import InputText from './InputText';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const rendered = renderer.create(
    <InputText
      placeholder="placeholder for tests"
    />).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('onChange of Type input', () => {
  const wrapper = shallow(
    <InputText
      placeholder="placeholder for tests"
      inputFieldValue={()=>{}}
    />
  );
  // const render = wrapper.dive()
  // const spy = jest.spyOn(InputText.prototype, 'inputVale');
  // wrapper.update();
  //
  // render.find('TextInput').simulate('onChangeText', { target: {
  //   text: 'Change function' },
  // });
  //
  // expect(spy).toHaveBeenCalled();
  // console.log(render.find('TextInput'),'render');
  // expect(render.state('text')).toEqual('Change function');

  // const instance = InputText.instance
  // const spy = jest.spyOn(instance, 'inputValue')
  //
  // instance.forceUpdate();
  //
  // const p = app.find('TextInput')
  // p.simulate('onChangeText')
  // expect(spy).toHaveBeenCalled()

});


test('onChangeText of Text Input', () => {

  let loginComponent = renderer.create(<InputText
    placeholder="placeholder for tests"
    inputFieldValue={()=>{}}
  />).getInstance();

  loginComponent.inputValue('some_password')
  expect(loginComponent.state.text).toEqual('some_password');
  expect(loginComponent.props.placeholder).toEqual('placeholder for tests');

});
