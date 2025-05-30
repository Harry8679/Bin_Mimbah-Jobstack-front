import React from 'react'
import { Link ,useParams} from 'react-router-dom';
import image from '../../assets/images/company/1.jpg';
import image1 from '../../assets/images/company/2.jpg';
import image2 from '../../assets/images/company/3.jpg';
import skype from '../../assets/images/company/skype.png';
import google_logo from '../../assets/images/company/google-logo.png';
import Navbar from '../../components/Navbar'
import { FiMail, FiMessageCircle, FiUser } from 'react-icons/fi';
import EmployerDetailComp from '../../components/employer-detail-comp';
import Footer from '../../components/Footer';

import {PiMapPin, LuMail, BiLogoDribbble, AiOutlineBehance, BiLogoLinkedin, FaFacebookF, IoLogoTwitter, AiOutlineClockCircle, BiDollarCircle, FaInstagram} from "../../assets/icons/vander"
import ExploreJob from '../../components/Explore-job';
import { jobData } from '../../data/data';

export default function EmployerDetail(props) {
    const params = useParams();
    const id = params.id
    const data = jobData.find((jobs) => jobs.id === parseInt (id));
    return (
        <>
            <Navbar navClass='!justify-end nav-light' />
            <section className="relative table w-full py-40 bg-[url('../../assets/images/hero/bg4.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/80"></div>
            </section>
            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>


            <section className="relative mb:pb-24 pb-16 -mt-16 z-1">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="md:flex justify-between items-center shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md p-6 bg-white dark:bg-slate-900">
                            <div className="flex items-center">
                                <img src={data?.image ? data?.image : google_logo} className=" size-20 p-3 shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md bg-slate-50 dark:bg-slate-800" alt="" />

                                <div className="ms-4">
                                    <h5 className="text-xl font-bold">{data?.title ? data?.title  : "Google"}</h5>
                                    <h6 className="text-base text-slate-400 flex items-center"><PiMapPin className='me-1'/> {data?.Location ? data?.Location :"France,Paris"}</h6>
                                </div>
                            </div>

                            <div className="md:mt-0 mt-4">
                                <Link to="#" className="py-[5px] px-4 text-sm inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Follow</Link>
                                <Link to="#" className="py-[5px] px-4 text-sm inline-block font-semibold tracking-wide border align-middle transition duration-500 bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-1">See Jobs</Link>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container mt-12">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-7">
                            <h5 className="text-xl font-semibold">Company Story</h5>
                            <p className="text-slate-400 mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.</p>
                            <p className="text-slate-400 mt-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>

                            <div className="grid grid-cols-12 gap-6 mt-6">
                                <div className="col-span-12">
                                    <img src={image} className="rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700" alt="" />
                                </div>
                                <div className="col-span-6">
                                    <img src={image1} className="rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700" alt="" />
                                </div>
                                <div className="col-span-6">
                                    <img src={image2} className="rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700" alt="" />
                                </div>
                            </div>

                            <h5 className="text-xl font-semibold mt-6">Vacancies:</h5>

                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                                <div className="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800">
                                    <div className="p-6">
                                        <Link to="#" className="title h5 text-lg font-semibold hover:text-emerald-600">Software Engineering</Link>
                                        <p className="text-slate-400 mt-2 flex items-center"><AiOutlineClockCircle className="text-emerald-600 me-1"/> Posted 3 Days ago</p>

                                        <div className="flex justify-between items-center mt-4">
                                            <span className="bg-emerald-600/5 text-emerald-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Full Time</span>

                                            <p className="text-slate-400 flex items-center"><BiDollarCircle className="text-emerald-600 me-1"/>$950 - $1100/mo</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-6 border-t border-gray-100 dark:border-gray-700">
                                        <img src={skype} className="size-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="" />

                                        <div className="ms-3">
                                            <h6 className="mb-0 font-semibold text-base">Skype</h6>
                                            <span className="text-slate-400 text-sm">Australia</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800">
                                    <div className="p-6">
                                        <Link to="#" className="title h5 text-lg font-semibold hover:text-emerald-600">Web Developer</Link>
                                        <p className="text-slate-400 mt-2 flex items-center"><AiOutlineClockCircle className="text-emerald-600"/>Posted 3 Days ago</p>

                                        <div className="flex justify-between items-center mt-4">
                                            <span className="bg-emerald-600/5 text-emerald-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Remote</span>

                                            <p className="text-slate-400 flex items-center"><BiDollarCircle className="text-emerald-600"/> $2500 - $2600/mo</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-6 border-t border-gray-100 dark:border-gray-700">
                                        <img src={skype} className="size-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="" />

                                        <div className="ms-3">
                                            <h6 className="mb-0 font-semibold text-base">Skype</h6>
                                            <span className="text-slate-400 text-sm">America</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-md shadow-sm dark:shadow-gray-800 mt-8">
                                <h5 className="text-xl font-semibold">Leave A Comment:</h5>

                                <form className="mt-8">
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                <div className="form-icon relative mt-2">
                                                    <FiUser className="size-4 absolute top-3 start-4"></FiUser>
                                                    <input name="name" id="name" type="text" className="w-full py-2 px-3 text-[14px] border border-gray-200 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent !ps-11" placeholder="Name :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                <div className="form-icon relative mt-2">
                                                    <FiMail className="size-4 absolute top-3 start-4"></FiMail>
                                                    <input name="email" id="email" type="email" className="w-full py-2 px-3 text-[14px] border border-gray-200 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent !ps-11" placeholder="Email :" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="text-left">
                                                <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                <div className="form-icon relative mt-2">
                                                    <FiMessageCircle className="size-4 absolute top-3 start-4"></FiMessageCircle>
                                                    <textarea name="comments" id="comments" className="w-full py-2 px-3 text-[14px] border border-gray-200 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent !ps-11 h-28" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-1 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full">Send Message</button>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="bg-slate-50 dark:bg-slate-800 rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700 p-6 sticky top-20">
                                <div className="w-full leading-[0] border-0">
                                    <iframe title="detail-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: 0 }} className="w-full h-[350px] rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700" allowFullScreen></iframe>
                                </div>

                                <ul className="list-none mt-4">
                                    <li className="flex justify-between mt-2">
                                        <span className="text-slate-400 font-medium">Founded:</span>
                                        <span className="font-medium">2003</span>
                                    </li>

                                    <li className="flex justify-between mt-2">
                                        <span className="text-slate-400 font-medium">Founder:</span>
                                        <span className="font-medium">Niklas Zennström</span>
                                    </li>

                                    <li className="flex justify-between mt-2">
                                        <span className="text-slate-400 font-medium">Headquarters:</span>
                                        <span className="font-medium">Luxembourg</span>
                                    </li>

                                    <li className="flex justify-between mt-2">
                                        <span className="text-slate-400 font-medium">Number of employees:</span>
                                        <span className="font-medium">788</span>
                                    </li>

                                    <li className="flex justify-between mt-2">
                                        <span className="text-slate-400 font-medium">Website:</span>
                                        <span className="font-medium">https://skype.com</span>
                                    </li>

                                    <li className="flex justify-between mt-2">
                                        <span className="text-slate-400 font-medium">Social:</span>

                                        <ul className="list-none ltr:text-right rtl:text-left">
                                            <li className="inline"><Link to="https://dribbble.com/shreethemes" target="_blank" className="size-8 inline-flex items-center text-center justify-center text-base font-semibold tracking-wide align-middle transition duration-500 ease-in-out border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400 mx-0.5"><BiLogoDribbble/></Link></li>
                                            <li className="inline"><Link to="https://www.behance.net/shreethemes" target="_blank" className="size-8 inline-flex items-center text-center justify-center text-base font-semibold tracking-wide align-middle transition duration-500 ease-in-out border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400 mx-0.5"><AiOutlineBehance/></Link></li>
                                            <li className="inline"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="size-8 inline-flex items-center text-center justify-center text-base font-semibold tracking-wide align-middle transition duration-500 ease-in-out border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400 mx-0.5"><BiLogoLinkedin/></Link></li>
                                            <li className="inline"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="size-8 inline-flex items-center text-center justify-center text-base font-semibold tracking-wide align-middle transition duration-500 ease-in-out border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400 mx-0.5"><FaFacebookF/></Link></li>
                                            <li className="inline"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="size-8 inline-flex items-center text-center justify-center text-base font-semibold tracking-wide align-middle transition duration-500 ease-in-out border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400 mx-0.5"><FaInstagram/></Link></li>
                                            <li className="inline"><Link to="https://twitter.com/shreethemes" target="_blank" className="size-8 inline-flex items-center text-center justify-center text-base font-semibold tracking-wide align-middle transition duration-500 ease-in-out border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400 mx-0.5"><IoLogoTwitter/></Link></li>
                                            <li className="inline"><Link to="mailto:support@shreethemes.in" className="size-8 inline-flex items-center text-center justify-center text-base font-semibold tracking-wide align-middle transition duration-500 ease-in-out border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400 mx-0.5"><LuMail/></Link></li>
                                        </ul>
                                    </li>
                                </ul>

                                <div className="mt-4 pt-2 border-t border-gray-200 dark:border-gray-800">
                                    <h5 className="text-lg font-semibold">Contact us</h5>

                                    <form>
                                        <div className="grid grid-cols-1 gap-2">
                                            <div>
                                                <label htmlFor="name2" className="font-semibold">Your Name:</label>
                                                <input name="name" id="name2" type="text" className="form-input mt-2" placeholder="Name :" />
                                            </div>

                                            <div>
                                                <label htmlFor="email2" className="font-semibold">Your Email:</label>
                                                <input name="email" id="email2" type="email" className="form-input mt-2" placeholder="Email :" />
                                            </div>

                                            <div>
                                                <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                                <input name="subject" id="subject" className="form-input mt-2" placeholder="Subject :" />
                                            </div>

                                            <div>
                                                <label htmlFor="comments2" className="font-semibold">Your Comment:</label>
                                                <textarea name="comments" id="comments2" className="form-input mt-2 textarea" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" id="submit2" name="send" className="py-1 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-emerald-600 hover:bg-emerald-700 text-white rounded-md">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <EmployerDetailComp />
                <ExploreJob/>
            </section>
            <Footer />

        </>
    )
}
