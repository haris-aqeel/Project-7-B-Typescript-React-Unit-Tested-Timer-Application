import React from 'react'
import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';
import Timer from './Timer'
import TimerButton from '../TimerButton/TimerButton'


// describe('Testing User Interface of our Timer Component', ()=> {
    
//     let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

//     beforeEach(()=>(container = shallow(<Timer />)))

//     it('should render a div component', () => {
//         expect(container.find('div').length).toBeGreaterThanOrEqual(1)
//     })

//     it('should render a h1 component', () => {
//         expect(container.containsMatchingElement(<h1> Timer Application</h1>)).toBe(true)
//     })  
// })



describe('mounted Timer', () => {

    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    beforeEach(()=>{
        container = shallow(<Timer/>);
    })



    // it('Accepts Right Prps by First Button', () => {
        
    //     expect(container.find('TimerButton').at(0).props()).toEqual({
    //         buttonAction: expect.any(Function),
    //         buttonValue: 'Start'
    //     })

    //   });




      it('should change isOn state true when the start button is clicked', () => {
        
        let mockedFunction = jest.fn();
        const wrapper = shallow(<TimerButton buttonAction={mockedFunction} buttonValue='Start'/>);
        wrapper.find('button').simulate('click');  
        expect(container.find('.state').text()).toEqual("true");
      
      });








    //   it('Accepts Right Prps by Second Button', () => {
        
    //     expect(container.find('TimerButton').at(1).props()).toEqual({
    //         buttonAction: expect.any(Function),
    //         buttonValue: 'Stop'
    //     })

    //   });










    //   it('Accepts Right Prps by Third Button', () => {
        
    //     expect(container.find('TimerButton').at(2).props()).toEqual({
    //         buttonAction: expect.any(Function),
    //         buttonValue: 'Reset'
    //     })

    //   }); 

})