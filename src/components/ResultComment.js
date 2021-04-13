import React from 'react'
import { useSelector } from 'react-redux'

const ResultComment = () => {
    const answers = useSelector((state) => state.quiz.answers)
    let correctAnswers = 0

    for (let answer of answers) {
        if (answer.isCorrect) {
            correctAnswers++
        }

    }
    const score = (correctAnswers / answers.length)

    return (

        <div>
            {score >= 0.7 && <p>You are a pro!</p>}
            {(score >= 0.5 && score < 0.7) && <p>You did pretty ok!</p>}
            {score < 0.5 && <p>You really don't care about Nicolas Cage, do you??</p>}
        </div>
    )
}

export default ResultComment