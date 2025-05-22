import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import logo_dark from '../../assets/images/logo-dark.png';
import logo_light from '../../assets/images/logo-light.png';

export default function Login() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                phone_number: phone,
                password: password
            });

            const { token, user } = response.data;

            // Sauvegarde du token (tu peux aussi utiliser Redux ou context)
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            // Redirige vers l’accueil
            navigate('/');
        } catch (err) {
            const message = err.response?.data?.error || "Erreur lors de la connexion.";
            setError(message);
        }
    };

    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[url('../../assets/images/hero/bg3.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                        <div className="p-6">
                            <Link to="#">
                                <img src={logo_dark} className="mx-auto h-[24px] block dark:hidden" alt="" />
                                <img src={logo_light} className="mx-auto h-[24px] dark:block hidden" alt="" />
                            </Link>
                            <h5 className="my-6 text-xl font-semibold">Espace de Connexion</h5>
                            {error && <p className="text-red-500 mb-4">{error}</p>}

                            <form onSubmit={handleLogin} className="text-left">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="LoginPhone">Téléphone :</label>
                                        <input
                                            id="LoginPhone"
                                            type="tel"
                                            className="form-input mt-3 rounded-md w-full"
                                            placeholder="+24166465797"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="LoginPassword">Mot de passe :</label>
                                        <input
                                            id="LoginPassword"
                                            type="password"
                                            className="form-input mt-3 rounded-md w-full"
                                            placeholder="********"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex justify-between mb-4">
                                        <div className="inline-flex items-center">
                                            <input type="checkbox" id="RememberMe" className="form-checkbox rounded me-2" />
                                            <label htmlFor="RememberMe" className="text-slate-400">Se souvenir de moi</label>
                                        </div>
                                        <p className="text-slate-400 mb-0"><Link to="/reset-password">Mot de passe oublié ?</Link></p>
                                    </div>

                                    <div className="mb-4">
                                        <button type="submit" className="py-2 px-5 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md">
                                            Connexion
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <span className="text-slate-400">Pas encore de compte ? </span>
                                        <Link to="/inscription" className="text-black dark:text-white font-bold">Inscription</Link>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 text-center">
                            <p className="mb-0 text-gray-400 font-medium">Bonne année © {new Date().getFullYear()}.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
