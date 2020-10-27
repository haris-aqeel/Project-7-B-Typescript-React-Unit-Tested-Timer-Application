import React from 'react'

type TimerButton = {
    buttonAction: () => void;
    buttonValue: string;
}



const TimerButton = ({buttonAction, buttonValue}:TimerButton) => {
    return (
        <div className='timerbutton'>
            
            <button
              type='button'
              onClick={buttonAction}
            >

              {buttonValue}

            </button>

        </div>
    )
}

export default TimerButton
