import React from 'react';
import ReactDOM from 'react-dom/client';
// import useMedia from './utils/useMedia';
import './index.css';
import { SettingContextProvider } from './context/SettingContext';
import Routing from './Routing';

// function AdaptativeHomePage() {
//   const isDesktop = useMedia('(min-width: 900px)');
//   const isMobile = useMedia('(max-width: 899px)');

//   return (
//     <>
//       { isDesktop && (<DesktopHomePage />)}
//       { isMobile && (<MobileHomePage />)}
//     </>
//   );
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SettingContextProvider>
            <Routing />
        </SettingContextProvider>
    </React.StrictMode>,
);
