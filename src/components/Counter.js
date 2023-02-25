import React, { Component } from "react";
// import ReactDOM from "react-dom";

export class Counter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    onPositiveBtn = () => {
        this.setState(state => ({
          good: state.good + 1,
        }));
    };

    onNeutralBtn = () => {
        this.setState(state => ({
          neutral: state.neutral + 1,
        }));
    };

    onNegativeBtn = () => {
        this.setState(state => ({
          bad: state.bad + 1,
        }));
    };

    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        return good+neutral+bad;
    }

    countPositiveFeedbackPercentage = () => {
        const {good, neutral, bad} = this.state;
        const total = good+neutral+bad;
        const positiveFeedback = Math.round(good*(100/total));
        return positiveFeedback;
    }

    render() {
        const {good, neutral, bad} = this.state;
        return (
        <>
            <div>
                <h2>Please leave feedback</h2>
                <div>
                    <button type="button" onClick={this.onPositiveBtn}>Good</button>
                    <button type="button" onClick={this.onNeutralBtn}>Neutral</button>
                    <button type="button" onClick={this.onNegativeBtn}>Bad</button>
                </div>
            </div>
            <div>
                <h2>Statistics</h2>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {this.countTotalFeedback()}</p>
                <p>Positive feedback: {good && this.countPositiveFeedbackPercentage()}%</p>
            </div>
        </>
        );
    }
}