/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader';
import { SALON_ID, URL } from '../../utils/config';

export default function Tickets() {
    const location = useLocation();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [prices, setPrices] = useState([]);

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
        fetch(`${URL}/api/salon/${SALON_ID}}/prices`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPrices(data.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    // console.log(prices);

    if (error) {
        return (
            <div>
                Error:
                {error.message}
            </div>
        );
    }
    if (!isLoaded) {
        return (
            <Loader />
        );
    }

    if (prices) {
        return (
            <div className="overflow-hidden bg-[url('/dist/images/pattern-dark.jpeg')] bg-repeat">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:flex-col sm:align-center">
                        <h1 className="text-5xl font-extrabold text-white sm:text-center uppercase">
                            Achetez vos billets dès
                            maintenant !
                        </h1>
                    </div>
                    <div
                        className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-5"
                    >

                        {/* <div className="border-2 border-gray-200 bg-black rounded-lg shadow-sm divide-y divide-black scale-100 hover:scale-110 ease-in duration-200">
                            <div className="p-6">
                                <h2 className="text-lg leading-6 font-semibold text-white uppercase">1 Jour</h2>
                                <p className="mt-4">
                                    <span className="text-4xl font-extrabold text-white">€ 18</span>
                                </p>
                                <Link
                                    to="billeterie"
                                    className="mt-8 block w-full bg-orange-600 hover:bg-orange-700 rounded-md py-2 text-sm font-semibold text-white text-center"
                                >
                                    Réserver
                                </Link>
                            </div>
                            <div className="py-4 px-6">
                                <ul className="space-y-4">
                                    <li className="flex space-x-3">

                                        <svg
                                            className="flex-shrink-0 h-5 w-5 text-green-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-sm text-white">Accès au salon : 1 jours</span>
                                    </li>

                                    <li className="flex space-x-3">

                                        <svg
                                            className="flex-shrink-0 h-5 w-5 text-green-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-sm text-white">Entrée à partir de 9h30</span>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        {
                            prices && (
                                <>
                                    {prices.map((price) => (
                                        <div key={price.id} className="border-2 border-white bg-gray-100 rounded-lg shadow-sm divide-y divide-gray-200 scale-100 hover:scale-110 ease-in duration-200">
                                            <div className="p-6">
                                                <h2 className="text-lg leading-6 font-medium text-black uppercase text-center">{price.name}</h2>
                                                <p className="mt-4 text-center">
                                                    <span className="text-4xl font-extrabold text-black text-center">
                                                        {price.price}
                                                        €
                                                    </span>
                                                </p>
                                                { location.pathname !== '/billetterie' ? (
                                                    <Link
                                                        to="billetterie"
                                                        className="mt-8 block w-full bg-orange-600 hover:bg-orange-700 rounded-md py-2 text-sm font-semibold text-white text-center"
                                                    >
                                                        Réserver

                                                    </Link>

                                                )

                                                    : (
                                                        <a
                                                            href="#div_id"
                                                            className="mt-8 block w-full bg-orange-600 hover:bg-orange-700 rounded-md py-2 text-sm font-semibold text-white text-center"
                                                        >
                                                            Réserver

                                                        </a>
                                                    )}
                                            </div>
                                            <div className="py-4 px-6">
                                                {/* <h3 className="text-xs font-medium text-white tracking-wide uppercase">Whats included</h3> */}
                                                <ul className="space-y-2">
                                                    {price.pricings.map((pricing) => (
                                                        <li className="flex space-x-3">
                                                            <svg
                                                                className="flex-shrink-0 h-5 w-5 text-green-500"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <span className="text-xs text-black">{pricing.content}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )
                        }

                    </div>
                </div>
            </div>

        );
    }
}
