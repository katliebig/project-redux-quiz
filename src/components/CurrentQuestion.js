import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Question from './Question'
import Answers from './Answers'
import Counter from './Counter'
import NextButton from './NextButton'
import Image from './Image'

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 100px;
`
const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
 `

const QuestionAnswer = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
width: 600px;
`

const ImageNextButton = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const CurrentQuestion = () => {
  const quizOver = useSelector((state) => state.quiz.quizOver)

  return (
    <>
      {!quizOver &&
        <Container>
            <Counter />
            <InnerContainer>
              <QuestionAnswer>
                <Question />
                <Answers />
              </QuestionAnswer>
              <ImageNextButton>
                <Image />
                <NextButton />
              </ImageNextButton>
            </InnerContainer>
        </Container>
      }
    </>
  )
}

export default CurrentQuestion