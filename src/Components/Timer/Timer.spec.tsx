import React from 'react'
import {shallow} from 'enzyme';
import Timer from './Timer'
import TimerButton from '../TimerButton/TimerButton';

describe('Testing Our Timer Component', ()=> {
    
    const timer = shallow(<Timer/>)

  

    it('should render a div component', () => {
        expect(timer.find('div').length).toBeGreaterThanOrEqual(1)
    })

    it('should render a h1 component', () => {
        expect(timer.find('h1').length).toEqual(1)
    })

    it('should render a h2 component', ()=>{
        expect(timer.find('h2').length).toEqual(1)
    })

    // it('should contain TimerButton Component', ()=>{
    //     expect(timer.containsMatchingElement(<TimerButton value={} fn={}/>)).toEqual(true)
    // })

    it('should contain three instances of TimerButton Component', ()=>{
        expect(timer.find("TimerButton").length).toEqual(3)
    })


    
    
})