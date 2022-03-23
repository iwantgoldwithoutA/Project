import './Button.css';
import { Link } from 'react-router-dom';

function ButtonLogin() {
    return (
        <Link to='/login'>
            <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet"/>
            <button className='login-btnn'>
                Log in
            </button>
        </Link>
    )
}

export default ButtonLogin;