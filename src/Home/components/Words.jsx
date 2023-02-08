import React from 'react';

export default function Words() {
    return (
        <section className="pt-[20px] pb-[20px] lg:pt-[50px] lg:pb-[50px] overflow-hidden bg-black">
            <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto">
                <ul className="flex justify-center flex-wrap ml-[-75px]">
                    <li className="mt-[17px] lg:mt-[23px] ml-[75px]">
                        <a href="/" className="text-[40px] lg:text-[55px] font-tungstenb_semibold font-semibold tracking-[0.566667px] leading-[.95] uppercase artiste">
                            Mangas
                        </a>
                    </li>
                    <li className="mt-[17px] lg:mt-[23px] ml-[75px]">
                        <a href="/" className="text-[40px] lg:text-[55px] text-white font-microgramma tracking-[0.566667px] leading-[.95] uppercase">
                            Culture japonaise
                        </a>
                    </li>
                </ul>
                {' '}
                <ul className="flex justify-center flex-wrap ml-[-75px]">
                    <li className="mt-[17px] lg:mt-[23px] ml-[75px]">
                        <a href="/" className="text-[40px] lg:text-[55px] text-white font-microgramma tracking-[0.566667px] leading-[.95] uppercase">
                            web culture
                        </a>
                    </li>
                    <li className="mt-[17px] lg:mt-[23px] ml-[75px]">
                        <a href="/" className="text-[40px] lg:text-[55px] font-tungstenb_semibold font-semibold tracking-[0.566667px] leading-[.95] uppercase artiste">
                            bd/comics
                        </a>
                    </li>
                    <li className="mt-[17px] lg:mt-[23px] ml-[75px]">
                        <a href="/" className="text-[40px] lg:text-[55px] text-white font-microgramma tracking-[0.566667px] leading-[.95] uppercase">
                            jeux vidéo
                        </a>
                    </li>
                    <li className="mt-[17px] lg:mt-[23px] ml-[75px]">
                        <a href="/" className="text-[40px] lg:text-[55px] font-tungstenb_semibold font-semibold tracking-[0.566667px] leading-[.95] uppercase artiste">
                            cinema
                        </a>
                    </li>

                </ul>
            </div>

        </section>
    );
}
