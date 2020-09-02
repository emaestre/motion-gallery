import React, { useState, useEffect, useMemo } from 'react';

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    const PIXABAY_API_KEY = useMemo(
        () => process.env.REACT_APP_PIXABAY_API_KEY || null,
        []
    );

    useEffect(() => {
        fetch(
            `https://pixabay.com/api/videos/?key=${PIXABAY_API_KEY}&q=${term}`
        )
            .then((response) => response.json())
            .then((newImages) => {
                setImages(newImages.hits);
                setIsLoading(false);
            })
            .catch((err) => console.error(err));
    }, [PIXABAY_API_KEY, term]);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                src="https://source.unsplash.com/random"
                alt=""
                className="w-full"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-blue-500 text-xl mb-2">
                    Photo by Eleazar Maestre
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>4000
                    </li>
                    <li>
                        <strong>Downloads: </strong>300
                    </li>
                    <li>
                        <strong>Likes: </strong>500
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag2
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag3
                </span>
            </div>
        </div>
    );
}

export default App;
