import React from 'react'
import { useSelector } from 'react-redux'

const Question = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  console.log(question)
  return (
    <div>
      <h1>Question: {question.questionText}</h1>
    </div>
  )
}

export default Question