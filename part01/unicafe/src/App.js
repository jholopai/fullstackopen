import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  const feedbackTotal = props.good + props.neutral + props.bad;
  const feedbackAverage = (props.good - props.bad) / feedbackTotal || 0;
  const feedbackPositive = (100 / feedbackTotal) * props.good || 0;

  return (
    <div>
      <p>good: {props.good}</p>
      <p> neutral: {props.neutral} </p>
      <p>bad: {props.bad}</p>
      <p>total: {feedbackTotal}</p>
      <p>average: {feedbackAverage}</p>
      <p>positive: {feedbackPositive}%</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  );
};

export default App;
