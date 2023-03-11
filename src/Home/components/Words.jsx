import clsx from 'clsx';
import React from 'react';
import useMedia from '../../utils/useMedia';

export default function Words() {
    const isDesktop = useMedia('(min-width: 900px)');
    return (
        <section className="pt-[20px] pb-[30px] lg:pt-[30px] lg:pb-[50px] overflow-hidden bg-zinc-900">
            <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto">
                <ul className="flex justify-center items-center text-center flex-wrap lg:ml-[-75px]">
                    <li className="mt-[17px] lg:mt-[23px] lg:ml-[75px]">
                        <a href="/" className="text-[30px] lg:text-[40px] font-heading_bold tracking-[0.566667px] leading-[.95] uppercase artiste">
                            Mangas
                        </a>
                    </li>
                    <li className="mt-[17px] lg:mt-[23px] lg:ml-[75px]">
                        <a href="/" className="text-[30px] lg:text-[40px] text-white font-heading_bold tracking-[0.566667px] leading-[.95] uppercase">
                            Culture japonaise
                        </a>
                    </li>
                </ul>
                {' '}
                <ul className="flex justify-center flex-wrap lg:ml-[-75px]">
                    <li className="mt-[17px] lg:mt-[23px] lg:ml-[75px]">
                        <a href="/" className={clsx('text-[30px] lg:text-[40px] text-white font-heading_bold tracking-[0.566667px] leading-[.95] uppercase', isDesktop ? '' : 'artiste')}>
                            web culture
                        </a>
                    </li>
                    <li className="mt-[17px] lg:mt-[23px] lg:ml-[75px]">
                        <a href="/" className={clsx('text-[30px] lg:text-[40px] text-white font-heading_bold tracking-[0.566667px] leading-[.95] uppercase', !isDesktop ? '' : 'artiste')}>
                            bd/comics
                        </a>
                    </li>
                    <li className="mt-[17px] lg:mt-[23px] lg:ml-[75px]">
                        <a
                            href="/"
                            className="text-[30px] lg:text-[40px] font-heading_bold tracking-[0.566667px] leading-[.95] uppercase artiste

                       ">
                            jeux vidéo
                        </a>
                    </li>
                    <li className="mt-[17px] lg:mt-[23px] lg:ml-[75px]">
                        <a href="/" className="text-[30px] lg:text-[40px] text-white font-heading_bold tracking-[0.566667px] leading-[.95] uppercase">
                            cinema
                        </a>
                    </li>

                </ul>
            </div>

        </section>
    );
}
