import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();



const Coursedetails = () => {
    const details1 = useLoaderData()
    // console.log(details)
    const { details, image_url, rating, created_by, title, id } = details1
    return (
        <div className='ml-20 ' ref={ref} >
            <div className="card bg-base-100 shadow-xl w-10/12">
                <Pdf targetRef={ref} filename="code-example.pdf" className="flex">
                    {({ toPdf }) => <button className="btn btn-sm" onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <figure><img src={image_url} alt="courses" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="badge badge-secondary">{title}</div>
                    </h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-active btn-sm btn-accent"> <Link to={id}>Get Premium Access</Link> </button>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="badge badge-outline">Created By: {created_by}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coursedetails;