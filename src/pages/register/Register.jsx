import { Link } from 'react-router-dom';
import './register.css';

export default function Register(){
    return(
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label >Username</label>
                <input type="email" className='registerInput' placeholder='Enter your Username' />
                <label >Email</label>
                <input type="email" className='registerInput' placeholder='Enter your Email...' />
                <label >Password</label>
                <input type="password" className='registerInput' placeholder='####' />
                <button className="registerBtn1">
                <Link className='link' to='/register' >
                  REGISTER
                </Link>
                </button>
            </form>
            <button className="loginBtn1">
            <Link className='link' to="/login" >
               LOGIN
            </Link>
            </button>
        </div>
    )
}