import {combineReducers} from "redux";

import guessedWordReducer from "./reducers/guessWord.reducer";

export default combineReducers({
  guess: guessedWordReducer
});
