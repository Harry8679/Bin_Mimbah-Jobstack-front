import React from 'react'
import { Link } from 'react-router-dom';
import { CandidateList } from '../data/data';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, TbBrandHipchat, AiOutlineStar} from "../assets/icons/vander"

export default function CandidateListComp() {
    
    return (
        <>
            <div className="container">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">


                    {CandidateList.map((item, index) => (
                        <div className="group bg-white dark:bg-slate-900 relative overflow-hidden rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700 text-center p-6" key={index}>
                            <img src={item.image} className=" size-20 rounded-full shadow-sm shadow-gray-200 dark:shadow-gray-700 mx-auto" alt="" />

                            <div className="mt-2">
                                <Link to={`/candidate-profile/${item.id}`} className="hover:text-emerald-600 font-semibold text-lg">{item.name}</Link>
                                <p className="text-sm text-slate-400">{item.title}</p>
                            </div>

                            <ul className="mt-2 list-none space-x-0.5">
                                <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{item.deta1}</span></li>
                                <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{item.deta2}</span></li>
                                <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{item.deta3}</span></li>
                            </ul>

                            <div className="flex justify-between mt-2">
                                <div className="block">
                                    <span className="text-slate-400">{item.Salery}</span>
                                    <span className="block text-sm font-semibold">{item.price}</span>
                                </div>
                                <div className="block">
                                    <span className="text-slate-400">{item.Experience}</span>
                                    <span className="block text-sm font-semibold">{item.year}</span>
                                </div>
                            </div>

                            <div className="mt-3">
                                <Link to={`/candidate-profile/${item.id}`} className="py-[5px] px-4 text-sm inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">{item.Profile}</Link>
                                <Link to="#" className="size-8 inline-flex items-center text-center justify-center text-base font-semibold tracking-wide border align-middle transition duration-500 ease-in-out bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full ms-1"><TbBrandHipchat className="text-[20px]"/></Link>
                            </div>

                            <span className="w-24 text-white p-1 text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-3 bg-yellow-400 flex justify-center"><AiOutlineStar/></span>

                            <span className="absolute top-[10px] end-4">
                                <Link to="#" className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i className="mdi mdi-heart"></i></Link>
                            </span>
                        </div>
                    ))}





                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                        <MdKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">2</Link>
                                </li>
                                <li>
                                    <Link to="#" aria-current="page" className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-emerald-600 border border-emerald-600">3</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">4</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">5</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                        <MdKeyboardArrowRight className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}
