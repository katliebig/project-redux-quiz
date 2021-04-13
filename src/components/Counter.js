import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Paragraph = styled.p`
    display: flex;
    align-self: center;
`

const Counter = () => {
    const currentQuestion = useSelector((state) => state.quiz.currentQuestionIndex + 1)
    const totalQuestions = useSelector((state) => state.quiz.questions.length)
    return (
        <Paragraph>{currentQuestion}/{totalQuestions}</Paragraph>
    )
}

export default Counter