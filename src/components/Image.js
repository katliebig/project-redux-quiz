import React from 'react'
import { useSelector } from 'react-redux'

const Image = () => {
    const quizOver = useSelector((state) => state.quiz.quizOver)
    const answers = useSelector((state) => state.quiz.answers)
    let correctAnswers = 0

    for (let answer of answers) {
        if (answer.isCorrect) {
            correctAnswers++
        }
    }

    const score = (correctAnswers / answers.length)

    return (
        <>
            { !quizOver && <img src="./assets/nicolas-cage-smiling.png" />}
            { (quizOver && score >= 0.7) && <img src="./assets/nicolas-cage-oscar.png" />}
            { (quizOver && (score >= 0.5 && score < 0.7)) && <img src="./assets/nicolas-cage-close-up.png" />}
            { (quizOver && score < 0.5) && <img src="./assets/nicolas-cage-scared.png" />}
        </>
    )
}

export default Image