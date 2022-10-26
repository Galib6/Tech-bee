import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { CgBee } from 'react-icons/cg';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="navbar bg-base-100 shadow bg-base-100 md:px-20 sm:px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost normal-case text-3xl"><CgBee /> Tech Bee</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/courses/all">Courses</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/Blog">Blog</Link></li>
                    <>
                        {
                            user?.uid ?
                                <>

                                </>
                                :
                                <>

                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/signup">Sign up</Link></li>
                                </>
                        }

                    </>
                </ul>
            </div>
            <div className="navbar-end">
                <label className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <img src={user.photoURL} alt="" />
                                    </>
                                    :
                                    <>
                                    </>
                            }

                        </>
                    </div>
                </label>
                <div className="dropdown dropdown-end ">

                    <>
                        {
                            user?.uid ?
                                <>
                                    <ul className="menu menu-horizontal p-0"><li> <span tabIndex={0}> {user?.displayName}</span></li></ul>
                                </>
                                :
                                <>
                                </>
                        }

                    </>


                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <>
                            {
                                user?.uid ?
                                    <>
                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </>
                                    :
                                    <>
                                    </>
                            }

                        </>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;