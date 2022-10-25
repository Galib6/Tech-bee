import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard';


const Courses = () => {

    const allCourse = useLoaderData()
    console.log(allCourse)
    return (
        <div >
            <div className='md:p-20 bg-base-200'>
                <div className='grid sm:grid-cols-1 gap-4 md:grid-cols-3'>
                    <div className='sidebar border border-green-300 rounded-lg'>
                        <ul className="menu bg-white w-200 rounded-lg ">
                            {
                                allCourse.map(course => <li><Link>{course.title}</Link></li>)
                            }
                        </ul>
                    </div>
                    <div className='grid col-span-2 gap-2'>
                        <div className=' ml-10 grid md:grid-cols-3 gap-4 sm:grid-cols-1'>
                            {
                                allCourse.map(course => <CourseCard
                                    key={course.id}
                                    course={course}
                                ></CourseCard>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;