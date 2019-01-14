import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import List from '../src/components/list'

const INITIAL_STATE = {
    data: [
        {
            "id": "5c3c05c5129cb305b918ac65",
            "name": "Relatório de Plataformas",
            "status": "Created",
            "createAt": "2019-01-14T03:45:09.893Z",
            "account": "5c37532a129cb305b9104c2b",
            "filters": {
                "platform_id": "5a4996200000000000000000",
                "start_date": "2019-01-01",
                "end_date": "2019-01-04"
            }
        },
        {
            "id": "5c3c05c5129cb305b918ac66",
            "name": "Relatório de Plataformas",
            "status": "Created",
            "createAt": "2019-01-13T03:45:09.893Z",
            "account": "5c37532a129cb305b9104c2b",
            "filters": {
                "platform_id": "5a4996200000000000000000",
                "start_date": "2019-01-01",
                "end_date": "2019-01-04"
            }
        },
        {
            "id": "5c3c05c5129cb305b918ac66",
            "name": "Relatório de Plataformas",
            "status": "Created",
            "createAt": "2019-01-12T03:45:09.893Z",
            "account": "5c37532a129cb305b9104c2b",
            "filters": {
                "platform_id": "5a4996200000000000000000",
                "start_date": "2019-01-01",
                "end_date": "2019-01-04"
            }
        }
    ]
}

const mockStore = configureStore();
const store = mockStore(INITIAL_STATE);

describe('Testing List component', () => {
    it('render correctly', () => {
        const wrapper = shallow(
            <List />,
            {context : { store }}
        ).dive;
        
        expect(wrapper).toMatchSnapshot();
    })
})