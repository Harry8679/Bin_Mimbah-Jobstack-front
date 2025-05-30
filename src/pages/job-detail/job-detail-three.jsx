import React from 'react'
import { Link, useParams } from "react-router-dom";
import lenovo_logo from '../../assets/images/company/lenovo-logo.png';
import JobDetailComp from '../../components/job-detail-comp';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { FiBook, FiBriefcase, FiClock, FiDollarSign, FiMapPin, FiMonitor, FiUserCheck } from 'react-icons/fi';
import {MdOutlineArrowForward, HiOutlineBuildingOffice} from "../../assets/icons/vander"

import {PiMapPin} from "../../assets/icons/vander"
import ExploreJob from '../../components/Explore-job';
import { jobData } from '../../data/data';
export default function JobDetailThree() {
    const params = useParams();
    const id = params.id
    const data = jobData.find((jobs) => jobs.id === parseInt (id));
    return (
        <>

            <Navbar navClass='justify-end' />
            <section className="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
                <div className="container mt-10">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="p-6 shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                                <img src={data?.image ? data?.image : lenovo_logo } className="rounded-full size-28 p-4 bg-white dark:bg-slate-900 shadow-sm shadow-gray-200 dark:shadow-gray-700" alt="" />

                                <div className="md:ms-4 mt-4">
                                    <h5 className="text-xl font-semibold">{data?.heading ? data?.heading :'Web Designer / Developer'}</h5>
                                    <div className="mt-1">
                                        <span className="text-slate-400 font-medium me-2 inline-flex items-center"><HiOutlineBuildingOffice className="text-[18px] text-emerald-600 me-1"/>{data?.title ? `${data?.title} pvt. ltd ` : "Lenovo pvt. ltd"} </span>
                                        <span className="text-slate-400 font-medium me-2 inline-flex items-center"><PiMapPin className="text-[18px] text-emerald-600 me-1"/> {data?.Location ? data?.Location :'Norway,Oslo'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-6">
                            <h5 className="text-lg font-semibold">Job Information:</h5>
                            <ul className="list-none mt-5">
                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md">
                                    <FiUserCheck className="size-5"></FiUserCheck>

                                    <div className="ms-4">
                                        <p className="font-medium">Employee Type:</p>
                                        <span className="text-emerald-600 font-medium text-sm">{data?.jobtype ? data?.jobtype  : "Full Time"}</span>
                                    </div>
                                </li>

                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md">
                                    <FiMapPin className="size-5"></FiMapPin>

                                    <div className="ms-4">
                                        <p className="font-medium">Location:</p>
                                        <span className="text-emerald-600 font-medium text-sm">{data?.Location ? data?.Location : "Australia"}</span>
                                    </div>
                                </li>

                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md">
                                    <FiMonitor className="size-5"></FiMonitor>

                                    <div className="ms-4">
                                        <p className="font-medium">Job Type:</p>
                                        <span className="text-emerald-600 font-medium text-sm">{data?.heading ? data?.heading : "Web Designer / Developer"}</span>
                                    </div>
                                </li>

                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md">
                                    <FiBriefcase className="size-5"></FiBriefcase>

                                    <div className="ms-4">
                                        <p className="font-medium">Experience:</p>
                                        <span className="text-emerald-600 font-medium text-sm">2+ years</span>
                                    </div>
                                </li>

                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md">
                                    <FiBook className="size-5"></FiBook>

                                    <div className="ms-4">
                                        <p className="font-medium">Qualifications:</p>
                                        <span className="text-emerald-600 font-medium text-sm">MCA</span>
                                    </div>
                                </li>

                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md">
                                    <FiDollarSign className="size-5"></FiDollarSign>

                                    <div className="ms-4">
                                        <p className="font-medium">Salary:</p>
                                        <span className="text-emerald-600 font-medium text-sm">{data?.price ? data?.price : "$4000 - $4500"}</span>
                                    </div>
                                </li>

                                <li className="inline-flex items-center py-2 px-4 bg-white dark:bg-slate-900 me-2 my-1 shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md">
                                    <FiClock className="size-5"></FiClock>

                                    <div className="ms-4">
                                        <p className="font-medium">Date posted:</p>
                                        <span className="text-emerald-600 font-medium text-sm">28th Feb, 2025</span>
                                    </div>
                                </li>
                            </ul>

                            <h5 className="text-lg font-semibold mt-6">Job Description:</h5>

                            <p className="text-slate-400 mt-4">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
                            <p className="text-slate-400 mt-4">This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p>
                            <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>

                            <h5 className="text-lg font-semibold mt-6">Responsibilities and Duties: </h5>
                            <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            <ul className="list-none">
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Participate in requirements analysis</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Write clean, scalable code using C# and .NET frameworks</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Test and deploy applications and systems</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Revise, update, refactor and debug code</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Improve existing software</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Develop documentation throughout the software development life cycle (SDLC)</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Serve as an expert on applications and provide technical support</li>
                            </ul>

                            <h5 className="text-lg font-semibold mt-6">Required Experience, Skills and Qualifications: </h5>
                            <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            <ul className="list-none">
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Proven experience as a .NET Developer or Application Developer</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Experience designing, developing and creating RESTful web services and APIs</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Basic know how of Agile process and practices</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Good understanding of object-oriented programming.</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Good understanding of concurrent programming.</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Sound knowledge of application architecture and design.</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Excellent problem solving and analytical skills</li>
                            </ul>

                            <div className="mt-5">
                                <Link to="/job-apply" className="py-1 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <JobDetailComp />

                <ExploreJob/>
            </section>
            <Footer />


        </>
    )
}
