import React, { useState } from 'react';

const Blogs = () => {
    const Item = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div className="border rounded shadow-sm">
                <button
                    type="button"
                    aria-label="Open item"
                    title="Open item"
                    className="flex items-center justify-between w-full p-4 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <p className="text-lg font-medium">{title}</p>
                    <div className="flex items-center justify-center w-8 h-8 border rounded-full">




                    </div>
                </button>
                {isOpen && (
                    <div className="p-4 pt-0">
                        <p className="text-gray-700">{children}</p>
                    </div>
                )}
            </div>
        );
    };
    return (
        <div>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div class="flex flex-col mb-16 sm:text-center">
                        <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                <span class="relative inline-block">
                                    <span class="relative text-violet-500">Personal Blog</span>
                                </span>{' '}

                            </h2>
                            <p class="text-base text-gray-700 md:text-lg text-violet-500">
                            </p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <Item title="The quick, brown fox jumps over a lazy dog?">
                            <p className='text-violet-500'> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS is an abbreviation for Cross-Origin Response Sharing. It is what allows the website on one URL to request data from a different URL, and it frustrates both the frontend and backend devs alike</p>
                        </Item>
                        <Item title="Why are you using firebase?other options we have to implement authentication?">
                            <p className='text-violet-500'> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                                The other options are MongoDB, Oracle Database, Amazon Redshift etc.</p>
                        </Item>
                        <Item title="How does the private route work?">
                            <p className='text-violet-600'>
                                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                            </p>
                        </Item>
                        <Item title="What is Node? How does Node work?">
                            <p className='text-violet-600'>
                                SNode is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                            </p>
                        </Item>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;