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
                                Upskill your team
                                <br className="hidden md:block" />
                                with Unlimited access to 500+ Top{' '}
                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                                    <span className="relative inline-block text-violet-700">
                                        TechBee courses, anytime, anywhere
                                    </span>
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg text-violet-700">
                                Take one of TechBees range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. Youll learn how to build everything from games to sites to apps
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className=" border-l-4 border-violet-700 shadow-sm border-deep-purple-accent-400 text-violet-500">
                                <div className="h-full p-5  border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        Unlock the power of your people
                                    </h6>
                                    <p className="text-sm text-violet-600">
                                        TechBee Business is trusted by 12.5K+ companies around the world. Find out what we can do for yours.
                                    </p>
                                </div>
                            </div>
                            <div className="border-l-4 border-violet-500 ">
                                <div className="h-full p-5  border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5 text-violet-500">
                                        Learning that gets you
                                    </h6>
                                    <p className="text-sm text-violet-600">
                                        Skills for your present (and your future). Get started with us.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-violet-500 hover:bg-violet-700 focus:shadow-outline focus:outline-none"
                                >
                                    <Link to="/courses/all">Get Started</Link>
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
                            <img src="https://www.freeiconspng.com/thumbs/bee-icon/bee-icon-9.png" alt="" />
                        </div>
                    </a>
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase text-violet-600">
                            Thousands of institutions use Tech Bee
                        </p>
                        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-violet-500" >
                            Take the next step toward your personal and professional goals with Tech Bee.
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg text-violet-600">
                            Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePageBasicInfo;