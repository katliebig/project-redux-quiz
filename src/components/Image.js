import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const Container = styled.div`
`
const ImagePhoto = styled.img`
width: 250px;
`
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
        <Container>
            { !quizOver && <ImagePhoto src="./assets/nicolas-cage-smiling.png"></ImagePhoto>}
            { (quizOver && score >= 0.7) && <ImagePhoto src="./assets/nicolas-cage-oscar.png"></ImagePhoto>}
            { (quizOver && (score >= 0.5 && score < 0.7)) && <ImagePhoto src="./assets/nicolas-cage-close-up.png"></ImagePhoto>}
            { (quizOver && score < 0.5) && <ImagePhoto src="./assets/nicolas-cage-scared.png"></ImagePhoto>}
        </Container>
    )
}
export default Image