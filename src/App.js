import { useReducer } from 'react';
import './App.css';
import { COUNT_TYPES } from './countActions/countAction';
import {
    countInit,
    countInitialState,
    countReducer,
} from './countReducer/countReducer';

const App = () => {
    const [state, dispatch] = useReducer(
        countReducer,
        countInitialState,
        countInit,
    );

    //* Functions:
    const sum = () => dispatch({ type: COUNT_TYPES.SUM });
    const subtract = () => dispatch({ type: COUNT_TYPES.SUBSTRACTION });
    const sum_10 = () => dispatch({ type: COUNT_TYPES.SUM_10, payload: 10 });
    const subtract_10 = () =>
        dispatch({ type: COUNT_TYPES.SUBSTRACTION_10, payload: 10 });
    const reset = () => dispatch({ type: COUNT_TYPES.RESET });

    return (
        <div className='text-center m-auto'>
            <h1 className='text-danger'>Count with Reducer</h1>
            <hr />
            <h2 className='text-light bg bg-danger p-2'>{state.count}</h2>

            <div className='d-flex justify-content-center gap-1'>
                <button onClick={sum} className='btn btn-primary'>
                    +1
                </button>
                <button onClick={sum_10} className='btn btn-success'>
                    +10
                </button>
                <button onClick={reset} className='btn btn-warning'>
                    Reset
                </button>
                <button onClick={subtract_10} className='btn btn-success'>
                    -10
                </button>
                <button onClick={subtract} className='btn btn-primary'>
                    -1
                </button>
            </div>
        </div>
    );
};

export default App;
