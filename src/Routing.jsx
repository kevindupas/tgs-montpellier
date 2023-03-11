/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import InfosPratiques from './InfosPratiques/InfosPratiques';
import InfosPratiquesDetails from './InfosPratiques/InfosPratiquesDetails';
import ScrollToTop from './utils/ScrollToTop';
// import Faq from './Faq/Faq';
import FaqDetails from './Faq/FaqDetails';
import Articles from './Articles/Articles';
import ArticlesDetails from './Articles/ArticlesDetails';
import Cookie from './components/Cookie';
import Billetterie from './Billetterie/Billetterie';
import {
    BILLETTERIE_CATEGORY,
    EXPOSANT_CATEGORY,
    FAQ_CATEGORY,
    INFOS_PRATIQUES_CATEGORY,
    INVITE_CATEGORY,
    PARTENAIRE_CATEGORY,
    PROGRAMME_CATEGORY,
} from './utils/config';
import MentionLegale from './Terms/MentionLegale';
import ConditionGeneral from './Terms/ConditionGeneral';
import FaqWithSearch from './Faq/FaqWithSearch';
import Presse from './Presse/Presse';

export default function Routing() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Cookie storageKey="cookie" storageValue="ok" />
            <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="invites"
                    element={(
                        <Articles
                            categories={INVITE_CATEGORY}
                            categoryName="Invités"
                        />
                    )}
                />

                <Route
                    path="programmes"
                    element={(
                        <Articles
                            categories={PROGRAMME_CATEGORY}
                            categoryName="Programmes"
                        />
                    )}
                />

                <Route
                    path="exposants"
                    element={(
                        <Articles
                            categories={EXPOSANT_CATEGORY}
                            categoryName="Exposants"
                        />
                    )}
                />

                <Route
                    path="partenaires"
                    element={(
                        <Articles
                            categories={PARTENAIRE_CATEGORY}
                            categoryName="Partenaires"
                        />
                    )}
                />

                <Route
                    path="billetterie"
                    element={(
                        <Billetterie
                            categories={BILLETTERIE_CATEGORY}
                            categoryName="Billetterie"
                        />
                    )}
                />

                <Route
                    path="faqs"
                    element={(
                        <FaqWithSearch
                            categories={FAQ_CATEGORY}
                            categoryName="Faqs"
                        />
                    )}
                />

                <Route
                    path="informations-pratiques"
                    element={(
                        <InfosPratiques
                            categories={INFOS_PRATIQUES_CATEGORY}
                            categoryName="Infos Pratiques"
                        />
                    )}
                />

                <Route path="post/:postId" element={<ArticlesDetails />} />
                <Route path="info/:infoId" element={<InfosPratiquesDetails />} />
                <Route path="faq/:faqId" element={<FaqDetails />} />
                <Route path="presse" element={<Presse />} />

                <Route path="mention_legale" element={<MentionLegale />} />
                <Route path="cgu" element={<ConditionGeneral />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />

        </BrowserRouter>
    );
}
