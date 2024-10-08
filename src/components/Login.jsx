
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();

        if (password.length >= 8){
            if (email === 'email@email.com' && password === '123456789') {
            
                navigate('/home');
            } else {
                Swal.fire({
                    toast: true,
                    position: 'top',
                    icon: 'error',
                    iconColor: 'white',
                    title: 'Email o Password erroneos',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    background: '#803cae',
                    color: 'white'
                  });
            }
        }else{
            Swal.fire({
                toast: true,
                position: 'top',
                icon: 'error',
                iconColor: 'white',
                title: 'El password debe ser mayor a 8 carácteres',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#803cae',
                color: 'white'
              });
        }
        
        
    }

    
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#22102f] text-white">

            <div className="w-full p-10  md:p-8 md:w-[28rem]">
                <svg className="w-full mb-5" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.75 12.508L21.25 9.108V14.7609C20.7449 14.4375 20.1443 14.25 19.5 14.25C17.7051 14.25 16.25 15.7051 16.25 17.5C16.25 19.2949 17.7051 20.75 19.5 20.75C21.2949 20.75 22.75 19.2949 22.75 17.5C22.75 17.5 22.75 17.5 22.75 17.5L22.75 7.94625C22.75 6.80342 22.75 5.84496 22.6696 5.08131C22.6582 4.97339 22.6448 4.86609 22.63 4.76597C22.5525 4.24426 22.4156 3.75757 22.1514 3.35115C22.0193 3.14794 21.8553 2.96481 21.6511 2.80739C21.6128 2.77788 21.573 2.74927 21.5319 2.7216L21.5236 2.71608C20.8164 2.2454 20.0213 2.27906 19.2023 2.48777C18.4102 2.68961 17.4282 3.10065 16.224 3.60469L14.13 4.48115C13.5655 4.71737 13.0873 4.91751 12.712 5.1248C12.3126 5.34535 11.9686 5.60548 11.7106 5.99311C11.4527 6.38075 11.3455 6.7985 11.2963 7.25204C11.25 7.67831 11.25 8.19671 11.25 8.80858V16.7609C10.7448 16.4375 10.1443 16.25 9.5 16.25C7.70507 16.25 6.25 17.7051 6.25 19.5C6.25 21.2949 7.70507 22.75 9.5 22.75C11.2949 22.75 12.75 21.2949 12.75 19.5C12.75 19.5 12.75 19.5 12.75 19.5L12.75 12.508Z" fill="#01a383"></path> <path opacity="0.5" d="M7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2V7.76091C5.74485 7.4375 5.14432 7.25 4.5 7.25C2.70507 7.25 1.25 8.70507 1.25 10.5C1.25 12.2949 2.70507 13.75 4.5 13.75C6.29493 13.75 7.75 12.2949 7.75 10.5V5.0045C8.44852 5.50913 9.27955 5.75 10 5.75C10.4142 5.75 10.75 5.41421 10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.54565 4.25 8.9663 4.07389 8.51159 3.69837C8.0784 3.34061 7.75 2.79785 7.75 2Z" fill="#01a383"></path> </g></svg>
                <h2 className="text-3xl font-bold mb-6 text-center"><span className="text-secundary underline">Ko</span><span className="text-third underline">di</span><span className="text-fourth underline">go</span><span className="text-[#803cae]">Music!</span></h2>


                <hr className="mb-8 border-secundary" />
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 " htmlFor="email">
                            Email
                        </label>
                        <input
                            className="bg-transparent shadow appearance-none border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-secundary hover:border-fourth transition-all"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingrese su correo electrónico"
                            required
                        />
                    </div>


                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="bg-transparent shadow appearance-none border rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-secundary hover:border-fourth transition-all"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingrese su contraseña"
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            className="bg-secundary hover:bg-fourth text-white font-bold py-2 px-4 rounded-3xl hover:scale-110 transition-all w-full mb-5"
                            type="submit"
                        >
                            Ingresar
                        </button>

                        <a href="#" className="inline-block align-baseline text-md text-white hover:text-fourth underline">
                            Ha olvidado su contraseña?
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-400 text-md">
                    No tienes una cuenta? <a href="#" className="text-white hover:text-fourth underline">Registrate</a>
                </p>

                <p className="text-center text-gray-400 text-md">
                   Email: email@email.com
                   Password: 123456789
                </p>
            </div>
        </div>

    );
}
