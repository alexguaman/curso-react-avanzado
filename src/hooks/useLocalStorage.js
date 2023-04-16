import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [storedValue, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (e) {
            return initialValue;
        }
    });

    const setLocalStorage = (value) => {
        try {
            console.log(value);
            localStorage.setItem(key, JSON.stringify(value));
            setValue(value);
        } catch (e) {
            console.error(e);
        }
    };

    return [storedValue, setLocalStorage];
}
