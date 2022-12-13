import React, { useContext } from 'react';
import { CalculatorContext } from './Calculator';

export const CalculatorExtras = (props) => {
    const { dispatch, ...state } = useContext(CalculatorContext);

    return (
        <section className=''>
            <button className={`calculator-button ${state.initialClean ? 'calculator-button-clicked' : ''}`} onClick={() => dispatch({ type: 'INITIAL_CLEAN' })}>Поверхностная чистка</button>
            <button className={`calculator-button ${state.deepClean ? 'calculator-button-clicked' : ''}`} onClick={() => dispatch({ type: 'DEEP_CLEAN' })}>Тщательная уборка</button>
            {/* <button onClick={() => dispatch({ type: 'BI_WEEKLY' })}>Every 2 Weeks</button> */}
        </section>
    )
}

export default CalculatorExtras;