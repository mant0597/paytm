import React from 'react';

const Balance = ({ value }) => {
    if (value === null || value === undefined) {
        return <div>Loading...</div>;
    }

    if (typeof value !== 'number') {
        return <div>Error: Invalid balance value</div>;
    }

    return (
        <div className="bg-white p-4 shadow-md rounded-lg mb-4">
            <div className="text-lg font-bold">Your Balance</div>
            <div className="text-lg font-semibold mt-2">Rs {value.toLocaleString()}</div>
        </div>
    );
};

export { Balance };
