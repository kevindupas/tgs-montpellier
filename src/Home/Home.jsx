/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import Video from './components/Video';
import InvitesHome from './components/InvitesHome';
import Countdown from './components/Countdown';
import Salon from './components/Salon';
import ProgrammesHome from './components/ProgrammesHome';
import Words from './components/Words';
import Tickets from './components/Tickets';
import Informations from './components/Informations';
import Newsletter from './components/Newsletter';
import BeforeFooter from '../components/BeforeFooter';
import AllSalon from './components/AllSalon';
import Partners from './components/Partners';
import Infos from './components/Infos';

export default function Home() {
    // const { settings } = useSettings();

    // const [allPartner, setAllPartner] = useState(settings);
    return (
        <div className="bg-[url('/dist/images/pattern-dark.jpeg')] bg-repeat h-full w-full">
            <main className="block">
                <Video
                    className="object-cover h-full w-full pt-[5em]"
                    source="/dist/video/home-intro-convert.mp4"
                />
                <Countdown />
                <Informations />
                <InvitesHome
                    category={1}
                    salon={1}
                    limit={5}
                />
                <Salon />
                <ProgrammesHome
                    category={2}
                    salon={1}
                    limit={5}
                />
                <Words />
                <Tickets />
                <Infos />
                <Partners />
                <AllSalon />
                <Newsletter />
                <BeforeFooter />

            </main>
        </div>
    );
}
