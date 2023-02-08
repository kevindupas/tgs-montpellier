import React from 'react';
import ReactDOM from 'react-dom/client';
import { SettingContextProvider } from './context/SettingContext';
import Routing from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Contexts = ({ children }) => (
    <SettingContextProvider>
        {children}
    </SettingContextProvider>
);

root.render(
    <React.StrictMode>
        <Contexts>
            <Routing />
        </Contexts>
    </React.StrictMode>,
);
