import React from 'react'
import { shallow } from 'enzyme'
import Panel from '../src/components/panel'

describe('Testing Panel component', () => {
    it('render correctly', () => {
        const wrapper = shallow(
            <Panel />,
        );
    expect(wrapper).toMatchSnapshot();
    })
})