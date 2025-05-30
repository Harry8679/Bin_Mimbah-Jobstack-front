
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import Select from 'react-select';

import Navbar from '../../components/Navbar'
import TrendingService from '../../components/Trending-service'
import Popularjobstwo from '../../components/Popular-Jobs-two';
import BestCompanies from '../../components/Best-companies';
import QuesAnswer from '../../components/Question-Answer';
import ExploreJob from '../../components/Explore-job';
import Footer from '../../components/Footer';

import ab05 from '../../assets/images/about/ab05.jpg';


import {BiBriefcaseAlt2, PiMapPin, BiCheckCircle} from "../../assets/icons/vander"

const optionsOne = [
    { value: 'AF', label: 'Afghanistan' },
    { value: 'AZ', label: ' Azerbaijan' },
    { value: 'BS', label: 'Bahamas' },
    { value: 'BH', label: 'Bahrain' },
    { value: 'CA', label: 'Canada' },
    { value: 'CV', label: 'Cape Verde' },
    { value: 'DK', label: 'Denmark' },
    { value: 'DJ', label: 'Djibouti' },
    { value: 'ER', label: 'Eritrea' },
    { value: 'EE', label: 'Estonia' },
    { value: 'GM', label: 'Gambia' },
]

export default function IndexTwo() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Navbar navClass='!justify-end nav-light' />
            <section className="relative h-screen flex justify-center items-center bg-[url('../../assets/images/hero/bg.jpg')]  bg-cover">
                <div className="absolute inset-0 bg-slate-900/30"></div>
                <div className="container z-1">
                    <div className="grid grid-cols-1 text-center mt-10 relative">
                        <h4 className="lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 font-bold text-white">Find & Hire Experts <br /> for any Job</h4>
                        <p className="text-white/50 text-lg max-w-xl mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>

                        <div className="d-flex" id="reserve-form">
                            <div className="md:w-5/6 mx-auto">
                                <div className="lg:col-span-10 mt-8">
                                    <div className="bg-white dark:bg-slate-900 border-0 shadow-sm rounded-md p-3">
                                        <form action="#">
                                            <div className="registration-form text-dark text-start">
                                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                    <div className="filter-search-form relative filter-border">
                                                        <BiBriefcaseAlt2 className="icons"/>
                                                        <input name="name" type="text" id="job-keyword" className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" placeholder="Search your Keywords" />
                                                    </div>

                                                    <div className="filter-search-form relative filter-border">
                                                        <PiMapPin className="icons"/>
                                                        <Select className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" options={optionsOne} />

                                                    </div>

                                                    <input type="submit" id="search" name="search" style={{ height: '60px' }} className="py-1 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-full" value="Search" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span className="text-white/60"><span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <TrendingService />
                <Popularjobstwo />
                <div className="container md:mt-24 mt-16">
                    <div className="grid grid-cols-1">
                        <div className="relative overflow-hidden bg-emerald-600 rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700">
                            <div className="grid md:grid-cols-2 items-center gap-[30px]">
                                <div className="relative">
                                    <img src={ab05} alt="" />
                                    <div className="absolute md:bottom-1/2 md:translate-y-1/2 md:-end-10 ltr:md:translate-x-0 rtl:md:translate-x-0 -bottom-10 end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 text-center">
                                        <Link to="#" onClick={()=>setOpen(!isOpen)} className="lightbox  size-20 rounded-full shadow-lg shadow-gray-200 dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-white p-4">
                                        <h4 className="leading-normal text-4xl mb-3 font-semibold">Get the job of your <br /> dreams quickly.</h4>

                                        <p className="text-white/70 text-lg max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                                        <ul className="list-none text-white/50 mt-4">
                                            <li className="mb-1 flex items-center"><BiCheckCircle className="text-white text-xl me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                            <li className="mb-1 flex items-center"><BiCheckCircle className="text-white text-xl me-2"/> Our Talented & Experienced Marketing Agency</li>
                                            <li className="mb-1 flex items-center"><BiCheckCircle className="text-white text-xl me-2"/> Create your own skin to match your brand</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container md:mt-24 mt-16">
                    <div className="relative grid md:grid-cols-3 grid-cols-1 items-center gap-[30px] z-1">
                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white"><CountUp
                                start={1010}
                                end={1548}
                                duration={3}
                            />
                                K+</h1>

                            <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Job Fulfillment</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
                                <CountUp
                                    start={2}
                                    end={25}
                                    duration={3}
                                />
                                +</h1>
                            <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Branches</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
                                <CountUp
                                    start={0}
                                    end={9}
                                    duration={3}
                                />+</h1>
                            <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Years Experience</h5>
                        </div>
                    </div>
                </div>
                <BestCompanies />
                <QuesAnswer />
                <ExploreJob />
            </section>
            {isOpen && 
                <div className="flex bg-slate-900/70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-1 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <button type="button" onClick={()=>setOpen(!isOpen)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-1 md:p-1 space-y-4">
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </>
    )
}
