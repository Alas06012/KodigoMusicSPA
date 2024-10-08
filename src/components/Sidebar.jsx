
import React, { useState } from 'react';
import { FaSearch, FaHeart, FaMusic, FaPlay, FaRunning, FaGuitar, FaGlobe, FaBeer, FaHeadphones, FaSun, FaClock, FaPlane, FaDrum, FaBook, FaChartLine } from 'react-icons/fa';


export default function Sidebar() {

    const [playlists, setPlaylists] = useState([
        { id: 1, title: 'Tus me gusta', icon: <FaHeart />, count: 211 },
        { id: 2, title: 'Mix latino', icon: <FaMusic />, count: 150 },
        { id: 3, title: 'Pop Hits', icon: <FaMusic />, count: 320 },
        { id: 4, title: 'Chill Vibes', icon: <FaPlay />, count: 275 },
        { id: 5, title: 'Workout Playlist', icon: <FaRunning />, count: 98 },
        { id: 6, title: 'Old School Rap', icon: <FaMusic />, count: 450 },
        { id: 7, title: 'Rock Classics', icon: <FaGuitar />, count: 370 },
        { id: 8, title: 'Electronic Beats', icon: <FaMusic />, count: 230 },
        { id: 9, title: 'Indie Favorites', icon: <FaHeart />, count: 125 },
        { id: 10, title: 'Top 50 Global', icon: <FaGlobe />, count: 500 },
        { id: 11, title: 'Relaxing Piano', icon: <FaMusic />, count: 190 },
        { id: 12, title: 'Party Time', icon: <FaBeer />, count: 345 },
        { id: 13, title: 'Hip Hop Vibes', icon: <FaHeadphones />, count: 210 },
        { id: 14, title: 'Jazz Essentials', icon: <FaMusic />, count: 112 },
        { id: 15, title: 'Country Roads', icon: <FaGuitar />, count: 200 },
        { id: 16, title: 'Classical Masterpieces', icon: <FaMusic />, count: 135 },
        { id: 17, title: 'Summer 2024', icon: <FaSun />, count: 90 },
        { id: 18, title: 'Throwback Thursday', icon: <FaClock />, count: 400 },
        { id: 19, title: 'Travel Tunes', icon: <FaPlane />, count: 180 },
        { id: 20, title: 'K-Pop Faves', icon: <FaMusic />, count: 275 },
        { id: 21, title: 'Acoustic Sessions', icon: <FaGuitar />, count: 230 },
        { id: 22, title: 'Soul & Funk', icon: <FaDrum />, count: 210 },
        { id: 23, title: 'Reggae Rhythms', icon: <FaMusic />, count: 140 },
        { id: 24, title: 'Focus Beats', icon: <FaBook />, count: 170 },
        { id: 25, title: 'Trending Now', icon: <FaChartLine />, count: 310 },

    ]);


    const [buscarCoincidencia, setbuscarCoincidencia] = useState('');

    const filteredPlaylists = playlists.filter((playlist) =>
        playlist.title.toLowerCase().includes(buscarCoincidencia.toLowerCase())
    );

    return (
        <div className="sidebar bg-primary w-96 h-screen flex flex-col text-white z-40">
            <div className="sidebar-header py-4 px-6 flex justify-start items-center">
                <svg width="30px" height="30px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> {/* Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools */} <title>ic_fluent_library_28_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"> <g id="ic_fluent_library_28_filled" fill="#ffffff" fillRule="nonzero"> <path d="M5.9897,3 C7.0937,3 7.9897,3.896 7.9897,5 L7.9897,23 C7.9897,24.104 7.0937,25 5.9897,25 L4.0007,25 C2.8957,25 2.0007,24.104 2.0007,23 L2.0007,5 C2.0007,3.896 2.8957,3 4.0007,3 L5.9897,3 Z M12.9897,3 C14.0937,3 14.9897,3.896 14.9897,5 L14.9897,23 C14.9897,24.104 14.0937,25 12.9897,25 L10.9947,25 C9.8897,25 8.9947,24.104 8.9947,23 L8.9947,5 C8.9947,3.896 9.8897,3 10.9947,3 L12.9897,3 Z M22.0701,6.5432 L25.9301,22.0262 C26.1971,23.0972 25.5441,24.1832 24.4731,24.4512 L22.5101,24.9402 C21.4391,25.2072 20.3531,24.5552 20.0861,23.4832 L16.2261,8.0002 C15.9581,6.9282 16.6111,5.8432 17.6821,5.5752 L19.6451,5.0862 C20.7161,4.8182 21.8021,5.4712 22.0701,6.5432 Z" id="🎨-Color"> </path> </g> </g> </g></svg>

                <h2 className="text-xl font-bold pl-2">Tu biblioteca</h2>
            </div>
            <div className="sidebar-search px-6 pb-5">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FaSearch className="text-gray-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full p-2 pl-10 rounded bg-transparent focus:bg-[#292929] transition-all outline-none"
                        value={buscarCoincidencia}
                        onChange={(e) => setbuscarCoincidencia(e.target.value)}
                    />
                </div>
            </div>
            {/* Este div será scrolleable */}
            <div className="sidebar-content flex-grow overflow-y-auto custom-scrollbar">
                <ul className="sidebar-list">
                    {filteredPlaylists.map((playlist) => (
                        <li key={playlist.id} className="py-2 px-5 flex items-center hover:underline hover:bg-secundary hover:rounded-e-3xl transition-all">
                            <div className="flex-shrink-0 pr-2">{playlist.icon}</div>
                            <div className="ml-2">
                                <a href="#" className="text-white">
                                    {playlist.title}
                                </a>
                                <br />
                                <span>({playlist.count} canciones)</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )


}