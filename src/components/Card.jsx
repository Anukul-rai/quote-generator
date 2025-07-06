import React, { useEffect, useState } from 'react';

function Card() {
    const [add, setAdd] = useState(null);

    const fetchApi = async () => {
        try {
        const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: {
            'X-Api-Key': 'VDT9d0VV17SK6QG8mh/RLQ==Heo20KdEhz5HooNE',
            },
        });

        if (!res.ok) throw new Error("API request failed");

        const data = await res.json();
        setAdd(data[0]);
        console.log(data);
        } catch (err) {
        console.error("Error fetching quotes:", err);
        }
    };

    

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-pink-900 px-4">
        <div className="bg-white/30 backdrop-blur-xl shadow-lg rounded-2xl p-8 max-w-xl text-center space-y-6">
            <h1 className="text-3xl font-extrabold text-blue-800 uppercase tracking-wide">Quote Generator</h1>

            {add && (
            <>
                <p className="text-lg italic text-gray-700">"{add.quote}"</p>
                <p className="text-sm font-medium text-gray-500">– {add.author || "Unknown"}</p>
            </>
            )}

            <button
            className="bg-yellow-500 hover:bg-yellow-900 text-white font-semibold py-2 px-6 rounded-full transition duration-200 cursor-pointer border "
            onClick={fetchApi}
            >
            Generate New
            </button>
        </div>
        </div>
    );
}

export default Card;
