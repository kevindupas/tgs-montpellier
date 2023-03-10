/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import Video from './components/Video';
import VideoMobile from './components/VideoMobile';
import Countdown from './components/Countdown';
import Salon from './components/Salon';
import Words from './components/Words';
import TicketsHome from './components/TicketsHome';
import Newsletter from './components/Newsletter';
import AllSalon from './components/AllSalon';
import Infos from './components/Infos';
import InformationTest from './components/InformationTest';
import PartnerTest from './components/PartnerTest';
import ProgrammeTest from './components/ProgrammeTest';
import { INVITE_CATEGORY, SALON_ID } from '../utils/config';
import InviteTest from './components/InviteTest';
import useMedia from '../utils/useMedia';
import SalonMobile from './components/SalonMobile';

export default function Home() {
    // const { settings } = useSettings();
    const isDesktop = useMedia('(min-width: 900px)');

    // const [allPartner, setAllPartner] = useState(settings);
    return (
        <div className="bg-[url('/dist/images/pattern-dark.jpeg')] bg-repeat h-full w-full">
            <main className="block">
                {isDesktop
                    ? (
                        <Video
                            className="object-cover h-full w-full pt-[5em]"
                            source="/dist/video/new_video_montpellier.webm"
                        />
                    )

                    : <VideoMobile /> }
                <Countdown />
                <InformationTest />
                <InviteTest
                    category={INVITE_CATEGORY}
                    salon={SALON_ID}
                    limit={5}
                />
                {isDesktop ? <Salon /> : <SalonMobile /> }
                <ProgrammeTest
                    category={2}
                    salon={SALON_ID}
                    limit={5}
                />
                <Words />
                <TicketsHome />
                {isDesktop && <Infos /> }
                <PartnerTest />
                <AllSalon />
                <Newsletter />
                {/* <BeforeFooter /> */}

            </main>
        </div>
    );
}
