import React from 'react';
import { useDispatch } from 'react-redux';

const Button = () => {
    const dispatch = useDispatch()


    const handleIncrement = () =>{
dispatch({type: "plus"})
    }
    const handleMinus = () =>{
        dispatch({type: "minus"})
    }
    const handleInf = () =>{
        dispatch({type: "reverse"})
    }
    return (
        <div>
        <button onClick={handleMinus}>-</button>
        <button onClick={handleInf}>♾️</button>
        <button onClick={handleIncrement}>+</button>

        </div >
    );
};

export default Button;