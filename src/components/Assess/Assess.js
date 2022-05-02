import React, { useState } from 'react'
import QuizCards from '../Quiz/QuizCards';

const Assess = () => {

    const [questionNumber, setQuestionNumber] = useState(1);
    const [timeOut, setTimeOut] = useState(false);
    const [stop, setStop] = useState(false);
    const [value, setValue] = useState(null);
    const [result, setResult] = useState(0);

  return (
    <div className='flex justify-center items-center flex-col'>
        <div>
            {!stop &&
                <QuizCards
                    setTimeOut = {setTimeOut}
                    result = {result}
                    setResult = {value}
                    setStop = {setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                />
            }
        </div>
    </div>
  )
}

export default Assess