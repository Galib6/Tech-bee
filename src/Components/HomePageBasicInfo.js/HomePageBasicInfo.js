import React from 'react';
import { Link } from 'react-router-dom';

const HomePageBasicInfo = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-sm mb-5" >
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-violet-700">
                                The quick, brown fox
                                <br className="hidden md:block" />
                                jumps over{' '}
                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                                    <span className="relative inline-block text-violet-700">
                                        a lazy dog
                                    </span>
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg text-violet-700">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className=" border-l-4 border-violet-700 shadow-sm border-deep-purple-accent-400 text-violet-500">
                                <div className="h-full p-5  border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        I'll be sure to note that in my log
                                    </h6>
                                    <p className="text-sm text-violet-600">
                                        Lookout flogging bilge rat main sheet bilge water nipper fluke
                                        to go on account heave down.
                                    </p>
                                </div>
                            </div>
                            <div className="border-l-4 border-violet-500 ">
                                <div className="h-full p-5  border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5 text-violet-500">
                                        A business big enough that it could be listed
                                    </h6>
                                    <p className="text-sm text-violet-600">
                                        Those options are already baked in with this model shoot me an
                                        email clear.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-violet-500 hover:bg-violet-700 focus:shadow-outline focus:outline-none"
                                >
                                    <Link to="/login">Get Started</Link>
                                </button>
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-d hover:text-deep-purple-800"
                                >
                                    Learn More
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://learnenglish.britishcouncil.org/sites/podcasts/files/2021-09/GettyImages-1072206958_2.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
                    <a href="/" className="mb-4 mr-8">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase text-violet-600">
                            New History
                        </p>
                        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-violet-500" >
                            Cheese on toast tale
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg text-violet-600">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePageBasicInfo;