import Header from './components/Header/Header';
import InvestmentInput from './components/Investment/InvestmentInput';
import TableData from './components/Table/TableData';

import logo from './assets/investment-calculator-logo.png';

function App() {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    console.log(userInput);

    // do something with yearlyData ...
  };

  const investmentResetHandler = () => {
    console.log('reset');
  };

  return (
    <div>
      <Header logo={logo} />

      <InvestmentInput
        onResetData={investmentResetHandler}
        onSubmitData={calculateHandler}
      />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <TableData />
    </div>
  );
}

export default App;
