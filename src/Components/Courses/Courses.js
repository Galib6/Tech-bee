import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';


const Courses = () => {

    const allCategory = useLoaderData()
    console.log(allCategory)
    return (
        <div >
            <div className='md:p-20 bg-base-200'>
                <div className='grid sm:grid-cols-1 gap-4 md:grid-cols-3'>
                    <div className='sidebar '>
                        <h1 className='text-center text-3xl mb-10'>All Category</h1>
                        <ul className="menu w-200 rounded-lg  shadow-xl">
                            {
                                allCategory.map(category => <li
                                    key={category.name}
                                ><Link to={category.id}
                                >{category.name}</Link></li>)
                            }
                        </ul>
                    </div>
                    <div className='grid col-span-2 gap-2'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;