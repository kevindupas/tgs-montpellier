/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../../context/SettingContext';
import { URL } from '../../utils/config';

export default function Salon() {
    const { settings } = useSettings();
    return (

        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gray-400 flex items-end justify-end">
                <div className="relative isolate overflow-hidden">
                    <div className="max-w-7xl pt-10 pb-24 sm:pb-32 lg:py-40">
                        <div className="mt-20 sm:mt-24 md:mx-auto lg:mx-0 lg:mt-0">
                            <h1 className="font-heading_bold absolute tracking-[0.566667px] text-4xl leading-[.95] w-[490px] left-8 top-32 uppercase text-white">
                                LE SALON DE
                                {' '}
                                <br />
                                <span> LA POP CULTURE</span>
                            </h1>
                            <div className="shadow-lg md:rounded-3xl">
                                <img
                                    className="h-[450px] overflow-hidden lg:max-w-max"
                                    src={URL + settings.footer_image}
                                    alt="MEETT - Parc des Expositions et Centre de Conventions de Toulouse Métropole"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 flex items-center justify-center">
                <div className="relative isolate overflow-hidden">
                    <div className="max-w-7xl">
                        <div className="sm:mt-24 md:mx-auto lg:mx-0 lg:mt-0">

                            <h1 className="mb-2 text-center font-heading_bold text-[40px] lg:text-[45px] tracking-[0.566667px] leading-[.95] uppercase">À DECOUVRIR</h1>
                            <hr className="relative lg:left-0 w-[calc(100% + 130px)] my-4" />

                            <table className="min-w-full">
                                <tbody>
                                    <tr>
                                        <td className="whitespace-nowrap pl-4 pr-3 text-right text-sm font-medium text-gray-900 sm:pl-6 artiste-black text-[40px] lg:text-[68px] font-heading_bold tracking-[0.566667px] leading-[.95] uppercase">{settings.halls}</td>
                                        <td className="whitespace-nowrap px-3 pt-[25px] text-sm text-black flex-shrink-0 font-heading_bold font-semibold text-[30px] tracking-[0.566667px] leading-[.95] uppercase">M2</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap pl-4 pr-3 text-right text-sm font-medium text-gray-900 sm:pl-6 artiste-black text-[40px] lg:text-[68px] font-heading_bold tracking-[0.566667px] leading-[.95] uppercase">{settings.exposants}</td>
                                        <td className="whitespace-nowrap px-3 pt-[25px] text-sm text-black flex-shrink-0 font-heading_bold font-semibold text-[30px] tracking-[0.566667px] leading-[.95] uppercase">stands</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap pl-4 pr-3 text-right text-sm font-medium text-gray-900 sm:pl-6 artiste-black text-[40px] lg:text-[68px] font-heading_bold tracking-[0.566667px] leading-[.95] uppercase">{settings.scenes}</td>
                                        <td className="whitespace-nowrap px-3 pt-[25px] text-sm text-black flex-shrink-0 font-heading_bold font-semibold text-[30px] tracking-[0.566667px] leading-[.95] uppercase">scènes</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className="mt-10 flex justify-center items-center">
                        <Link to="programmes" className="inline-block text-center cursor-pointer py-5 px-11">
                            <img
                                className="h-56 overflow-hidden lg:max-w-max"
                                src="/dist/icons/decouvrir.svg"
                                alt="MEETT - Parc des Expositions et Centre de Conventions de Toulouse Métropole"
                            />

                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
