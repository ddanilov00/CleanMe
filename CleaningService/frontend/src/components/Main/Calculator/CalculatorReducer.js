export const initialState = {
    price: 102,
    size: 1,
    bathrooms: 1,
    monthly: false,
    biWeekly: false,
    weekly: false,
    oneTime: true,
    initialClean: true,
    deepClean: false,
};

export function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, price: state.price + 1 };
        case 'UPDATE_PRICE':
            return {
                ...state,
                price: 102 +
                    ((state.size * 25) + (state.bathrooms * 15) +
                    (state.oneTime ? 0 : 0) + (state.weekly ? -25 : 0) +
                    (state.biWeekly ? -21 : 0) + (state.monthly ? -8 : 0) +
                    (state.initialClean ? 67 : 0) + (state.deepClean ? 100 : 0)) * 70
            };
        case 'BATHROOMS':
            return { ...state, bathrooms: action.payload }
        case 'SIZE':
            return { ...state, size: action.payload }
        case 'ONE_TIME_CLEANING':
            return { ...state, monthly: false, weekly: false, biWeekly: false, oneTime: true, }
        case 'WEEKLY':
            return { ...state, monthly: false, weekly: true, biWeekly: false, oneTime: false }
        case 'BI_WEEKLY':
            return { ...state, monthly: false, weekly: false, biWeekly: true, oneTime: false }
        case 'MONTHLY':
            return { ...state, monthly: true, weekly: false, biWeekly: false, oneTime: false }
        case 'INITIAL_CLEAN':
            return { ...state, initialClean: !state.initialClean }
        case 'DEEP_CLEAN':
            return { ...state, deepClean: !state.deepClean }
        default:
            throw new Error();
    }
}