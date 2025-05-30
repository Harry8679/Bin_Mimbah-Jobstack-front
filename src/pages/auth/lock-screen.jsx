import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../assets/images/team/05.jpg';

export default function LockScreen() {
    return (
        <>
            <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[url('../../assets/images/hero/bg3.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                            <div className="text-center">
                                <img src={image} className="mx-auto  size-20 rounded-full shadow-sm dark:shadow-gray-800" alt="" />
                                <h5 className="mb-6 mt-4 text-xl font-semibold">Jenny Jimenez</h5>
                            </div>
                            <form>
                                <div className="grid grid-cols-1">
                                    <div className="mb-4 ltr:text-left rtl:text-right">
                                        <label className="font-semibold" htmlFor="LoginPassword">Password:</label>
                                        <input id="LoginPassword" type="password" className="form-input mt-3 rounded-md" required placeholder="Password:" />
                                    </div>

                                    <div className="flex justify-between mb-4">
                                        <div className="inline-flex items-center">
                                            <input className="form-checkbox rounded size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-green-600 checked:appearance-auto dark:accent-green-600 focus:border-green-300 focus:ring-0 focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="Rememberme" />
                                            <label className="form-check-label text-slate-400" htmlFor="Rememberme">Remember me</label>
                                        </div>
                                        <p className="text-slate-400 mb-0"><Link to="/reset-password" className="text-slate-400">Forgot password ?</Link></p>
                                    </div>

                                    <div className="mb-4">
                                        <input type="submit" className="py-1 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full" value="Login / Sign in" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
