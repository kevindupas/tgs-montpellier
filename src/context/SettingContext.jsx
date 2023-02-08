/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, {
    useContext, useState, useEffect, createContext,
} from 'react';
import { SALON_ID, URL } from '../utils/config';
import useLocalStorage from '../utils/useLocalStorage';

const SettingContext = createContext();

export function SettingContextProvider({ children }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [settings, setSettings] = useState({});

    useEffect(() => {
        if (Object.entries(settings).length === 0) {
            const options = {
                method:  'GET',
                mode:    'cors',
                cache:   'default',
                headers: {
                    Accept:         'application/json',
                    'Content-Type': 'application/json',
                },
            };

            fetch(`${URL}/api/salon/${SALON_ID}`, options)
                .then((res) => res.json())
                .then(
                    (data) => {
                        setIsLoaded(true);
                        setSettings(data.data);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    },
                );
        }
    }, []);
    return (
        <SettingContext.Provider
            value={{
                error,
                isLoaded,
                settings,
            }}
        >
            {children}
        </SettingContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}
