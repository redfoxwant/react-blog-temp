import { Link } from 'react-router-dom';
import './login.css';

export default function Login(){
    return(
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label >Email</label>
                <input type="email" className='loginInput' placeholder='Enter your Email....' />
                <label >Password</label>
                <input type="password" className='loginInput' placeholder='****' />
                <button className="loginBtn">
                <Link className='link' to="/login" >
                  LOGIN
                </Link>
                </button>
            </form>
            <button className="registerBtn">
                <Link className='link' to='/register' >
                  REGISTER
                </Link></button>
        </div>
    )
}