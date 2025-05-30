
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

import Navbar from '../../components/Navbar'
import Popularjobstwo from '../../components/Popular-Jobs-two';
import Footer from '../../components/Footer';

import hero from '../../assets/images/hero.jpg'

import BrowseByCategories from '../../components/BrowseByCategories';
import FindBestCompanies from '../../components/FindBestCompanies';
import News from '../../components/News';
import { FiBriefcase } from 'react-icons/fi';

export default function IndexEight() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Navbar navClass='!justify-end nav-light' />

            <section className="py-36 lg:py-72 lg:pb-0 md:pb-8 w-full table relative bg-[url('../../assets/images/hero/bg3.jpg')] bg-center bg-cover" id="home">
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 mt-10 md:grid-cols-2 gap-[30px]">
                        <div className="lg:col-span-7 lg:me-6">
                            <h4 className="text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Find a new job and <br/> build career</h4>
                            <p className="text-white/70 text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
                        
                            <div className="grid grid-cols-1" id="reserve-form">
                                <div className="mt-8">
                                    <div className="bg-white dark:bg-slate-900 border-0 shadow-sm rounded p-3">
                                        <form action="#">
                                            <div className="registration-form text-dark text-start">
                                                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-6">
                                                    <div className="lg:col-span-8 md:col-span-7">
                                                        <div className="filter-search-form relative filter-border">
                                                            <FiBriefcase className=" icons"></FiBriefcase>
                                                            <input name="name" type="text" id="job-keyword" className="form-input filter-input-box !bg-gray-50 dark:!bg-slate-800 border-0" placeholder="Search your Keywords"/>
                                                        </div>
                                                    </div>

                                                    <div className="lg:col-span-4 md:col-span-5">
                                                        <input type="submit" id="search" name="search" style={{height: '60px'}} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-full" value="Search"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <span className="text-white/70"><span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                            </div>
                        </div>

                        <div className="lg:col-span-5 mt-8 md:mt-0">
                            <div className="relative z-2">
                                <div className="p-3 shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900">
                                    <img src={hero} className="shadow-md rounded-md" alt=""/>
                                </div>
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link to="#" onClick={()=>setOpen(!isOpen)} className="lightbox  size-20 rounded-full shadow-lg shadow-gray-200 dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape overflow-hidden text-white dark:text-slate-900 rtl:-scale-x-[1]">
                    <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                    </svg>
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
            <Popularjobstwo />
            <BrowseByCategories/>
            <section className='md:py-24 py-16'>
                <FindBestCompanies/>  
                <News/>
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
