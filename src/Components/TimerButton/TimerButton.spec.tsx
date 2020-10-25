import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import TimerButton from './TimerButton'

describe('Testing Timer Button Component', ()=>{
    
    let timerbutton: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>> 

    beforeEach(() => {
        timerbutton = shallow(
        <TimerButton
            fn={jest.fn()}
            value={""}
        />)
    })



    it('should render a div with className timerbutton', ()=>{
        expect(timerbutton.find('div').length).toEqual(1)
    })

    it('should have a className of timerbutton', ()=>{
        expect(timerbutton.hasClass('timerbutton')).toEqual(true)
    })

    it('should contain button Component', ()=>{
        expect(timerbutton.find('button').length).toEqual(1)
    })


})
