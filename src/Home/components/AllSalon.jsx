/* eslint-disable no-shadow */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import { URL } from '../../utils/config';

export default function AllSalon() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [allSalon, setAllSalon] = useState([]);

    useEffect(() => {
        const options = {
            method:  'GET',
            mode:    'cors',
            cache:   'default',
            headers: {
                Accept:         'application/json',
                'Content-Type': 'application/json',
            },
        };

        fetch(`${URL}/api/events`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setAllSalon(data.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    if (error) {
        return (
            <div>
                Error:
                {error.message}
            </div>
        );
    } if (!isLoaded) {
        return (
            <Loader />
        );
    } if (allSalon) {
        return (

            <div className="bg-[url('/dist/images/events.png')] bg-cover">
                <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-8 sm:space-y-12">
                        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                            <h2 className="text-4xl text-black font-bold font-heading_bold tracking-[0.566667px] leading-[.95] uppercase">Nos events</h2>
                            <p className="text-xl text-gray-500 font-bold">Retrouvez nos autres salons.</p>
                        </div>
                        <div className="mx-auto grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-3">
                            {allSalon.map((value) => {
                                if (value.name !== 'TGS Montpellier') {
                                    return (
                                        <a href="/" key={value.id}>
                                            <div className="space-y-4">
                                                <a href={value.link}>
                                                    <img className={clsx('mx-auto h-auto lg:h-full', value.name !== 'TGS Springbreak' ? 'w-44' : 'w-52')} src={URL + value.logo} alt="" />
                                                </a>
                                                <div className="space-y-2">
                                                    <div className="text-xs font-medium lg:text-sm">
                                                        <h3 className="font-bold">{value.date}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    );
                                }

                                return null;
                            })}

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
