import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

const Answers = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()

  const handleAnswer = (option) => {
    const optionIndex = question.options.indexOf(option)
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: optionIndex }))
  }

  return (
    <div className="answers">
      {
        question.options.map(option => (
          <div>
            <input type="radio" id={option} name="answer" value={option} onClick={() => handleAnswer(option)} />
            <label htmlFor={option}>{option}</label>
          </div>
        ))
      }
    </div>
  )
}

export default Answers;