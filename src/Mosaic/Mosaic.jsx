/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Loader from '../components/Loader';

function Mosaic() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mosaic, setMosaic] = useState([]);

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

        fetch('http://tgs.test/api/mosaics', options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMosaic(data.data);
                },
                (err) => {
                    setIsLoaded(true);
                    setError(err);
                },
            );
    }, []);

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
    } if (mosaic) {
        return (
            <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto pt-24">
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}>
                    <Masonry gutter="10px">
                        {mosaic.map((value) => (
                            <a target="_blank" href={`http://tgs.test/${value.image}`} rel="noreferrer">
                                <img
                                    key={value.id}
                                    src={`http://tgs.test/${value.image}`}
                                    alt={value.name}
                                    style={{ width: '100%', display: 'block' }}
                                />

                            </a>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        );
    }
}
export default Mosaic;
