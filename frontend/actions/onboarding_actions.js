export const UPDATE_ANSWER = 'UPDATE_ANSWER'
export const updateAnswer = (question, answer) => {
  return {
    type: UPDATE_ANSWER,
    question,
    answer

  }
}
