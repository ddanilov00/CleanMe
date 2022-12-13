export const initialState = {
    email: '',
    phoneNumber: '',
    firstName: '',
    LastName: '',
    error: true,
    loading: false,
    emailSent: false,
};

export function reducer (state, action) {
    switch(action.type){
        case 'EDIT_FIRST_NAME': 
            return {...state, firstName: action.payload}
        case 'EDIT_LAST_NAME': 
            return {...state, lastName: action.payload}
        case 'EDIT_PHONE_NUMBER':
            return {...state, phoneNumber: action.payload}
        case 'QUOTE_FORM_ERROR': 
            return {...state, error: action.payload}
        case 'EDIT_EMAIL': 
            return {...state, email: action.payload}
        case 'EMAIL_SENT': 
            return {...state, emailSent: true}
        case 'QUOTE_FORM_LOADING':
            return {...state, loading: true}
        case 'QUOTE_FORM_STOP_LOADING': 
            return {...state, loading: false}
        default: throw new Error();
    }
}

