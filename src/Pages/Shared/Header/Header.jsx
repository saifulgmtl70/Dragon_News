import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-4 mb-16'>
            <img src={logo} alt="" className='mx-auto mb-3'/>
            <p className='text-lg font-normal text-slate-500 mt-4'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-slate-600 font-medium mt-2'> {moment().format("dddd, MMMM D, YYYY")} </p>
        </div>
    );
};

export default Header;