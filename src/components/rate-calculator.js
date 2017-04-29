import React from 'react';

import NumberInput from './number-input';
import Output from './output';

// Update this component
export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dayRate: 1,
          hours: 1,
          hrRate: 1
        };
        //why is bind not needed here???
        // this.setDayRate = this.setDayRate.bind(this);
        // this.setHours = this.setHours.bind(this);
    }

    setDayRate(dayRate) {
      this.setState({
        dayRate
      });
      this.setHrRate();
    }

    setHours(hours) {
      this.setState({
        hours
      });
      this.setHrRate();
    }

    setHrRate() {
      this.setState({
        hrRate: (this.state.dayRate/this.state.hours).toFixed(2)
      });
    }

    render() {
        console.log('render');
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000}
                value={this.state.dayRate}
                onChange={event => this.setDayRate(event.target.value)}/>
                <NumberInput id="hours" label="Hours" min={1} max={12}
                value={this.state.hours}
                onChange={event => this.setHours(event.target.value)}/>
                <Output id="hourly-rate" label="Hourly rate" value={this.state.hrRate}
                />
            </form>
        );
    }
}
