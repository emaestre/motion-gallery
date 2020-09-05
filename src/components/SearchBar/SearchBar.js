import React, { useState, useCallback } from 'react';

function SearchBar(props) {
    const { handleSubmit: triggerSubmit } = props;

    const [currentInputValue, setCurrentInputValue] = useState('');

    const handleChange = useCallback(
        (event) => {
            setCurrentInputValue(event.target.value);
        },
        [setCurrentInputValue]
    );

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            triggerSubmit(currentInputValue);
        },
        [currentInputValue, triggerSubmit]
    );

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form
                action=""
                className="flex items-center border-b-2 border-teal-500 py-2"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    placeholder="Search Image Term..."
                    onChange={handleChange}
                />
                <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
