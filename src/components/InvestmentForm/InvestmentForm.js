import React, { useState } from "react";
import './InvestmentForm.css';

const initialUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  'duration': 5
}

const InvestmentForm = props => {

  const [userInput, setUserInput] = useState(initialUserInput)

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value
      }
    })
  }

  const submitHandler = event => {
    event.preventDefault();
    props.onCalculate(userInput)
  }

  const resetHandler = () => {
    setUserInput(initialUserInput)
  }

    return <form onSubmit={submitHandler} className="form">
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input type="number" value={userInput['current-savings']} onChange={(event) => inputChangeHandler('current-savings', event.target.value)} id="current-savings" />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input type="number"  value={userInput['yearly-contribution']} onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} id="yearly-contribution" />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input type="number" value={userInput['expected-return']} onChange={(event) => inputChangeHandler('expected-return', event.target.value)} id="expected-return" />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input type="number" value={userInput['duration']} onChange={(event) => inputChangeHandler('duration', event.target.value)} id="duration" />
      </p>
    </div>
    <p className="actions">
      <button type="reset" onClick={resetHandler} className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>
}

export default InvestmentForm;