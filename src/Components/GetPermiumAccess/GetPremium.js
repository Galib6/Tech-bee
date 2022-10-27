import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const GetPremium = () => {

    const details = useLoaderData()
    console.log(details)
    return (
        <div ref={ref} style={{ width: 900, height: 500 }}>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
                    Tech Bee
                </p>
                <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                    <div className="mb-4">
                        <p className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black text-pink-600" >Congratulations!!!</p>
                        <h1 className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black text-pink-600" >You Got Premium Access for</h1>
                        <a
                            href="/"
                            aria-label="Article"
                            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-pink-600 "
                        >

                            {details?.title}
                        </a>
                    </div>
                    <p>Your name:</p>
                    <input type="text" placeholder="Your Name" className="input input-bordered input-secondary w-full max-w-xs my-10" />
                    <p className="text-base text-gray-700 md:text-lg">
                        Thank you! Please start leaning form YOU COURSES section
                    </p>
                </div>
                <Pdf targetRef={ref} filename="code-example.pdf" className="flex">
                    {({ toPdf }) => <button className="btn btn-sm" onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>
        </div>
    );
};

export default GetPremium;