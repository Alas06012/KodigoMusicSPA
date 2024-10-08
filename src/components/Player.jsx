import React, { useState } from 'react';
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5"

export default function Player() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="bg-primary text-white p-4 fixed bottom-0 w-full z-10 flex items-center justify-center text-center gap-24"> {/* Ajustes clave aquí */}
            <div className="flex items-center text-start">
                <img src="https://via.placeholder.com/300x200" alt="Album cover" className="w-16 h-16 rounded-2xl" />
                <div className="ml-4">
                    <h2 className="text-lg font-bold">Canción</h2>
                    <p className="text-sm">Artista</p>
                </div>
            </div>
            <div className=" ml-">
                <div className='flex justify-center gap-2'>
                    <button className="text-3xl outline-none hover:text-fourth transition-all">
                        <IoPlaySkipBack></IoPlaySkipBack>
                    </button>
                    <button onClick={handlePlayPause} className="text-3xl outline-none hover:text-fourth transition-all">
                        {isPlaying ? <FaPauseCircle></FaPauseCircle> : <FaPlayCircle></FaPlayCircle>}
                    </button>
                    <button className="text-3xl outline-none hover:text-fourth transition-all">
                        <IoPlaySkipForward></IoPlaySkipForward>
                    </button>
                </div>

                <div className="flex items-center mt-2">
                    <span className="text-sm">0:00</span>
                    <div className="flex-grow bg-gray-300 h-1 rounded-3xl mx-2">
                        <div className="bg-green-500 h-1 rounded-3xl w-[100%] sm:w-[25rem]" ></div>
                    </div>
                    <span className="text-sm">3:30</span>
                </div>
            </div>
        </div>
    );
};
