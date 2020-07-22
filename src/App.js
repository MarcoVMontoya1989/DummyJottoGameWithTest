import CongratsComponent from "./components/Congrats.component";
import GuessedWordComponent from "./components/GuessedWord.component";
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <CongratsComponent success={false}/>
        <GuessedWordComponent guessedWords={[]} />
      </div>
    );
  }
}

export default App;
