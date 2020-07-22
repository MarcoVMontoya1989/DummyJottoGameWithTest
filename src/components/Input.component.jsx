import React, {Component} from 'react';
import {connect} from 'react-redux';

import GuessedWordComponent from "./GuessedWord.component";

class InputComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentGuess: null
    };
  };

  render() {
    const {success} = this.props;

    const content = success ? null :
      <form className="form-inline">
        <input type="text"/>
        <button
          className="btn btn-primary mb-2"
          type={'submit'}

        >
          Submit
        </button>
      </form>;

    return (
      <div>
        
      </div>
    );
  }
};

const mapStateToProps = ({

});

export default connect(null, null)(InputComponent);