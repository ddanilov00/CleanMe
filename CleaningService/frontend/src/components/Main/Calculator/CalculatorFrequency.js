import React, { useContext } from 'react';
import { CalculatorContext } from './Calculator';

export const CalculatorFrequency = (props) => {
    const { dispatch, ...state } = useContext(CalculatorContext);

    return (
        <section className=''>
            <button className={`calculator-button ${state.oneTime ? 'calculator-button-clicked' : ''}`} onClick={() => dispatch({ type: 'ONE_TIME_CLEANING' })}>Разовая уборка</button>
            <button className={`calculator-button ${state.weekly ? 'calculator-button-clicked' : ''}`} onClick={() => dispatch({ type: 'WEEKLY' })}>Каждую неделю</button>
            <button className={`calculator-button ${state.biWeekly ? 'calculator-button-clicked' : ''}`} onClick={() => dispatch({ type: 'BI_WEEKLY' })}>Каждые две недели</button>
            <button className={`calculator-button ${state.monthly ? 'calculator-button-clicked' : ''}`} onClick={() => dispatch({ type: 'MONTHLY' })}>Каждый месяц</button>
        </section>
    )
}

export default CalculatorFrequency;