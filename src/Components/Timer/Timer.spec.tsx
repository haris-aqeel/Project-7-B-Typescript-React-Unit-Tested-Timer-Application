import React from 'react'
import {shallow} from 'enzyme';
import Timer from './Timer'

describe('Testing Our Timer Component', ()=> {
    
    const timer = shallow(<Timer/>)
    it('should render a div component', () => {
        expect(timer.find('div').length).toEqual(1)
    })

})