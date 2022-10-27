import { useState } from "react";

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
export const Faq = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="flex flex-col mb-16 sm:text-center">
                    <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span class="relative inline-block">

                                <span class="relative text-violet-600">Frequiently Asked Questions</span>
                            </span>{' '}

                        </h2>
                        <p class="text-base text-gray-700 md:text-lg">

                        </p>
                    </div>
                </div>
                <div class="space-y-4">
                    <Item title="Who We Are">
                        <p className="text-violet-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.</p>
                    </Item>
                    <Item title="The first mate and his Skipper too will do?">
                        <p className="text-violet-600">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </Item>
                    <Item title="Is the Space Pope reptilian!?">
                        <p className="text-violet-600">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </Item>
                    <Item title="How much money you got on you?">
                        <p className="text-violet-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.</p>
                    </Item>
                </div>
            </div>
        </div>
    );
};