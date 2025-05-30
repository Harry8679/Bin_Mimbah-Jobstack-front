import React from 'react'
import CountUp from 'react-countup';

export default function JobCounter() {
    return (

        <div className="container">
            <div className="relative grid md:grid-cols-3 grid-cols-1 items-center gap-[30px] z-1">
                <div className="counter-box text-center">
                    <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
                        <CountUp
                            start={1010}
                            end={1548}
                            duration={3} />K+</h1>
                    <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Job Fulfillment</h5>
                </div>

                <div className="counter-box text-center">
                    <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
                        <CountUp
                            start={2}
                            end={25}
                            duration={4} />
                        +</h1>
                    <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Branches</h5>
                </div>

                <div className="counter-box text-center">
                    <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
                        <CountUp
                            start={0}
                            end={9}
                            duration={4} />
                        +</h1>
                    <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Years Experience</h5>
                </div>
            </div>
        </div>


    )
}
