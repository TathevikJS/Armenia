import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Auth.css'

const Auth = () => {
    return (
        <div className='Auth'>
            <div className="text">
                <svg viewBox="0 0 300 50">
                    <text x="35" y="15" fontSize="7px" fill="white" fontFamily="Poppins, sans-serif">You can sign in for your account here. It's absolutely free! </text>
                    <text x="35" y="25" fontSize="7px" fill="white" fontFamily="Poppins, sans-serif">You will be able to upload photos, create posts and </text>
                    <text x="35" y="35" fontSize="7px" fill="white" fontFamily="Poppins, sans-serif"> see other people's posts!</text>
                </svg>
            </div>

            <Link to='/SignIn' className="btn">
                <Button variant="outlined" color="primary">Sign In</Button>
            </Link>

        </div>
    );

}

export default Auth;