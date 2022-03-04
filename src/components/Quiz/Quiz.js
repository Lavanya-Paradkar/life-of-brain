import React, { useState } from 'react'
import QuizCards from './QuizCards';
import { useRouter } from 'next/router';
import { quizData } from './quizdata';
import Result from './Result';

const Quiz = () => {

    const [questionNumber, setQuestionNumber] = useState(1);
    const [timeOut, setTimeOut] = useState(false);
    const [stop, setStop] = useState(false);
    const [result, setResult] = useState(0);

    const restart = () => {
        setStop(false);
        setQuestionNumber(1);
        setResult(null);
    }

    const router = useRouter();

  return (
    <div className='flex justify-center items-center flex-col'>
        {!stop &&
            <div className='flex flex-col items-center mt-8'>
                <div className='font-bold text-xl lg:text-3xl text-yellow-500'>We <span className='text-green-500 px-2'> DO NOT </span> save your responses</div>
                <div className='font-bold text-2xl lg:text-3xl text-lob_text'>So please be honest to yourself</div>
            </div>
        }
        <div>
            {!stop &&
                <QuizCards
                    quizData={quizData}
                    setTimeOut = {setTimeOut}
                    result = {result}
                    setResult = {setResult}
                    setStop = {setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                />
            }
        </div>
        <div>
            {stop && <Result result={result} restart={restart} router={router}/>}
        </div>  
    </div>
  )
}

export default Quiz