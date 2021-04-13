import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex + 1)
    const totalQuestions = useSelector((state) => state.quiz.questions.length)
    return (
        <p>{currentQuestion}/{totalQuestions}</p>
    )
}

export default Counter