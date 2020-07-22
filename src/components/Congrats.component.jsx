import React from 'react';
import PropTypes from 'prop-types';

const CongratsComponent = (props) => {
  let congratsMessage = null;

  if (props.success) {
    congratsMessage = (
      <div data-test={'component-congrats'} className="alert alert-success">
        <span data-test={'congrats-message'}>
          Congratulations! You guessed the word!
        </span>
      </div>
    )
  } else {
    congratsMessage = (
      <div data-test={'component-congrats'} />
    )
  }

  return (
    <>
      {congratsMessage}
    </>
  );
};

CongratsComponent.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default CongratsComponent;