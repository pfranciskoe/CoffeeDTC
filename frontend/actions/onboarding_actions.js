export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const SUBMIT_QUIZ = 'SUBMIT_QUIZ';
import {editTaste} from '../util/taste_profile_api_util'
export const updateAnswer = (question,answer) => {
    return {
        type: UPDATE_ANSWER,
        question,
        answer

    };
};

export const submitQuiz = () => {
    return {
        type: SUBMIT_QUIZ
    };
};