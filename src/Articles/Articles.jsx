/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import CategoryImage from '../components/CategoryImage';
import Loader from '../components/Loader';
import { SALON_ID, URL } from '../utils/config';
import Card from './Card';

export default function Articles({ categoryName, categories }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [detailCategory, setDetailCategory] = useState([]);
    const [activeTab, setActiveTab] = useState('Tous');

    useEffect(() => {
        const options = {
            method:  'GET',
            mode:    'cors',
            cache:   'default',
            headers: {
                Accept:         'application/json',
                'Content-Type': 'application/json',
            },
        };

        fetch(`${URL}/api/posts/categories/${categories}/salon/${SALON_ID}}`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPosts(data.data);
                    setDetailCategory(data.data.name);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, [categories]);

    console.log(detailCategory);

    const getPostsToDisplay = () => posts.filter((currentElem) => activeTab === 'Tous' || currentElem.tag.name === activeTab);

    const tagList = [
        ...new Set(
            posts.map((currElem) => currElem.tag.name),
        ),
        'Tous',
    ];

    if (error) {
        return (
            <div>
                Error:
                {error.message}
            </div>
        );
    } if (!isLoaded) {
        return (
            <Loader />
        );
    } if (posts) {
        return (
            <>
                <CategoryImage categoryId={categories} categoryName={categoryName} />
                <div className="bg-black">
                    <section className="pt-[61px] pb-[53px]">
                        <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto justify-start items-center flex-wrap flex">
                            <p className="mr-9 w-auto flex-none font-tungsten font-semibold text-[56px] tracking-[0.566667px] leading-[.95] uppercase text-white">Filtres :</p>
                            <div className="space-x-3 flex justify-center items-center font-tungstenb_semibold font-medium uppercase">
                                {tagList.map((tag) => (
                                    <button
                                        key={`Tag-${tag}`}
                                        type="button"
                                        onClick={() => setActiveTab(tag)}
                                        className={clsx('inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md shadow-sm', activeTab === tag ? 'bg-orange-500 text-white' : 'bg-white text-black')}
                                    >
                                        <span className="relative z-10 text-xl font-bold uppercase inline-block">
                                            {tag}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="pb-36">
                        <div className="max-w-[1200px] m-auto">
                            <ul className="grid grid-cols-2 gap-6 mx-3 lg:mx-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <Card menuPosts={getPostsToDisplay()} />
                            </ul>

                        </div>
                    </section>
                </div>
                {/* <BeforeFooter /> */}
            </>
        );
    }
}
