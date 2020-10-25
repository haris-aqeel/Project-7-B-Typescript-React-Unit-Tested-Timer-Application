import React from 'react'

type TimerButton = {
    fn: () => void;
    value: string;
}



const TimerButton = ({fn, value}:TimerButton) => {
    return (
        <div className='timerbutton'>
            <button
            type='button'
            onClick={fn}>
            {value}
            </button>
        </div>
    )
}

export default TimerButton
