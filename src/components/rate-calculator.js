import React from 'react';

import NumberInput from './number-input';
import Output from './output';

// Update this component
export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dayRate: 400,
          hours: 1
        };
        //why is bind not needed here???
        // this.setDayRate = this.setDayRate.bind(this);
        // this.setHours = this.setHours.bind(this);
    }

    setDayRate(dayRate) {
      this.setState({
        dayRate
      });
    }

    setHours(hours) {
      this.setState({
        hours
      })
    }

    calcHrRate() {
      return (this.state.dayRate/this.state.hours).toFixed(2);
    }

    render() {
        const rate = this.calcHrRate();
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000}
                value={this.state.dayRate}
                onChange={value => this.setDayRate(value)}/>
                <NumberInput id="hours" label="Hours" min={1} max={12}
                value={this.state.hours}
                onChange={value => this.setHours(value)}/>
                <Output id="hourly-rate" label="Hourly rate" value={rate}
                />
            </form>
        );
    }
}
