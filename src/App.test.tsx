import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import {HogeComponent} from './components/hogeComponent'
​
configure({ adapter: new Adapter() });
​
function setup() {
  const props = {
    email:'email',
    name:'name',
    startLogin:jest.fn(),
    updateEmail:jest.fn(),
    updateName:jest.fn(),
  };
​
  const dom = <HogeComponent {...props} />;
  const enzymeWrapper = shallow(dom)
​
  return {
    props,
    enzymeWrapper
  }
}
​
describe('components', () => {
  describe('HogeComponent', () => {
    it('should render self and subcomponents', () => {
      const { props, enzymeWrapper } = setup()
​
      expect(enzymeWrapper.find('.field').length).toBe(2);
      expect(enzymeWrapper.find('#input-text-name').length).toBe(1);
      expect(enzymeWrapper.find('#input-text-email').length).toBe(1);
​
      expect(enzymeWrapper.find('#input-text-name').props().value).toBe('name');
      expect(enzymeWrapper.find('#input-text-email').props().value).toBe('email');
​      expect(enzymeWrapper.find('#output').text()).toBe('name:email');
​
      expect(props.startLogin.mock.calls.length).toBe(1)
      // const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
      // expect(todoInputProps.newTodo).toBe(true)
      // expect(todoInputProps.placeholder).toEqual('What needs to be done?')
    })
​
    it('should call addTodo if length of text is greater than 0', () => {
      // const { enzymeWrapper, props } = setup()
      // const input = enzymeWrapper.find('TodoTextInput')
      // input.props().onSave('')
      // expect(props.addTodo.mock.calls.length).toBe(0)
      // input.props().onSave('Use Redux')
      // expect(props.addTodo.mock.calls.length).toBe(1)
    })
  })
})