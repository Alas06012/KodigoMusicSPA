import React from 'react';
import { FaHome, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Header() {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        Swal.fire({
          title: '¿Estás seguro?',
          text: "Vas a cerrar sesión.",
          icon: 'warning',
          position: 'center',
          showCancelButton: true,
          confirmButtonText: 'Sí, cerrar sesión',
          confirmButtonColor: "#e73d18",
          cancelButtonText: 'Cancelar',
          cancelButtonColor: '#01a383',
          background: '#292929',
          color: 'white',
          iconColor: 'white', 
          showCloseButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/');
          }
        });
      };
    


    return (
        <nav className="bg-primary text-white p-4 flex justify-between">
            <div className="flex items-center">
                <FaHome className="text-4xl mr-4 bg-[#292929] p-2 rounded-full" />

                <div className="relative hover:outline rounded-3xl transition-all">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FaSearch className="text-gray-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="¿Qué quieres reproducir?"
                        className="w-full py-2 px-12 rounded-3xl bg-transparent bg-custom-gray transition-all outline-none "
                    />
                </div>
            </div>
            <div className="flex items-center outline-none" >
                <button onClick={handleLogoutClick}>
                <FaSignOutAlt className="text-4xl mr-4 bg-[#292929] p-2 rounded-full outline-none" />
                </button>
                
            </div>
        </nav>
    );
}