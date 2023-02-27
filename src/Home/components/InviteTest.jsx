/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// noinspection JSValidateTypes

import React, { useEffect, useState } from 'react';
// import { usePostHome } from '../context/PostHomeContext';
import { URL } from '../../utils/config';
import { useSettings } from '../../context/SettingContext';
import SwiperTest from './SwiperTest';

export default function InviteTest({
    category,
    salon,
    tag,
    limit,
}) {
    const { settings } = useSettings();
    const [invites, setInvites] = useState([]);
    // const [storage, setStorage] = useLocalStorage('invitesHome', null);

    useEffect(() => {
        async function fetchData() {
            const options = { method: 'GET' };
            fetch(`${URL}/api/posts/categories/${category}/salon/${salon}?limit=${limit}`, options)
                .then((response) => response.json())
                .then((json) => setInvites(json.data))
                .catch((err) => console.error(err));
        }

        fetchData()
            .then((r) => r);
    }, []);

    return (
    // TODO: Modifier les nombres dans l'admin salon
        <section className="relative w-full py-16 sm:py-24 bg-zinc-900">

            <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto flex justify-start items-start flex-wrap">

                <div
                    className="w-full lg:w-full h-full flex mx-auto justify-center items-center relative lg:left-20 -mt-6"
                >

                    <SwiperTest />

                </div>

            </div>
        </section>
    );
}
