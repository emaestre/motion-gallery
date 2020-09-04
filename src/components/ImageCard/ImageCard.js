import React, { useMemo } from 'react';

function ImageCard(props) {
    const { image, ...restProps } = props;

    const imageSource = useMemo(() => image.webformatURL, [image]);
    const user = useMemo(() => image.user, [image]);
    const views = useMemo(() => image.views, [image]);
    const downloads = useMemo(() => image.downloads, [image]);
    const likes = useMemo(() => image.likes, [image]);
    const tags = useMemo(() => image.tags.split(','), [image]);

    return (
        <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            {...restProps}
        >
            <img src={imageSource} alt="" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-blue-500 text-xl mb-2">
                    Photo by {user}
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ImageCard;
