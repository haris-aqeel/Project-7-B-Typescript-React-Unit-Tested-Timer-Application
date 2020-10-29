import React from 'react'
import { shallow, ShallowWrapper} from 'enzyme';
import Timer from './Timer'
import { render, fireEvent, getByTestId} from "@testing-library/react";



describe('Testing User Interface of our Timer Component', ()=> {
    
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

    beforeEach(()=>(container = shallow(<Timer />)))

    it('should render a div component', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    })

    it('should render a h1 component', () => {
        expect(container.containsMatchingElement(<h1> Timer Application</h1>)).toBe(true)
    })  
})



describe('Testing Functionalities of Timer Component', () => {

  
  it('should change isOn state when the start button is clicked', () => {
    
    const { container } = render(<Timer />);
    const countState = getByTestId(container, "isOn");
    const clickOnElement = getByTestId(container,'Start');
    fireEvent.click(clickOnElement) 
    expect(countState.textContent).toBe("true")

  });

  it('should change isOn false when the stop button is clicked', () => {
    
    const { container } = render(<Timer />);
    const countState = getByTestId(container, "isOn");
    const clickOnElement = getByTestId(container,'Stop');
    fireEvent.click(clickOnElement) 
    expect(countState.textContent).toBe("false")

  });

  it('should change isOn state false when the reset button is clicked', () => {
    
    const { container } = render(<Timer />);
    const countState = getByTestId(container, "isOn");
    const clickOnElement = getByTestId(container,'Reset');
    const minuteText = getByTestId(container,'minute');
    const secondText = getByTestId(container,'second');
    const thirdText = getByTestId(container,'millisecond');
    fireEvent.click(clickOnElement); 
    expect(countState.textContent).toBe("false");
    expect(minuteText.textContent).toBe("00");
    expect(secondText.textContent).toBe("00");
    expect(thirdText.textContent).toBe("00");

   


  });





  describe('Checking Props', ()=>{

    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    beforeEach(()=>{
      container = shallow(<Timer />)
    })


    it('Accepts Right Prps by First Button', () => {

        
      expect(container.find('TimerButton').at(0).props()).toEqual({
          buttonAction: expect.any(Function),
          buttonValue: 'Start'
      })

    });

    it('Accepts Right Prps by Second Button', () => {
      
      expect(container.find('TimerButton').at(1).props()).toEqual({
          buttonAction: expect.any(Function),
          buttonValue: 'Stop'
      })

    });

    it('Accepts Right Prps by Third Button', () => {
      
      expect(container.find('TimerButton').at(2).props()).toEqual({
          buttonAction: expect.any(Function),
          buttonValue: 'Reset'
      })

    }); 
  })

   

})