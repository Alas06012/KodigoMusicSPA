import React from 'react';

export default function MainContent() {

    const data = [
        {
            id: 1,
            title: 'Música',
            image: 'https://via.placeholder.com/300x200',
            description: 'Descubre los últimos lanzamientos musicales.',
        },
        {
            id: 2,
            title: 'Podcasts',
            image: 'https://via.placeholder.com/300x200',
            description: 'Escucha tus podcasts favoritos.',
        },
        {
            id: 3,
            title: 'Rock Clásico',
            image: 'https://via.placeholder.com/300x200',
            description: 'Los mejores éxitos del rock clásico.',
        },
        {
            id: 4,
            title: 'Hip Hop',
            image: 'https://via.placeholder.com/300x200',
            description: 'Las últimas tendencias en hip hop.',
        },
        {
            id: 5,
            title: 'Música Electrónica',
            image: 'https://via.placeholder.com/300x200',
            description: 'Sumérgete en los ritmos electrónicos.',
        },
        {
            id: 6,
            title: 'Jazz',
            image: 'https://via.placeholder.com/300x200',
            description: 'Disfruta de los clásicos del jazz.',
        },
        {
            id: 7,
            title: 'Reggaetón',
            image: 'https://via.placeholder.com/300x200',
            description: 'Baila con los mejores reggaetones del momento.',
        },
        {
            id: 8,
            title: 'Pop',
            image: 'https://via.placeholder.com/300x200',
            description: 'Los hits más populares de la música pop.',
        },
        {
            id: 9,
            title: 'Indie',
            image: 'https://via.placeholder.com/300x200',
            description: 'Explora la música indie emergente.',
        },
        {
            id: 10,
            title: 'Clásicos de los 80s',
            image: 'https://via.placeholder.com/300x200',
            description: 'Revive los clásicos de los años 80.',
        },
        {
            id: 11,
            title: 'Bachata',
            image: 'https://via.placeholder.com/300x200',
            description: 'Disfruta de los ritmos románticos de la bachata.',
        },
        {
            id: 12,
            title: 'Ópera',
            image: 'https://via.placeholder.com/300x200',
            description: 'Sumérgete en el mundo de la ópera.',
        },
        {
            id: 13,
            title: 'Metal',
            image: 'https://via.placeholder.com/300x200',
            description: 'Para los amantes del metal y sus subgéneros.',
        },
        {
            id: 14,
            title: 'Música Infantil',
            image: 'https://via.placeholder.com/300x200',
            description: 'Diversión y aprendizaje con música infantil.',
        },
        {
            id: 15,
            title: 'R&B',
            image: 'https://via.placeholder.com/300x200',
            description: 'Ritmos suaves y melodías cautivadoras.',
        },
        {
            id: 16,
            title: 'Folk',
            image: 'https://via.placeholder.com/300x200',
            description: 'Conexión con la música folk y sus historias.',
        },
        {
            id: 17,
            title: 'Blues',
            image: 'https://via.placeholder.com/300x200',
            description: 'El alma de la música en el blues.',
        },
        {
            id: 18,
            title: 'K-Pop',
            image: 'https://via.placeholder.com/300x200',
            description: 'La explosión del pop coreano en el mundo.',
        },
        {
            id: 19,
            title: 'Country',
            image: 'https://via.placeholder.com/300x200',
            description: 'La música country y sus raíces.',
        },
        {
            id: 20,
            title: 'Salsa',
            image: 'https://via.placeholder.com/300x200',
            description: 'Los mejores ritmos de salsa para bailar.',
        },
        {
            id: 21,
            title: 'Música para Estudiar',
            image: 'https://via.placeholder.com/300x200',
            description: 'Melodías suaves para concentrarte.',
        },
        {
            id: 22,
            title: 'Música Ambiental',
            image: 'https://via.placeholder.com/300x200',
            description: 'Sonidos relajantes para meditación y descanso.',
        },
        {
            id: 23,
            title: 'Soundtracks de Películas',
            image: 'https://via.placeholder.com/300x200',
            description: 'Las mejores bandas sonoras de la historia del cine.',
        },
        {
            id: 24,
            title: 'Música Clásica',
            image: 'https://via.placeholder.com/300x200',
            description: 'Los grandes compositores y sus obras maestras.',
        },
        {
            id: 25,
            title: 'Música de Videojuegos',
            image: 'https://via.placeholder.com/300x200',
            description: 'Revive tus juegos favoritos con su música.',
        },
    ];

    

    return (
        <main className="pt-8 px-6 bg-custom-gray rounded-t-2xl overflow-y-auto max-h-screen custom-scrollbar">
            <h1 className="text-white text-2xl font-bold text-start mb-4 mx-6">Explorar todo</h1>
            <hr className='mb-4 mx-6'/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-36">
                    {data.map((item) => (
                        <div key={item.id} className="bg-fourth hover:bg-fifth rounded-lg shadow-md transition duration-300 min-h-[200px] ">
                            <div className="flex p-4 gap-5">
                                <div className='w-[40%]'>
                                    <h2 className="text-xl font-bold text-white">{item.title}</h2>
                                </div>
                                <div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-lg object-cover hover:rotate-12 transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </main>
    );
    
}

