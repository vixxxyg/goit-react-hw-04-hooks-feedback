import { useState } from 'react';
import Statistics from './Components/Statistics';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Notification from './Components/Notification';
import './App.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = key => {
    switch (key) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const calcTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const total = calcTotalFeedback();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given yet" />
        )}
      </Section>
    </div>
  );
}
