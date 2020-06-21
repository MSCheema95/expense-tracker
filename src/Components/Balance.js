import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const balance = amounts.reduce((accumulator, currentValue) => (accumulator += currentValue), 0).toFixed(2);
    return (
        <>
            <h4>Current Balance</h4>
            <h1 >{balance}</h1>
        </>
    )
}
