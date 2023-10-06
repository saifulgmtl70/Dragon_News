import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import {  AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(null);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })

    }


    return (
        <section className="">
            <Navbar></Navbar>

            <div className="mx-auto max-w-screen-xl px-4 py-5 bg-gray-50  sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg py-12 h-auto">

                    <form onSubmit={handleRegister} action="" className="mb-0 bg-slate-100 space-y-7  py-12 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
                        <p className="text-center text-3xl mb-2 font-medium">Register your account</p>
                        <div className="flex flex-col w-full">
                            
                            <div className="divider"></div> 

                        </div>


                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>

                            <div className="relative">
                                <input type="text" name="username" className="w-full rounded-lg bg-slate-200 px-4 py-5 pe-12 text-lg shadow-sm" placeholder="Enter your name" required/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="photurl" className="sr-only">Photo URL</label>

                            <div className="relative">
                                <input type="text" name="photourl" className="w-full rounded-lg bg-slate-200 px-4 py-5 pe-12 text-lg shadow-sm" placeholder="Enter your photo url" required/>

                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input type="email" name="email" className="w-full rounded-lg bg-slate-200 px-4 py-5 pe-12 text-lg shadow-sm" placeholder="Enter your email" required/>


                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative ">
                                <input type={showPass ? "text" : "password"} name="password" className="w-full rounded-lg mb-4 bg-slate-200  border-gray-200 px-4 py-5 pe-12 text-lg shadow-sm" placeholder="Enter your password" required/>

                                <span onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer inset-y-0 -mt-3 end-0 grid place-content-center px-4">
                                
                                {
                                    showPass ? <AiTwotoneEyeInvisible></AiTwotoneEyeInvisible> : <AiOutlineEye></AiOutlineEye>
                                }

                                </span>
                            </div>
                        </div>

                        <button  type="submit" className="block w-full  rounded-lg bg-rose-600 px-5 py-4 text-sm font-medium  text-white">Register</button>

                        <p className="text-center text-sm text-gray-500"> Already have an account ? <Link to="/login" className="text-rose-500 font-medium" href="">Login</Link></p>
                    </form>
                </div>
            </div>
            
        </section>
    );
};

export default Register;