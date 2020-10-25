import React, {useState} from 'react'
import TimerButton from '../TimerButton/TimerButton'


const Timer = () => {

        const [minutes, setminutes] = useState('00')
        const [seconds, setseconds] = useState('00')
        const [milliseconds, setmilliseconds] = useState('00')

        const startTimer = () => {
         
        setTimeout(()=>{
            setmilliseconds((+milliseconds+1).toString())
         },100)
        }

        const stopTimer = () => {
            console.log('Timer is stopped .........')
           }

        const resetTimer = () => {
            console.log('Timer is reset .........')
           }


        return (
        <div className='timer'>
        
            <h1>
                Timer Application
            </h1>

            <h2>
                {minutes}: {seconds}: {milliseconds}
            </h2>

            <div>
                <TimerButton value={'Start'} fn={startTimer} />
                <TimerButton value={'Stop'}  fn={stopTimer}/>
                <TimerButton value={'Reset'} fn={resetTimer} />
            </div>


        </div>
    )
}

export default Timer
