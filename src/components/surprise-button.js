import React from 'react';

// Update this component
export default function SurpriseButton(props) {
    //you need to give the button access to callback function to change state of parent
    return (
      <button onClick={props.onClick}>
        Surprise!
      </button>
    );

}
