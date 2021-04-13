import React from 'react'
import { useSelector } from 'react-redux'
import ResultScore from './ResultScore'
import ResultComment from './ResultComment'
import Image from './Image'
import RestartButton from './RestartButton'

const Summary = () => {
    const quizOver = useSelector((state) => state.quiz.quizOver)

    return (
        <>
            { quizOver &&
                <div>
                    <Image />
                    <ResultScore />
                    <ResultComment />
                    <RestartButton />
                </div>
            }
        </>
    )
}

export default Summary