import React from 'react';

const CongratsComponent = (props) => {
  let congratsMessage = null;

  if (props.success) {
    congratsMessage = (
      <div data-test={'component-congrats'}>
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

export default CongratsComponent;