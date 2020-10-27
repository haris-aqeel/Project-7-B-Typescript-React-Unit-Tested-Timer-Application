import React, {useState, useEffect} from 'react'
import TimerButton from '../TimerButton/TimerButton'


function Timer(): JSX.Element {

        const [minutes, setminutes] = useState(25);
        const [seconds, setseconds] = useState(0);
        const [isOn, setisOn] = useState(false);

        const startTimer = () => {
            setisOn(true);
        }

        const stopTimer = () => {
            console.log('stop timer')
           }

        const resetTimer = () => {
            console.log('resest timer')
           }


        return (

        <div className='timer'>
        
            <h1>
                Timer Application
            </h1>

            <h2>

                
                {/* {minutes}: {seconds}: {milliseconds} */}
            </h2>

            <div>
                <TimerButton  buttonAction={startTimer} buttonValue={'Start'} />
                <TimerButton  buttonAction={stopTimer} buttonValue={'Stop'} />
                <TimerButton  buttonAction={resetTimer} buttonValue={'Reset'} />
            </div>

            <p className='state'>
                {isOn ===  true ? "true": "false"}
            </p>


        </div>
    )
}

export default Timer
