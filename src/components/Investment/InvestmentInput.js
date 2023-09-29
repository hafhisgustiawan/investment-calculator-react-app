import { useState } from 'react';

import Button from '../UI/Button';

import styles from './InvestmentInput.module.css';

const InvestmentInput = (props) => {
  const [currentSaving, setCurrentSaving] = useState('');
  const [yearlyContribution, setYearlyContribution] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');

  const currentSavingChangeHandler = (event) => {
    setCurrentSaving(event.target.value * 1);
  };

  const yearlyContributionChangeHandler = (event) => {
    setYearlyContribution(event.target.value * 1);
  };

  const expectedReturnChangeHandler = (event) => {
    setExpectedReturn(event.target.value * 1);
  };

  const durationChangeHandler = (event) => {
    setDuration(event.target.value * 1);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {};
    data['current-saving'] = currentSaving;
    data['yearly-contribution'] = yearlyContribution;
    data['expected-return'] = expectedReturn;
    data['duration'] = duration;
    props.onSubmitData(data);

    setCurrentSaving('');
    setYearlyContribution('');
    setExpectedReturn('');
    setDuration('');
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={currentSavingChangeHandler}
              value={currentSaving}
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
              onChange={yearlyContributionChangeHandler}
              value={yearlyContribution}
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
              onChange={expectedReturnChangeHandler}
              value={expectedReturn}
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
              onChange={durationChangeHandler}
              value={duration}
              min="0.01"
              step="0.01"
              required
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className={styles.actions}>
          <Button onResetData={props.onResetData} type="reset" />
          <Button type="submit" />
        </p>
      </form>
    </div>
  );
};

export default InvestmentInput;
