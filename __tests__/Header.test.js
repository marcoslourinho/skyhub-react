import React from 'react'
import { shallow } from 'enzyme'
import Header from '../src/components/header'

describe('Testing Header component', () => {
    it('render correctly', () => {
        const wrapper = shallow(
            <Header />
        );

        expect(wrapper).toMatchSnapshot();
    })
})