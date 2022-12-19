import { useState, useContext } from "react";

const CounterPage = () => {
  const { username } = useContext(LoginContext);

  const [count, setCount] = useState(0);
  const [initialCount, setInitialCount] = useState();
  const [incrementValue, setIncrementValue] = useState(0);

  const decreaseCount = () => setCount((prevCount) => prevCount - 1);

  const increaseCount = () => setCount((prevCount) => prevCount + 1);

  const increaseByValue = (value) => {
    setCount((prevCount) => Number(prevCount) + Number(value));
    // setIncrementValue(0)
  };

  return (
    <div>
      <h1>Welcome to Counter Page : {username}</h1>
      <div>
        <button onClick={decreaseCount}>-</button>
        <span> {count} </span>
        <button onClick={increaseCount}>+</button>

        <div>
          <input
            type="number"
            value={incrementValue}
            onChange={(e) => setIncrementValue(e.target.value)}
          />
          <button onClick={() => increaseByValue(incrementValue)}>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
