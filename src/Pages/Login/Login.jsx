import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import {  AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {LogIn} = useContext(AuthContext);
    const [showPass, setShowPass] = useState(null);

    const handleLogin = (e) =>{
        e.preventDefault();

        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log( email, password);

        LogIn(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <section className="">
            <Navbar></Navbar>


            <div className="mx-auto max-w-screen-xl px-4 py-5 bg-gray-50  sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg py-12 h-auto">

                    <form onSubmit={handleLogin} action="" className="mb-0 bg-slate-100 space-y-7  py-12 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8">
                        <p className="text-center text-3xl mb-2 font-medium">Login your account</p>
                        <div className="flex flex-col w-full">
                            
                            <div className="divider"></div> 

                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input type="email" name="email" className="w-full rounded-lg bg-slate-200 px-4 py-5 pe-12 text-lg shadow-sm" placeholder="Enter email" required/>

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                                </span>
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative ">
                                <input type={showPass ? "text" : "password"} name="password" className="w-full rounded-lg mb-4 bg-slate-200  border-gray-200 px-4 py-5 pe-12 text-lg shadow-sm" placeholder="Enter password" required/>

                                <span onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer inset-y-0 -mt-3 end-0 grid place-content-center px-4">
                                
                                {
                                    showPass ? <AiTwotoneEyeInvisible></AiTwotoneEyeInvisible> : <AiOutlineEye></AiOutlineEye>
                                }

                                </span>
                            </div>
                        </div>

                        <button  type="submit" className="block w-full  rounded-lg bg-rose-600 px-5 py-4 text-sm font-medium  text-white">Login </button>

                        <p className="text-center text-sm text-gray-500"> Dont’t Have An Account ? <Link to="/register" className="text-rose-500 font-medium" href="">Register</Link></p>
                    </form>
                </div>
            </div>
            
        </section>
    );
};

export default Login;