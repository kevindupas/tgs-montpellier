/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import Video from './components/Video';
import InvitesHome from './components/InvitesHome';
import Countdown from './components/Countdown';
import Salon from './components/Salon';
import Words from './components/Words';
import Tickets from './components/Tickets';
import Newsletter from './components/Newsletter';
import AllSalon from './components/AllSalon';
import Infos from './components/Infos';
import InformationTest from './components/InformationTest';
import PartnerTest from './components/PartnerTest';
import ProgrammeTest from './components/ProgrammeTest';
import { INVITE_CATEGORY, SALON_ID } from '../utils/config';
import InviteTest from './components/InviteTest';

export default function Home() {
    // const { settings } = useSettings();

    // const [allPartner, setAllPartner] = useState(settings);
    return (
        <div className="bg-[url('/dist/images/pattern-dark.jpeg')] bg-repeat h-full w-full">
            <main className="block">
                <Video
                    className="object-cover h-full w-full pt-[5em]"
                    source="/dist/video/new_video_montpellier.webm"
                />
                <Countdown />
                <InformationTest />
                <InviteTest
                    category={INVITE_CATEGORY}
                    salon={SALON_ID}
                    limit={5}
                />
                <Salon />
                <ProgrammeTest
                    category={2}
                    salon={SALON_ID}
                    limit={5}
                />
                <Words />
                <Tickets />
                <Infos />
                <PartnerTest />
                <AllSalon />
                <Newsletter />
                {/* <BeforeFooter /> */}

            </main>
        </div>
    );
}
