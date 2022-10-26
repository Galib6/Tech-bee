import React from 'react';
import { Link } from 'react-router-dom';

const SingleCoursecard = ({ course }) => {
    const { image_url, title, rating, created_by, id } = course
    console.log(image_url)
    return (
        <div>
            <div className="h-full card w-50 bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Created by:{created_by}</p>
                    <div>
                        <h1>Rating:</h1>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"> <Link to={id}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCoursecard;