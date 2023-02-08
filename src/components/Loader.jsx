import React, { useEffect, useState } from 'react';

function Loader() {
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            setDone(true);
        }, 2500);
    }, []);

    return (
        <div>
            {!done && (
                <div className="fixed w-screen h-screen bg-black flex z-50 inset-0 flex-col items-center justify-center">
                    <img className="w-48 animate-pulse" src="../dist/images/logo.png" alt="logo" />
                </div>

            )}
        </div>
    );
}

export default Loader;
