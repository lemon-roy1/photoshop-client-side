import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Socal from '../Shared/Socal/Socal';


const Login = () => {
    const {login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;


            const currentUser = {
                email: user.email
            }

            console.log(currentUser);

            // get jwt token
            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    navigate(from, { replace: true });
                    console.log(data);
                    // local storage is the easiest but not the best place to store jwt token
                    localStorage.setItem('review-token', data.token);
                });
            
        })
        .catch(error => console.log(error));
}
    return (
        <div className='flex justify-center'>
        <div className=" sm:w-1/2  my-20">
                <div className=" md:grid-cols-1 card shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Account <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                   <Socal />
                </div>
        </div>
        </div>
    );
};

export default Login;





