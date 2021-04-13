import React from 'react'
import { useSelector } from 'react-redux'

import Question from './Question'
import Answers from './Answers'
import Counter from './Counter'
import NextButton from './NextButton'
import Image from './Image'

const CurrentQuestion = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver)

  return (
    <>
      {!quizOver &&
        <div>
          <Image />
          <Question />
          <Counter />
          <Answers />
          <NextButton />
        </div>
      }
    </>
  )
}

export default CurrentQuestion