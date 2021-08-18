import React, { useState } from 'react';
import { CopyCat } from '../components/CopyCat';

export const CopyCatContainer = () => {

    const [ tape, setTape ] = useState(false);

    const [ inputValue, setInputValue ] = useState('');
    const handleChange = ({target}) => setInputValue(target.value);

    const toggleTape = () => {
        setTape(prev => !prev);
        setInputValue('');
    }

    return <CopyCat 
        toggleTape={toggleTape} 
        tape={tape} 
        inputValue={inputValue}
        handleChange={handleChange}
        name="John"
    />;

};