import React, { useState } from "react";
import InvestmentsTable from "./components/InvestmentsTable/InvestmentsTable";
import Header from "./components/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  // whenever the user input changes, this code will be re-running
  // if to avoid errors if the userInput is null

  if (userInput) {
    let currentSavings = userInput["current-savings"];
    const yearlyContribution = userInput["yearly-contribution"];
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <InvestmentForm onCalculate={calculateHandler} />

      {userInput ? (
        <InvestmentsTable data={yearlyData} initialInvestment={userInput['current-savings']}/>
      ) : (
        <p className="hintText">There is no data yet.</p>
      )}
    </div>
  );
}

export default App;
