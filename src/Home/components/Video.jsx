/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSettings } from '../../context/SettingContext';

export default function Video({
    className,
    source,
}) {
    const { settings } = useSettings();

    return (
        <section className="relative h-[calc(100vh-80px)]">
            <div className="relative z-10 max-w-[1200px] mx-auto h-full content-end flex items-center flex-row-reverse">
                <h1 className="text-white font-microgramma tracking-[0.566667px] leading-[.95] indent-0 uppercase mr-4 lg:mr-0 text-5xl lg:text-7xl fix-width">
                    <span
                        className="drop-shadow-2xl"
                        style={{
                            transform:  'translate(0px, 0px)',
                            opacity:    '1',
                            visibility: 'inherit',
                        }}
                    >
                        {settings.event_date}
                    </span>
                    <br />
                </h1>

                <div className="absolute w-[216px] left-0 bottom-[-53px] z-10">
                    <img
                        style={{
                            transform:  'translate(0px, 0px)',
                            opacity:    '1',
                            visibility: 'inherit',
                        }}
                        src="/dist/images/icons-test.png"
                        alt=""
                    />
                </div>
            </div>
            <div
                className="absolute bottom-0 left-0 mx-auto top-0 right-[calc(50%-150px)] md:right-[calc(50%-300px)] lg:right-[calc(50%-516px)]"
            >
                <div className="relative h-full w-full">
                    <video
                        loop
                        muted
                        autoPlay
                        playsInline
                        src={source}
                        className={className}
                    />
                </div>
            </div>
        </section>
    );
}
