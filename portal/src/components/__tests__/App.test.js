import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

test('renders without crashing', () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());
    expect(wrapper).toBeTruthy();
});
