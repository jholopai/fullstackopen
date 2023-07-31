import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);

  const increaseNeutral = () => setNeutral(neutral + 1);

  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={increaseGood} text="good"></Button>
      <Button handleClick={increaseNeutral} text="neutral"></Button>
      <Button handleClick={increaseBad} text="bad"></Button>
      <p>good: {good}</p>
      <p> neutral: {neutral} </p>
      <p>bad: {bad}</p>
    </div>
  );
};

export default App;