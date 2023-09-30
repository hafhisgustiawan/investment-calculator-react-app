import { useState } from 'react';

import Button from '../UI/Button';

import styles from './UserInput.module.css';

const initialData = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialData);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value * 1 };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculateData(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialData);
    props.onCalculateData(userInput);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) =>
                inputChangeHandler('current-savings', event.target.value)
              }
              value={userInput['current-savings']}
              min="0.01"
              step="0.01"
              required
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) =>
                inputChangeHandler('yearly-contribution', event.target.value)
              }
              value={userInput['yearly-contribution']}
              min="0.01"
              step="0.01"
              required
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) =>
                inputChangeHandler('expected-return', event.target.value)
              }
              value={userInput['expected-return']}
              min="0.01"
              step="0.01"
              required
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) =>
                inputChangeHandler('duration', event.target.value)
              }
              value={userInput.duration}
              min="0.01"
              step="0.01"
              required
              type="number"
              id="duration"
            />
          </p>
        </div>
        {/* HARUSNYA GAK PERLU SPLIT BUTTON*/}
        <p className={styles.actions}>
          <Button onResetData={resetHandler} type="reset" />
          <Button type="submit" />
        </p>
      </form>
    </div>
  );
};

export default UserInput;
