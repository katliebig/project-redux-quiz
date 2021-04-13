import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'How tall is Nicolas Cage?', options: ['1.83 m', '1.76 m', '1.69 m', '1.95 m'], correctAnswerIndex: 0 },
  { id: 2, questionText: 'How many times has Nicolas Cage been married?', options: ['3 times', '0 times', '5 times', '1 time'], correctAnswerIndex: 2 }
  // { id: 3, questionText: 'In what name was Nicolas Cage born?', options: ['Nicolas Cage Kim', 'August Nicolas Coppola', 'Nicolas Coppola Cage', 'Nicolas Kim Coppola'], correctAnswerIndex: 3 },
  // { id: 4, questionText: 'What does Nicolas Cage collect?', options: ['Stamps', 'Comic books', 'Postcards', 'Hats'], correctAnswerIndex: 1 },
  // { id: 5, questionText: 'What year was Nicolas Cage born?', options: ['1968', '1956', '1964', '1959'], correctAnswerIndex: 2 },
  // { id: 6, questionText: 'How many Oscars for best actor has he won?', options: ['none', '1', '2', '3'], correctAnswerIndex: 2 },
  // { id: 7, questionText: 'Which of the following movies did Nicolas Cage not act in?', options: ['Face off', 'City of Angels', 'Shrek', 'The Ant Bully'], correctAnswerIndex: 2 },
  // { id: 8, questionText: 'Which of the following estates have Nicolas Cage not owned?', options: ['an island in the Bahamas territory', 'a medieval castle in Bavaria, Germany', 'Diamond Head Villa on Oahu, Hawaii', 'Midford Castle in Somerset, England'], correctAnswerIndex: 2 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    }

  }
})
