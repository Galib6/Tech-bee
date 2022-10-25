import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div>
            <div className="h-full card w-50 bg-base-100 shadow-xl">
                <figure><img src={course.image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{course.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Get Access</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;