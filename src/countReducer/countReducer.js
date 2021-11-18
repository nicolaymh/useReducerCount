import { COUNT_TYPES } from '../countActions/countAction';

export const countInitialState = {
    count: 0,
};

export const countInit = (initialState) => {
    return {
        count: initialState.count + 50,
    };
};

export const countReducer = (state, action) => {
    switch (action.type) {
        case COUNT_TYPES.SUM:
            return { count: state.count + 1 };
        case COUNT_TYPES.SUBSTRACTION:
            return { count: state.count - 1 };
        case COUNT_TYPES.SUM_10:
            return { count: state.count + 10 };
        case COUNT_TYPES.SUBSTRACTION_10:
            return { count: state.count - 10 };
        case COUNT_TYPES.RESET:
            return countInitialState;
        default:
            return state;
    }
};
