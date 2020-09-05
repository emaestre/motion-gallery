import React, { useState, useEffect, useMemo } from 'react';
import ImageCard from 'components/ImageCard';
import SearchBar from 'components/SearchBar';

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [term, setTerm] = useState('');

    const PIXABAY_API_KEY = useMemo(
        () => process.env.REACT_APP_PIXABAY_API_KEY || null,
        []
    );

    const imagesFound = useMemo(() => images.length > 0, [images]);

    useEffect(() => {
        setIsLoading(true);
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
            <SearchBar handleSubmit={setTerm} />

            {!imagesFound && (
                <div className="text-5xl text-center mx-auto mt-32">
                    No images were found with this term.
                </div>
            )}

            {isLoading ? (
                <div className="text-5xl text-center mx-auto mt-32">
                    Loading...
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-4">
                    {images.map((image) => (
                        <ImageCard key={image.id} image={image} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
