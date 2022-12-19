import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "../../styles/Counter.module.css";

const CounterPage = () => {
  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);

  const [count, setCount] = useState(0);
  const [initialCount, setInitialCount] = useState();
  const [incrementValue, setIncrementValue] = useState(0);

  const decreaseCount = () => setCount((prevCount) => prevCount - 1);

  const increaseCount = () => setCount((prevCount) => prevCount + 1);

  const increaseByValue = (value) => {
    setCount((prevCount) => Number(prevCount) + Number(value));
  };

  useEffect(() => {
    !user && router.push("/");
  }, [user]);

  return (
    <div className={styles.countcard}>
      <div className={styles.header}>
        <h1>Welcome to Counter Page:</h1>
        <p>LoggedIn as: {user ? user : ""}</p>
        <button className={styles.headerbtn} onClick={() => setUser(null)}>
          {" "}
          LOGOUT
        </button>
      </div>
      <div className={styles.mainsection}>
        <button className={styles.button} onClick={decreaseCount}>
          -
        </button>
        <span className={styles.count}> {count} </span>
        <button className={styles.button} onClick={increaseCount}>
          +
        </button>
        <div className={styles.inputbox}>
          <p>Enter Custom Number to Add</p>
          <div className={styles.inputarea}>
            <input
              type="number"
              value={incrementValue}
              onChange={(e) => setIncrementValue(e.target.value)}
            />
            <button
              className={styles.button}
              onClick={() => increaseByValue(incrementValue)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
