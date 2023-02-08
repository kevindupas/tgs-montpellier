/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Loader from '../../components/Loader';
import { SALON_ID, URL } from '../../utils/config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Arrow(props) {
    const { onClick, type } = props;
    let className = type === 'next' ? 'nextArrow' : 'prevArrow';
    className += ' arrow';
    const char = type === 'next' ? <HiOutlineChevronRight /> : <HiOutlineChevronLeft />;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            {char}
        </div>
    );
}

export default function Partners() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [partners, setPartners] = useState([]);

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

        fetch(`${URL}/api/salon/${SALON_ID}}/partners`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPartners(data.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    const settings = {
        slidesToScroll: 1,
        autoplay:       true,
        autoplaySpeed:  2000,
        centerMode:     false,
        infinite:       true,
        arrows:         true,
        slidesToShow:   4,
        nextArrow:      <Arrow type="next" />,
        prevArrow:      <Arrow type="prev" />,
        responsive:     [
            {
                breakpoint: 1024,
                settings:   {
                    slidesToShow:   3,
                    slidesToScroll: 1,
                    infinite:       true,
                    dots:           true,
                },
            },
            {
                breakpoint: 600,
                settings:   {
                    slidesToShow:   2,
                    slidesToScroll: 1,
                    initialSlide:   1,
                },
            },
            {
                breakpoint: 480,
                settings:   {
                    slidesToShow:   1,
                    slidesToScroll: 1,
                    centerMode:     true,
                },
            },
        ],
    };

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
    } if (partners) {
        return (
            <div className="bg-[url('/dist/images/pattern-light.jpg')] bg-repeat">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <h2 className="text-4xl text-center text-white font-bold font-microgramma tracking-[0.566667px] leading-[.95] uppercase">Nos partenaires majeurs</h2>
                    <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-2 lg:mt-8">
                        {partners.map((value) => {
                            if (value.sponsors === true) {
                                return (
                                    <div key={value.id} className="col-span-1 flex justify-center">
                                        <img className="w-full h-full lg:w-44" src={URL + value.image} alt="Workcation" />
                                    </div>
                                );
                            }

                            return null;
                        })}
                    </div>
                </div>

                {
                    partners && (
                        <div className="p-6 bg-white">
                            <Slider {...settings}>
                                {partners.map((value) => {
                                    if (value.sponsors === false) {
                                        return (
                                            <div key={value.id} className="flex justify-center items-center h-full w-full text-white px-8">
                                                <img
                                                    className="h-24"
                                                    src={URL + value.image}
                                                    alt="Workcation"
                                                />
                                            </div>
                                        );
                                    }

                                    return null;
                                })}
                            </Slider>
                        </div>
                    )
                }
                <div className="bg-white">
                    <div className="max-w-[1400px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
                        <div className="lg:w-0 lg:flex-1">
                            <h2 className="text-2xl text-black font-bold font-microgramma tracking-[0.566667px] leading-[.95] uppercase">Ils nous soutiennent et nous accompagnent !</h2>
                        </div>
                        <div className="mt-8 lg:mt-0 lg:ml-8">
                            <form className="sm:flex px-5">
                                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <Link to="partenaires" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-xl font-medium rounded-md text-white uppercase bg-orange-500 hover:bg-orange-600 focus:outline-none">
                                        Tous les partenaires
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
