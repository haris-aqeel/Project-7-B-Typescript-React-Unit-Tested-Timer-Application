import React from 'react'
import { shallow } from 'enzyme'
import App from './App'



describe('Testing A React App component', ()=> {
    const selectAppComponent = shallow(<App/>);

    it('should return or render a single <div/>', ()=> {

        expect(selectAppComponent.find('div').length).toEqual(1);

    })

    // it('should contain a <Timer/> Component', ()=> {

    //     expect(selectAppComponent.find('div').length).toEqual(1);

    // })





})