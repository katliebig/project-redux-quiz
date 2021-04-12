import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import Question from './Question'
import Answers from './Answers'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver)

  // console.log(quizOver)

  const dispatch = useDispatch()

  if (!question) {
    return
  }

  return (
    <div>
      <Question />
      <Answers />
      <button onClick={() => dispatch(quiz.actions.goToNextQuestion())} disabled={!answer}>
        Go to next Question
      </button>
    </div>
  )
}