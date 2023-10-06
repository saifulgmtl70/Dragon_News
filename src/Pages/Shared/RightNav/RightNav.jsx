
import {FaGoogle,  FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './RightNav.css';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightNav = () => {
    return (
        <div className='p-4'>
            <h2 className="text-2xl font-medium">Login With</h2>
            <div className='mt-4 mb-5'>
                <button className="border border-sky-700 rounded-md text-sky-700 font-medium w-full justify-center flex items-center gap-2 space-y-5 bg-transparent hover:bg-sky-700 hover:text-white transition-transform py-2 mb-2">
                    <FaGoogle></FaGoogle>
                    Login  With Google
                </button>

                <button className="border border-black rounded-md text-slate-900 font-medium w-full justify-center flex items-center gap-2 space-y-5 bg-transparent hover:bg-slate-800 hover:text-white py-2 mb-2">
                    <FaGithub></FaGithub>
                    Login  With Github
                </button>
            </div>


            <div className='mt-4 mb-5 border rounded-md py-3'>
                <ul >
                    <li className="border-b px-5 p-3 flex gap-2 items-center"> <a href="">
                        <FaFacebookF className='text-blue-700'></FaFacebookF></a> 
                        <span>Facebook</span>
                    </li>
                    <li className="border-b px-5 p-4 flex gap-2 items-center"> <a href="">
                        <FaTwitter className='text-blue-500'></FaTwitter></a> 
                        <span>Twitter</span>
                    </li>
                    <li className="px-5 p-3 flex gap-2 items-center"> <a href="">
                        <FaInstagram className='text-rose-600'></FaInstagram></a> 
                        <span>Instagram</span>
                    </li>

                </ul>
            </div>

            <div className='mt-4 mb-5 border rounded-md py-3 bg-slate-100'>
                <h2 className='text-2xl font-medium px-5 py-2 mb-6'>Q-Zone</h2>
                <div>
                    <img src={qZone1} alt="" className='mb-10 mx-auto w-full lg:w-10/12'/>
                    <img src={qZone2} alt="" className='mb-10 mx-auto w-full lg:w-10/12' />
                    <img src={qZone3} alt="" className='mb-10 mx-auto w-full lg:w-10/12' />
                </div>
            </div>

            <div className='mt-4 mb-5 border text-center flex flex-col justify-center items-center rounded-md py-3 bg-slate-100 background'>
                <h2 className='text-white text-3xl font-medium  mb-4 leading-snug'>Create an Amazing Newspaper</h2>
                <p className='px-4 text-slate-300 text-sm mt-5 mb-6'>Discover thousands of options, easy to customize layouts, oneclick to import demoand much more.</p>
                <button className='bg-rose-500 hover:bg-rose-600 px-7 py-4 rounded-md text-white'>Learn more</button>
            </div>


        </div>
    );
};

export default RightNav;