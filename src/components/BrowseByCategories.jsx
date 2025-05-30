import React from 'react'
import { Link } from "react-router-dom";
import {MdOutlineArrowForward} from "../assets/icons/vander"

export default function BrowseByCategories() {
  const BrowseByCategories = [
    {
      title: 'Human Resource',
      deta: '90 Jobs Available',
      link: 'Explore Jobs'
    },
    {
      title: 'It & Networking',
      deta: '90 Jobs Available',
      link: 'Explore Jobs'
    },
    {
      title: 'Sales & Marketing',
      deta: '90 Jobs Available',
      link: 'Explore Jobs'
    },
    {
      title: 'Accounting',
      deta: '90 Jobs Available',
      link: 'Explore Jobs'
    },
    {
      title: 'Delivery Boy',
      deta: '90 Jobs Available',
      link: 'Explore Jobs'
    },
    {
      title: 'Data Science',
      deta: '90 Jobs Available',
      link: 'Explore Jobs'
    },
    {
      title: 'Project Manager',
      deta: '90 Jobs Available',
      link: 'Explore Jobs'
    },
    {
      title: 'Engineering',
      deta: '90 Jobs Available',
      link: 'Explore Jobs'
    },
    {
      title: 'Help Center',
      deta: '90 Jobs Available',
      link: 'Explore Jobs'
    },
    {
      title: 'Full Stack Developer',
      deta: '90 Jobs Available',
      link: 'Explore Jobs'
    }
  ];
  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
        <div className="lg:col-span-8 md:col-span-6 ltr:md:text-left rtl:md:text-right text-center">
          <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Browse by Categories</h3>
          <p className="text-slate-400 max-w-xl">Search your career opportunity with our categories</p>
        </div>
        <div className="lg:col-span-4 md:col-span-6 ltr:md:text-right rtl:md:text-left hidden md:block" >
          <Link to="#" className="inline-flex items-center font-semibold tracking-wide border align-middle transition text-base text-center relative border-none after:content-[''] after:absolute after:h-px after:w-0 after:end-0 after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:after:w-full hover:after:end-auto text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">All Categories <MdOutlineArrowForward className='ms-1'/></Link>
        </div>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]" >
        {BrowseByCategories.map((item, index) => (
          <div className="group p-4 rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800 hover:bg-emerald-600 dark:hover:bg-emerald-600 transition-all duration-500" key={index}>
            <h5 className="text-lg font-semibold group-hover:text-white">{item.title}</h5>
            <span className="block text-slate-400 group-hover:text-white/50 text-sm mt-1">{item.deta}</span>
            <div className="mt-2">
              <Link to="/job-grid-one" className="text-emerald-600 dark:text-white/80 group-hover:text-white font-medium items-center inline-flex">{item.link}<MdOutlineArrowForward className='ms-1'/></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


