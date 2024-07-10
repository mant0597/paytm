// Balance.jsx
import React from 'react';

const Balance = ({ value }) => {
    // Handle loading state or fallback
    if (value === null || value === undefined) {
        return <div>Loading...</div>; // Or any other loading indicator
    }

    // Ensure value is a number before calling toLocaleString
    if (typeof value !== 'number') {
        return <div>Error: Invalid balance value</div>; // Handle unexpected data types
    }

    return (
        <div className="bg-white p-4 shadow-md rounded-lg mb-4">
            <div className="text-lg font-bold">Your Balance</div>
            <div className="text-lg font-semibold mt-2">Rs {value.toLocaleString()}</div>
        </div>
    );
};

export { Balance }; // Export Balance as a named export
