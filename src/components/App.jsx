import React, { Component } from "react";

import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (evt) => {
    const option = evt.target.name;
    this.setState(prevState => {
      return {[option]: prevState[option] + 1}
    });
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good+neutral+bad;
  };

  countPositiveFeedbackPercentage = () => {
    const {good, neutral, bad} = this.state;
    const total = good+neutral+bad;
    const positiveFeedback = Math.round(good*(100/total));
    return positiveFeedback;
  };

  render() {
    const {good, neutral, bad} = this.state;
    const total = good+neutral+bad;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total > 0 
        ? (<Section title="Statistics">
          <Statistics 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.countTotalFeedback()} 
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>)
        : (<Notification message="There is no feedback"></Notification>)
        }
      </div>
    );
  };
};
