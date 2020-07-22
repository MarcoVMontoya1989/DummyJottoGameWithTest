const INITIAL_STATE = {
  guessedWord: null,
  error: null,
};

const guessedWordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '':
      return {
        ...state,
        guessedWord: action.payload,
      }
    case '':
      return {
        ...state,
        error: null,
      }
    default:
      return state;
  }
};

export default guessedWordReducer;