import React from 'react';
import './App.css';
import { Balance } from './Components/Balance';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './Components/context/GlobalState';
import { Header } from './Components/Header';
import { IncomeExpenses } from './Components/IncomeExpenses';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      </GlobalProvider> 
  );
}

export default App;