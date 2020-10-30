import React, {useState, useEffect} from 'react'
import TimerButton from '../TimerButton/TimerButton'



function Timer(): JSX.Element {
      
        const [minutes, setminutes] = useState<string>("00");
        const [seconds, setseconds] = useState<string>("00");
        const [milliseconds, setmilliseconds] = useState<string>("00");
        const [isOn, setisOn] = useState<string>("false");
        const [intervalId, setIntervalId] = useState<any>();
       
        useEffect(() => {
            var count1: number = +milliseconds;
            var count2: number = +seconds;
            var count3: number = +minutes;

            if (isOn === "true"){

                const id = setInterval(()=>{
                        
                if (+count1 < 60) {
                    count1++;
                    +count1 < 10 ? setmilliseconds('0' + count1):  setmilliseconds(count1.toString());

                }else {
                    count1 = 0;
                    setmilliseconds("00")
                    if (+seconds <= 59){
                        count2++;
                        count2< 10 ? setseconds('0'+ count2) : setseconds(count2.toString())
                    
                    }else{ 
                        setseconds("00")
                        count2 = 0;
                        count3++;
                        count3< 10 ? setminutes('0'+ count3) : setminutes(count3.toString())
                    }
                }
            
            }, 10);

            setIntervalId(id);
            
            
            return () => clearInterval(id);
        }
    
    }, [isOn, seconds, milliseconds, minutes]);

    
    

        const startTimer = () => {
            setisOn("true");

        }

        const stopTimer = () => {
            setisOn("false"); 
            console.log(intervalId)
           }

        const resetTimer = () => {
            setisOn("false");
            setminutes("00");
            setmilliseconds("00");
            setseconds("00");
           }


        return (

        <div className='timer'>
        
            <h1>
                Timer Application
            </h1>

            <h2 className='TimeDisplay'>
                <span data-testid='minute'>{minutes}</span>:

                <span data-testid='second'>{seconds}</span>:

                <span data-testid='millisecond'>{milliseconds}</span>
            </h2>

            <div className='AllButtons'>
                <TimerButton  buttonAction={startTimer} buttonValue='Start' />
                <TimerButton  buttonAction={stopTimer} buttonValue='Stop' />
                <TimerButton  buttonAction={resetTimer} buttonValue='Reset' />
            </div>

        <p data-testid='isOn' className='hideit'>{isOn}</p>
          


        </div>
    )
}

export default Timer
