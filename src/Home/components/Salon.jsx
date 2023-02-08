/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Salon() {
    return (
        <section
            className="pt-[46px] pb-[52px] lg:pt-[135px] lg:pb-[93px] overflow-hidden bg-[url('/dist/images/pattern-light.jpg')] bg-repeat"
        >
            <div
                className="flex flex-wrap lg:flex-nowrap justify-center items-center mx-auto max-w-[1200px] w-[calc(100%-30px)] relative"
            >
                <div className="text-zinc-900 mr-0 lg:mr-[-200px] relative z-10">
                    {/* <p className="mb-2 indent-24 font-semibold uppercase m-0">
                        MEETT
                    </p> */}
                    {' '}
                    <h1 className="discoverTitle font-microgramma tracking-[0.566667px] leading-[.95] uppercase text-white">
                        EXPÉRIENCE
                        UNIQUE
                    </h1>
                    {/* <hr className="relative -left-10 w-[calc(100% + 130px)] mb-2 w-96 border-black" /> */}
                    {' '}
                    <p className="discoverText">
                        Nous sommes heureux de vous accueillir dans un lieu unique et tout neuf ! Retrouvez 34000 m² de pop culture répartie sur 7 halls !  Le MEETT est desservi par le tram.
                    </p>
                </div>
                {' '}
                <div className="discoverWrapper">
                    <div className="discoverImageWrapper">
                        <div className="discoverImageContain">
                            <img
                                className="discoverImage overflow-hidden lg:max-w-max"
                                src="/dist/images/test.png"
                                alt="MEETT - Parc des Expositions et Centre de Conventions de Toulouse Métropole"
                            />
                        </div>
                    </div>
                    {' '}
                    <div className="discoverWrapButton">
                        <a href="https://meett.fr/" target="_blank" className="wrapButton bg-white" rel="noreferrer">
                            <span className="text-black font-semibold uppercase">Découvrir</span>
                            {' '}
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
