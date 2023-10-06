import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import userimg from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>

            <li><NavLink to="/" className="bg-transparent text-lg">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:bg-transparent text-lg">About</NavLink></li>
            <li><NavLink to="/career" className="hover:bg-transparent text-lg">Career</NavLink></li>
    
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn bg-transparent hover:bg-transparent border-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-4 shadow-2xl bg-base-100 rounded-md w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>



            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-7 px-1">
                    {navLinks}
                </ul>
            </div>


            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src={userimg} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
               
                {
                    user ?
                        <button onClick={handleSignOut} className="btn bg-rose-500 hover:bg-rose-600 text-white">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="btn bg-rose-500 hover:bg-rose-600 text-white">Login</button>
                        </Link>
                }
                
            </div>


        </div>
    );
};

export default Navbar;