import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

// Update this component
export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        //initial state is to show the button
        this.state = {
          showGif: false
        }
        //required for this.setState to work in setShowGif
        this.setShowGif = this.setShowGif.bind(this);
    }

    //method to switch state
    //takes boolean argument
    setShowGif(showGif) {
      this.setState({
        showGif: showGif
      });
    }

    render() {
        // Show the button to start with
        if (!this.state.showGif) {
          return <SurpriseButton onClick={()=>this.setShowGif(true)}/>;
        }

        return <SurpriseImage />;
    }
}
