import React from 'react'
import contact from '../assets/images/svg/contact.svg';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import {PiMapPin, BsTelephone, LuMail} from "../assets/icons/vander"

export default function Contact() {
    return (
        <>
            <Navbar navClass='!justify-end' />
            <div className="container-fluid relative mt-20">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe title="contact-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: 0 }} className="w-full h-[500px]" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <img src={contact} alt="" />
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-semibold">Get in touch !</h3>

                                    <form>
                                        <div className="grid lg:grid-cols-12 lg:gap-6">
                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                <input name="name" id="name" type="text" className="form-input mt-2" placeholder="Name :" />
                                            </div>

                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                <input name="email" id="email" type="email" className="form-input mt-2" placeholder="Email :" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mb-5">
                                                <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                                <input name="subject" id="subject" className="form-input mt-2" placeholder="Subject :" />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                <textarea name="comments" id="comments" className="form-input mt-2 textarea" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" id="submit" name="send" className="py-1 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-md">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-xs dark:shadow-gray-800">
                                    <BsTelephone/>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-lg font-semibold">Phone</h5>
                                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                <div className="mt-5">
                                    <Link to="tel:+152534-468-854" className="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 transition duration-500">+152 534-468-854</Link>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-xs dark:shadow-gray-800">
                                    <LuMail/>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-lg font-semibold">Email</h5>
                                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                                <div className="mt-5">
                                    <Link to="mailto:contact@example.com" className="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 transition duration-500">contact@example.com</Link>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative text-transparent">
                                <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-xs dark:shadow-gray-800">
                                    <PiMapPin/>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-lg font-semibold">Location</h5>
                                <p className="text-slate-400 mt-3">C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485</p>

                                <div className="mt-5">
                                    <Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                        data-type="iframe" className="video-play-icon read-more lightbox btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 transition duration-500">View on Google map</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
