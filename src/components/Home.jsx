import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; 
import { RiCloseLargeFill } from "react-icons/ri";
import Sidebar from './Sidebar'; 
import Header from './Header';
import MainContent from './MainContent';
import Player from './Player';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex bg-primary">
      {/* Sidebar */}
      <div
        className={`fixed z-40 lg:z-0 lg:relative transform lg:translate-x-0 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:flex lg:w-64 bg-gray-800 h-full`}
      >
        <Sidebar />
      </div>

      {/* Botón flotante para abrir el Sidebar en pantallas pequeñas */}
      <button
        className="lg:hidden fixed z-50 top-3 left-3 bg-fourth text-white p-3 rounded-full shadow-lg"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <RiCloseLargeFill className="text-xl" /> : <FaBars className="text-xl" /> }
      </button>

      {/* Contenido principal */}
      <div className="flex-grow overflow-y-hidden">
        <Header />
        <MainContent />
      </div>

      {/* Player fijo en la parte inferior */}
      <Player className="fixed bottom-0 w-full z-50" />
    </div>
  );
}
