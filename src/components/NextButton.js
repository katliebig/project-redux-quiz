import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from '../reducers/quiz'

const NextButton = () => {
  const answer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(quiz.actions.goToNextQuestion())} disabled={!answer}>
      Go to next Question
    </button>
  )
}

export default NextButton