import { useState } from 'react';

const useLocalStorage = (key, initValue) => {
    const [ value, setValue ] = useState(() => {
        if (localStorage.getItem(key)) {
            return(JSON.parse(localStorage.getItem(key)))
        } else {
            localStorage.setItem(key, JSON.stringify(initValue));
            return(
                initValue
            )
        }
    });

    const setStoredValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    }

    return[value, setStoredValue]

}

export default useLocalStorage;