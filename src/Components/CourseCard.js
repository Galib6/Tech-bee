import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCoursecard from './SingleCourseCard/SingleCoursecard';


const CourseCard = () => {

    const courses = useLoaderData()
    console.log(courses)

    return (
        <div>
            <div className=' grid md:grid-cols-3 gap-4 sm:grid-cols-1'>
                {
                    courses?.map(course => <SingleCoursecard
                        key={course?.id}
                        course={course}
                    ></SingleCoursecard>)
                }
            </div>
        </div>
    );
};

export default CourseCard;