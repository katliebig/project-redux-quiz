import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'

const Answers = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()

  const handleAnswer = (option) => {
    const optionIndex = question.options.indexOf(option)
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: optionIndex }))
  }
  let feedback

  if (answer !== undefined) {
    console.log(answer.isCorrect)
    if (answer.isCorrect) {
      feedback = "Correct!"
    } else if (!answer.isCorrect) {
      feedback = `That's wrong! The right answer is ${question.options[question.correctAnswerIndex]}.`
    }
  }

  return (
    <div className="answers">
      {
        question.options.map(option => (
          <div key={option}>
            <input
              type="radio"
              id={option}
              name="answer"
              value={option}
              onClick={() => handleAnswer(option)}
              disabled={answer}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))
      }
      { answer !== undefined && <p>{feedback}</p>}
    </div >
  )
}


export default Answers;