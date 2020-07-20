import React from 'react';
import CongratsComponent from "./components/Congrats.component";
import GuessedWordComponent from "./components/component-test/GuessedWord.component";

import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <CongratsComponent success={false}/>
        <GuessedWordComponent guessedWords={[]} />
      </div>
    );
  }
}

export default App;
