


import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Utiliti from '../../Utlity/Utlity';





const Socal = () => {
    const {signInGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';

    const handelGoogleSignIn = ()=>{
        signInGoogle()
        .then(result =>{
            const user = result.user;
            navigate(from, { replace: true });
            Utiliti(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <p className="text-center">Social Login</p>
            <p className="text-center">
                <button onClick={handelGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>

        </div>
    );
};

export default Socal;









