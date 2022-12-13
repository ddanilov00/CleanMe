import React, { useContext } from 'react';
import { CalculatorContext } from './Calculator';

export const CalculatorAdd = (props) => {
    const { dispatch, ...state } = useContext(CalculatorContext);

    return (
        <div>
            <section className='select-container'>
                <select value={state.size} onChange={e => dispatch({ type: 'SIZE', payload: e.target.value })} className='calculator-square-feet'>
                    <option value='1' >Менее 30 кв. метров</option>
                    <option value='2'>От 30 до 50 кв. метров</option>
                    <option value='3'>от 50 до 70 кв. метров</option>
                    <option value='4'>от 70 до 80 кв. метров</option>
                    <option value='5'>от 80 до 95 кв. метров</option>
                    <option value='6'>от 95 до 109 кв. метров</option>
                    <option value='7'>более 110 кв. метров</option>
                </select>
            </section>
            <section className='select-container'>
                <select value={state.bathrooms} onChange={e => dispatch({ type: 'BATHROOMS', payload: e.target.value })} className='calculator-square-feet'>
                    <option value='1' >1 комната</option>
                    <option value='2'>2 комнаты</option>
                    <option value='3'>3 комнаты</option>
                    <option value='4'>4 комнаты</option>
                    <option value='5'>5 комнат</option>
                    <option value='6'>6 комнат</option>
                </select>
            </section>
        </div>
    )
}

export default CalculatorAdd;