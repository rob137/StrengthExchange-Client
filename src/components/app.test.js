import React from 'react';
import {shallow} from 'enzyme';

import App from './app';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });

  it('Renders hello world <p> element', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<p>Hello world!</p>)).toEqual(true);
  });
})