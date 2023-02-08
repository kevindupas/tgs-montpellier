/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import { useSettings } from '../../context/SettingContext';
import calculateCountdownFromNow from '../../utils/calculateCountdownFromNow';

export default function Countdown() {
    const { error, isLoaded, settings } = useSettings();

    const [result, setResult] = useState(null);

    useEffect(() => {
        if (!settings || Object.entries(settings).length === 0) return () => {};
        const intervalId = setInterval(
            () => setResult(calculateCountdownFromNow(settings.countdown)),
            1000,
        );
        return () => {
            clearInterval(intervalId);
        };
    }, [settings]);

    if (error) {
        return (
            <div>
                Error:
                {error.message}
            </div>
        );
    } if (!isLoaded || result === null) {
        return (
            <Loader />
        );
    }

    const {
        expired,
        values: {
            days,
            hours,
            minutes,
            seconds,
        },
    } = result;

    return (
        <section className="py-20 bg-[url('/dist/images/pattern-dark.jpeg')]">
            <div className="flex justify-center items-center">

                <div className="grid grid-flow-col gap-8 lg:gap-28 text-center auto-cols-max text-4xl lg:text-[150px]">
                    <div
                        className="flex flex-col countdown font-tungstenb_semibold tracking-[0.566667px] leading-[.95] indent-0 uppercase"
                    >
                        <span className="">
                            {days}
                        </span>
                        jours
                    </div>
                    <div
                        className="flex flex-col countdown font-tungstenb_semibold tracking-[0.566667px] leading-[.95] indent-0 uppercase"
                    >
                        <span className="">
                            {hours}
                        </span>
                        heures
                    </div>
                    <div
                        className="flex flex-col countdown font-tungstenb_semibold tracking-[0.566667px] leading-[.95] indent-0 uppercase"
                    >
                        <span className="">
                            {minutes}
                        </span>
                        min
                    </div>
                    <div
                        className="flex flex-col countdown font-tungstenb_semibold tracking-[0.566667px] leading-[.95] indent-0 uppercase"
                    >
                        <span className="">
                            {seconds}
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </section>
    );
}
