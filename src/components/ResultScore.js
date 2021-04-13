import React from 'react'
import { useSelector } from 'react-redux'

const ResultScore = () => {
    const answers = useSelector((state) => state.quiz.answers)
    let correctAnswers = 0

    for (let answer of answers) {
        if (answer.isCorrect) {
            correctAnswers++
        }
    }

    return (
        <div>
            You got {correctAnswers}/{answers.length} points!
        </div>
    )
}

export default ResultScore