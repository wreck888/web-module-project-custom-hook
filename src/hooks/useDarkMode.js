import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (value) => {
    
    const [darkMode, setDarkMode] = useLocalStorage('mode', value)

    return (
        [ darkMode, setDarkMode ]
    )

}

export default useDarkMode;