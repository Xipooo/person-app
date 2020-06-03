import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import PersonList from './PersonList';

describe('App', () => {

  let appWrapper;
  beforeEach(() => {
    appWrapper = shallow(<App />);
  });
   
  it('should render a PersonList component', () => {
    const personList = appWrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  });

  it('should not have null state', () => {
    const appState = appWrapper.state();
    expect(appState).not.toBeNull();
  });

  it('should have a people property on the state', () => {
    const appState = appWrapper.state();
    expect(appState.people).toBeDefined();
  });

  it('should pass people property of state to personList props', () => {
    const personList = appWrapper.find(PersonList);

    expect(personList.props().people).toEqual(appWrapper.state().people);
  });
});
