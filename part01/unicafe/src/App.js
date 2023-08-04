import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackTotal = good + neutral + bad;

  const feedbackAverage = (good - bad) / feedbackTotal || 0;

  const feedbackPositive = (100 / feedbackTotal) * good || 0;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <p>good: {good}</p>
      <p> neutral: {neutral} </p>
      <p>bad: {bad}</p>
      <p>total: {feedbackTotal}</p>
      <p>average: {feedbackAverage}</p>
      <p>positive: {feedbackPositive}%</p>
    </div>
  );
};

export default App;
