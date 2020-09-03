import React, { useState, useEffect, useMemo } from 'react';
import ImageCard from 'components/ImageCard';

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
            `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
        )
            .then((response) => response.json())
            .then((newImages) => {
                setImages(newImages.hits);
                setIsLoading(false);
            })
            .catch((err) => console.error(err));
    }, [PIXABAY_API_KEY, term]);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
                {images.map((image) => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
}

export default App;
