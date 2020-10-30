import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import TimerButton from './TimerButton'


describe('Testing Timer Button Component', ()=>{
    
    let timerbutton: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>> 

    beforeEach(() => {
        timerbutton = shallow(
        <TimerButton
            buttonAction={jest.fn()}
            buttonValue={""}
        />)
    })



    it('should render a div with className timerbutton', ()=>{
        expect(timerbutton.find('div').length).toEqual(1)
    })

    it('should have a className of timerbutton', ()=>{
        expect(timerbutton.hasClass('timerbutton')).toEqual(true)
    })


})


describe('Testing Functionality of Timer Component', ()=> {
    
    let mockedFunction: jest.Mock<any, any>;

    beforeEach(()=>{
         mockedFunction = jest.fn();
    })

    it('invokes startTimer when the start button is clicked',()=>{

        const wrapper = shallow(<TimerButton buttonAction={mockedFunction} buttonValue='Start'/>);
        expect(mockedFunction).toHaveBeenCalledTimes(0);    
        wrapper.find('#Start').simulate('click');
        expect(mockedFunction).toHaveBeenCalledTimes(1);       
    })

    it('invokes pauseTimer when the stop button is clicked',()=>{

        const wrapper = shallow(<TimerButton buttonAction={mockedFunction} buttonValue='Stop'/>);
        
        expect(mockedFunction).toHaveBeenCalledTimes(0);    
        wrapper.find('#Stop').simulate('click');
        expect(mockedFunction).toHaveBeenCalledTimes(1);
    })

    it('invokes resetTimer when the rest button is clicked',()=>{

        const wrapper = shallow(<TimerButton buttonAction={mockedFunction} buttonValue='Reset'/>);
        expect(mockedFunction).toHaveBeenCalledTimes(0);    
        wrapper.find('#Reset').simulate('click');
        expect(mockedFunction).toHaveBeenCalledTimes(1);
    })

})