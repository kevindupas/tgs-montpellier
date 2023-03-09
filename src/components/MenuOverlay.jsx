/* eslint-disable no-console */
/* eslint-disable no-mixed-operators */
import React from 'react';
import { Link } from 'react-router-dom';
import useMedia from '../utils/useMedia';
import { useSettings } from '../context/SettingContext';

export default function MenuOverlay({ navbarOpen, setNavbarOpen }) {
    const isDesktop = useMedia('(min-width: 700px)');
    const isMobile = useMedia('(max-width: 699px)');
    const { settings } = useSettings();
    return (
        <nav
            className={`fixed flex top-0 left-0 w-full pt-20 z-30 h-screen bg-[url('/dist/images/pattern-dark.jpeg')] text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
                navbarOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full ease-linear'
            }`}
        >

            <div className="max-w-[1200px] w-[calc(100%-30px)] flex flex-col mx-auto">
                <div className="border border-red-500 h-[1px] opacity-30" />
                {/* <div className="BaseIcon Header-separator BaseIcon--separator">
                    <svg viewBox="0 0 491 6" preserveAspectRatio="xMidYMid" className="BaseIcon-icon">
                    <use xlinkHref="#separator--sprite" />
                    </svg>
                </div> */}
                {' '}
                <nav className="z-10 relative flex-1 basis-0">
                    { isDesktop && (
                        <ul className="h-full list-none pl-0 m-0 flex justify-around flex-col">
                            <li className="flex">
                                <Link
                                    to="faqs"
                                    className="hover-this relative flex text-[40px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase menu__item-link hover:text-orange-500"
                                    onClick={() => {
                                        setNavbarOpen(false);
                                    }}
                                >
                                    faq
                                </Link>
                            </li>
                            <li className="flex">
                                <Link
                                    to="informations-pratiques"
                                    className="hover-this relative flex text-[40px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase menu__item-link hover:text-orange-500"
                                    onClick={() => {
                                        setNavbarOpen(false);
                                    }}
                                >
                                    infos
                                    pratiques
                                </Link>
                            </li>
                            <li className="flex">
                                <Link
                                    to="/"
                                    className="relative flex text-[40px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase menu__item-link hover:text-orange-500"
                                    onClick={() => {
                                        setNavbarOpen(false);
                                    }}
                                >
                                    plan
                                    du salon
                                </Link>
                            </li>
                            <li className="flex">
                                <Link
                                    to="partenaires"
                                    className="relative flex text-[40px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase menu__item-link hover:text-orange-500"
                                    onClick={() => {
                                        setNavbarOpen(false);
                                    }}
                                >
                                    Partenaires
                                </Link>
                            </li>
                            <li className="flex">
                                <Link
                                    to="/"
                                    className="relative flex text-[40px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase menu__item-link hover:text-orange-500"
                                    onClick={() => {
                                        setNavbarOpen(false);
                                    }}
                                >
                                    planning
                                </Link>
                                <img className="menu__item-img" src="/dist/images/1.jpg" alt="" />
                            </li>
                            <li className="flex">
                                <Link
                                    to="billetterie"
                                    className="relative flex text-[40px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase menu__item-link hover:text-orange-500"
                                    onClick={() => {
                                        setNavbarOpen(false);
                                    }}
                                >
                                    billetterie
                                </Link>
                                {/* <img className="menu__item-img" src="/dist/images/1.jpg" alt="" /> */}
                            </li>
                        </ul>
                    )}
                    { isMobile && (
                        <ul className="h-full list-none pl-0 m-0 flex justify-around flex-col">
                            <li className="flex">
                                <Link
                                    to="invites"
                                    className="relative flex text-[30px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase menu__item-link hover:text-orange-500"
                                    onClick={() => {
                                        setNavbarOpen(false);
                                    }}
                                >
                                    Invités
                                </Link>

                            </li>
                            <li className="flex">
                                <Link
                                    to="exposants"
                                    className="hover-this relative flex text-[30px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase menu__item-link hover:text-orange-500"
                                    onClick={() => {
                                        setNavbarOpen(false);
                                    }}
                                >
                                    Exposants
                                </Link>
                            </li>
                            <li className="flex">
                                <Link
                                    to="programmes"
                                    className="hover-this relative flex text-[30px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase menu__item-link hover:text-orange-500"
                                    onClick={() => {
                                        setNavbarOpen(false);
                                    }}
                                >
                                    Programmes
                                </Link>
                            </li>
                            <li className="flex">
                                <Link
                                    to="informations-pratiques"
                                    className="relative flex text-[30px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase menu__item-link hover:text-orange-500"
                                    onClick={() => {
                                        setNavbarOpen(false);
                                    }}
                                >
                                    Infos pratiques
                                </Link>
                            </li>
                            <li className="flex">
                                <Link
                                    to="billetterie"
                                    className="relative flex text-[30px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase menu__item-link hover:text-orange-500"
                                    onClick={() => {
                                        setNavbarOpen(false);
                                    }}
                                >
                                    billetterie
                                </Link>
                                <img className="menu__item-img" src="/dist/images/1.jpg" alt="" />
                            </li>
                        </ul>
                    )}
                </nav>
                {' '}
                <div className="border border-orange-500 h-[1px] opacity-30" />
                {' '}
                <div className="flex flex-wrap justify-center items-center pt-9 pb-5 lg:justify-between lg:pt-3 lg:pb-4">
                    <nav>
                        <ul className="flex justify-center items-center w-full list-none pl-0 m-0 mb-[37px] lg:mb-0">
                            <li className="mr-[20px] pr-[38px] relative footer-overlay">
                                <a
                                    href="mailto:contact@tgsevenements.com"
                                    target="_blank"
                                    className="font-tungstenb_semibold font-semibold text-[40px] lg:text-[65px] leading-none uppercase artiste"
                                    rel="noreferrer"
                                >
                                    contact
                                </a>
                            </li>
                            <li className="relative footer-overlay">
                                <Link
                                    to="presse"
                                    target="_blank"
                                    className="font-tungstenb_semibold font-semibold text-[40px] lg:text-[65px] leading-none uppercase artiste"
                                    rel="noreferrer"
                                >
                                    presse
                                </Link>
                            </li>
                            {/* <li className="relative footer-overlay">
                                <a
                                    href="/"
                                    target="_blank"
                                    className="font-tungstenb_semibold font-semibold text-[40px] lg:text-[65px] leading-none uppercase artiste"
                                    rel="noreferrer"
                                >
                                    shop
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                    {' '}
                    <ul className="flex justify-center items-center w-full lg:w-auto list-none p-0 m-0">

                        <li className="mx-auto lg:mr-5 lg:pr-10">
                            <a
                                href={settings.facebook_link}
                                target="_blank"
                                className="w-4 block"
                                rel="noreferrer"
                            >
                                <div className="flex items-center w-7 h-auto">
                                    <img src="../dist/icons/facebook.svg" alt="" />
                                </div>
                            </a>
                        </li>

                        <li className="mx-auto lg:mr-5 lg:pr-10">
                            <a
                                href={settings.twitter_link}
                                target="_blank"
                                className="w-7 block"
                                rel="noreferrer"
                            >
                                <div className="flex items-center w-7 h-auto">
                                    <img src="../dist/icons/twitter.svg" alt="" />
                                </div>
                            </a>
                        </li>

                        <li className="mx-auto lg:mr-5 lg:pr-10">
                            <a
                                href={settings.instagram_link}
                                target="_blank"
                                className="w-8 block"
                                rel="noreferrer"
                            >
                                <div className="flex items-center w-7 h-auto">
                                    <img src="../dist/icons/instagram.svg" alt="" />
                                </div>
                            </a>
                        </li>

                        <li className="mx-auto lg:mr-5 lg:pr-10">
                            <a
                                href={settings.tiktok_link}
                                target="_blank"
                                className="w-7 block"
                                rel="noreferrer"
                            >
                                <div className="flex items-center w-7 h-auto">
                                    <img src="../dist/icons/tiktok.svg" alt="" />
                                </div>
                            </a>
                        </li>

                        <li className="mx-auto lg:mr-5 lg:pr-10">
                            <a
                                href={settings.youtube_link}
                                target="_blank"
                                className="w-7 block"
                                rel="noreferrer"
                            >
                                <div className="flex items-center w-10 h-auto">
                                    <img src="../dist/icons/youtube.svg" alt="" />
                                </div>
                            </a>
                        </li>

                        <li className="mx-auto lg:mr-5 lg:pr-10">
                            <a
                                href="https://www.twitch.tv/tgsevenements"
                                target="_blank"
                                className="w-7 block"
                                rel="noreferrer"
                            >
                                <div className="flex items-center w-7 h-auto">
                                    <img src="../dist/icons/twitch.png" alt="" />
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
