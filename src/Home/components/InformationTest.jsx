import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../../context/SettingContext';
import { URL } from '../../utils/config';

export default function InformationTest() {
    const { settings } = useSettings();
    return (
        <section className="relative py-16 bg-[#f3f3f3] sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-black font-heading_bold text-xl lg:text-4xl uppercase tracking-wide mb-12 text-center">Organisez-vous pour ne rien rater !</h2>
                </div>
                <ul
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
                >
                    <Link to="faqs">
                        <div className="mx-auto h-56 w-56 rounded-full bg-orange-600 flex justify-center items-center hover:scale-105">
                            <img src="/dist/icons/faq.svg" width="50%" className="mx-auto" alt="" />
                        </div>
                        <h3 className="mt-6 text-base font-heading_bold font-semibold leading-7 tracking-tight text-black uppercase">FAQ</h3>
                    </Link>
                    <a href={URL + settings.plan_pdf} target="_blank" rel="noreferrer">
                        <div className="mx-auto h-56 w-56 rounded-full bg-orange-600 flex justify-center items-center hover:scale-105">
                            <img src="/dist/icons/plan.svg" width="50%" className="mx-auto" alt="" />
                        </div>
                        <h3 className="mt-6 text-base font-heading_bold font-semibold leading-7 tracking-tight text-black uppercase">Plan salon</h3>
                    </a>
                    <a href={URL + settings.planning_pdf} target="_blank" rel="noreferrer">
                        <div className="mx-auto h-56 w-56 rounded-full bg-orange-600 flex justify-center items-center hover:scale-105">
                            <img src="/dist/icons/planning.svg" width="50%" className="mx-auto" alt="" />
                        </div>
                        <h3 className="mt-6 text-base font-heading_bold font-semibold leading-7 tracking-tight text-black uppercase">Planning</h3>
                    </a>
                    <Link to="informations-pratiques">
                        <div className="mx-auto h-56 w-56 rounded-full bg-orange-600 flex justify-center items-center hover:scale-105">
                            <img src="/dist/icons/info_pratiques.svg" width="50%" className="mx-auto" alt="" />
                        </div>
                        <h3 className="mt-6 text-base font-heading_bold font-semibold leading-7 tracking-tight text-black uppercase">Infos Pratiques</h3>
                    </Link>
                </ul>
            </div>
        </section>
    );
}
