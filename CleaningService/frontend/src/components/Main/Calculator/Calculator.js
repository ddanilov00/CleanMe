import React, { useReducer, useEffect, Component } from 'react';
import CalculatorAdd from './CalculatorAdd';
import CalculatorExtras from './CalculatorExtras';
import CalculatorFrequency from './CalculatorFrequency';
import { initialState, reducer } from './CalculatorReducer';
import { useInView } from 'react-intersection-observer';

export const CalculatorContext = React.createContext(initialState);

export const Calculator = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {ref, inView} = useInView({
        threshold: .9,
        delay: 1500,
        triggerOnce: true
    });

    // this seems wrong, need to check if Im doing an anti pattern
    useEffect(() => {
        dispatch({
            type: 'UPDATE_PRICE'
        })
    }, [state.size, state.bathrooms,
    state.weekly, state.biWeekly, state.oneTime, state.monthly,
    state.initialClean, state.deepClean,
        dispatch])

    return (
        // this will need to be ref by the calculator components not the whole calculator
        <CalculatorContext.Provider value={{ ...state, dispatch: dispatch }}>
            <section className={`calculator-outer-container ${inView ? 'fade-top' : 'fade-out'}`}>
                {/* <p>{isVisible && 'yes im now visisble'}</p> */}
                <h1 ref={ref}>Оценить, сколько будет стоит уборка</h1>
                <div ref={ref} className='calculator-bar-container'>
                    <div ref={ref} className='calculator-bar' style={{ width: `${Math.floor(state.price / 230)}%` }}>
                        <p className=''>{state.price} руб.</p>
                    </div>
                </div>
                <div ref={ref} className='calculator-bar-container'>
                    <CalculatorAdd />
                    <CalculatorFrequency />
                    <CalculatorExtras />
                </div>

            </section>
        </CalculatorContext.Provider>
    )
}

export default Calculator;