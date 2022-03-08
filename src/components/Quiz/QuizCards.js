import React, { useEffect, useState } from 'react';
import styles from './Quiz.module.scss';

const QuizCards = ({quizData, setTimeOut, result, setResult, setStop, questionNumber, setQuestionNumber}) => {

    const [questions, setQuestions] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [content, setContent] = useState(null);

    useEffect(() => {
      setQuestions(quizData[questionNumber - 1]);
    }, [quizData, questionNumber]);

    const Refresh = ({children}) => {
        const active = content != setContent
        if (active) {
            return (
                <div>
                    {children}
                </div>
            )
        }
    }

    const delay = (duration, callback) => {
        setTimeOut(()=>{
            callback();
        }, duration)
    };
    
    
    const handleClick = (index) => {
        setSelectedAnswer(index);
        setContent(c => c + 1);
        delay(1000, () =>
            setResult((curr) => curr + index)
        );
        delay(6000, () => {
            setQuestionNumber((prev) => prev + 1)
            if(questionNumber === 10)
            {
                setStop(true);
            }
            
            
        });
        //console.log(result);
    };

  return (
    <Refresh>
        <div className='flex mt-10 items-center overflow-y-hidden w-auto max-w-128 mx-2 h-auto border border-blue-50 rounded-xl shadow-2xl animate-fadeIn'>
            <div className='flex flex-col p-4'>
                <div className='text-2xl font-semibold p-2 mb-2'>
                    {questions?.question}
                </div>
                <div>
                    {questions?.answers.map((index)=>(
                        <div key={index.value} onClick={()=>handleClick(index.value)} className={index.value === 0 ? styles.answer0 : (
                            index.value === 1 ? styles.answer1 : (
                                index.value === 2 ? styles.answer2 : (
                                    index.value === 3 ? styles.answer3 : styles.answer3
                                )
                            )
                        )}>
                            {index.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Refresh>
  )
}

export default QuizCards