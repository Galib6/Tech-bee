import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUP = () => {
    const { signInwithGoolge } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInwithGoolge(provider)
            .then(res => {
                const user = res.user;
                console.log(res.user)
            })
            .catch(err => {
                console.error(err)
            })
    }




    return (
        <div >
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input name="Photo Url" type="text" placeholder="Your Photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link href="#" to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className='flex justify-center'>
                            <button onClick={handleGoogleSignIn} className=" mb-5 mr-5 btn btn-outline btn-ghost">Google</button>
                            <button className=" mb-10 btn btn-outline btn-ghost">Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;