/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSettings } from '../../context/SettingContext';
import useMedia from '../../utils/useMedia';

export default function Video({
    className,
    source,
}) {
    const { settings } = useSettings();
    const isDesktop = useMedia('(min-width: 900px)');

    return (
        <section className="relative h-[calc(100vh-80px)]">
            <div className="absolute lg:right-0 bottom-48 xl:right-16  lg:bottom-12 z-20">
                <blockquote className="text-white font-heading_bold tracking-[0.566667px] leading-[.95] indent-0 uppercase text-5xl lg:text-5xl fix-width border-l-[15px] border-orange-500 pl-5 py-4 relative">
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
                </blockquote>
            </div>

            <div className="absolute w-20 lg:w-[216px] left-3 lg:left-60 -bottom-14 lg:bottom-[-53px] z-10">
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
            <div
                className="absolute bottom-0 left-0 mx-auto top-0 right-[calc(50%-150px)] md:right-[calc(50%-300px)] lg:right-[calc(50%-516px)]"
            >
                {isDesktop ? (

                    <div className="relative h-full w-full blur-[3px] lg:blur-none">
                        <video
                            loop
                            muted
                            autoPlay
                            playsInline
                            src={source}
                            className={className}
                        />

                    </div>

                ) : (

                    <div
                        className="relative h-full w-full blur-[3px] lg:blur-none"
                        dangerouslySetInnerHTML={{
                            __html: `<video
                                loop
                                muted
                                autoplay
                                playsinline
                                type="video/mp4"
                                src='/dist/video/mobile.mp4'
                                class='object-cover h-full w-full pt-[5em]'
                            />`,
                        }}
                    />

                )}
            </div>
        </section>
    );
}
