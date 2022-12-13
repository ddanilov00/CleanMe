import React, {useEffect, useReducer} from 'react';
import { initialState, reducer } from './quoteFormReducer';
import sendEmail from '../../actions/sendEmail';
import stringErrorValidation from '../../utils/formStringValidation';

// use Reducer
export const QuoteCotext = React.createContext(initialState)

export const QuoteForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {email, firstName, lastName, phoneNumber, error, loading, emailSent} = state;

    useEffect(() => {
        // console.log(state);
    }, [state])

    return (
        <section className={`quote-form-container `}>
            <section className={`max-width inner-quote-container`}>
                <section className='quote-form-image-section'>
                    <img alt='woman is smiling and cleaning' className='quote-form-image-section-img' src='https://cdn.pixabay.com/photo/2016/09/01/15/19/industrial-1636397_960_720.jpg' />
                </section>
                <section className={`${emailSent ? 'fade-in' : 'hidden'} quote-form-success`}>
                    <p>Спасибо</p>
                    <p>Мы скоро с вами свяжемся!</p>
                </section>
                <form className={`${emailSent ? 'fade-out' : 'email-sent'}`}>
                    <section className='quote-form-error'>
                        <label className='quote-form-error-label'>{error}</label>
                    </section>
                    <section>
                        <input
                             onChange={(e) => {
                                let trimmed = e.target.value.trim();
                                let object = {type: 'QUOTE_FORM_ERROR', error: 'First Name Can\'t Be Empty', string: trimmed}; 
                                stringErrorValidation(dispatch, object);
                                dispatch({type: 'EDIT_FIRST_NAME',  payload: trimmed});
                             }}
                             value={firstName}  placeholder='Имя' type='text' />
                        <input 
                            onChange={(e) => {
                                let trimmed = e.target.value.trim(); 
                                let object = {type: 'QUOTE_FORM_ERROR', error: 'Last Name Can\'t Be Empty', string: trimmed}; 
                                stringErrorValidation(dispatch, object);
                                dispatch({type: 'EDIT_LAST_NAME', payload: trimmed})
                            }}
                            value={lastName} placeholder='Фамилия' type='text' />
                    </section>
                    {/* /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im  for phone number */}
                    <input 
                        onChange={(e) => {
                            let regex = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im;
                            let isPhoneNumber = regex.test(e.target.value);
                            if(!isPhoneNumber) dispatch({type: 'QUOTE_FORM_ERROR', payload: 'Not Valid Phone Number'})
                            if(isPhoneNumber) dispatch({type: 'QUOTE_FORM_ERROR', payload: null})
                            dispatch({type: 'EDIT_PHONE_NUMBER', payload: e.target.value})
                        }}
                        value={phoneNumber} placeholder='Номер телефона' className='quote-form-email' type='text' />
                    {/* ^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$ */}
                    <input
                        onChange={e => {
                            // eslint-disable-next-line
                            let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
                            let isEmail = regex.test(e.target.value);
                            if(!isEmail) dispatch({type: 'QUOTE_FORM_ERROR', payload: 'Not Valid Email'})
                            if(isEmail) dispatch({type: 'QUOTE_FORM_ERROR', payload: null})
                            dispatch({type: 'EDIT_EMAIL', payload: e.target.value})
                        }}
                        value={email} placeholder='Email' className='quote-form-email' type='email' />
                    <button 
                        disabled={error || loading ? true : false} className='quote-form-button'
                        onClick={(e) => {
                            e.preventDefault();
                            if(firstName.length === 0) return;
                            if(lastName.length === 0) return;
                            if(email.length === 0) return;
                            if(phoneNumber.length === 0) return;
                            sendEmail(dispatch, {email, firstName, lastName, phoneNumber})                       
                        }}    
                    >{loading ? 'Отправка' : 'Запросить ответ'}</button>
                </form>
            </section>
        </section>
    )
}

export default QuoteForm;