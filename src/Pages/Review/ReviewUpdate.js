import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewUpdate = () => {
    const reviewUser = useLoaderData();
    const [user, setUser] =useState(reviewUser);

    const inputeUpdate =event =>{
        event.preventDefault();
       // console.log(user);
       fetch(`http://localhost:5000/reviews/${reviewUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
       })
    }





    const inpureChange = event =>{
         const  field = event.target.name;
         const value = event.target.value;
         const newUser = {...user}
         newUser[field] =value;
         setUser(newUser);


    }
    return (
        <div>
            <h1 className="tect-5xl font-bold">Update page </h1>
            <form className='flex justify-center mt-10' onSubmit={inputeUpdate} >
            <div className='grid grid-cols-1 gap-4 w-1/2'>
            <div className='grid grid-cols-2 gap-4'>
            <input  onChange ={inpureChange} type="text" className="input w-full input-bordered max-w-xs" placeholder='name' name='customer' defaultValue={reviewUser.customer} /> 
            <input onChange ={inpureChange} defaultValue={reviewUser.email} type="email" className="input w-full input-bordered max-w-xs" name='email'  placeholder=''/> 
            </div>
            <input onChange ={inpureChange} defaultValue={reviewUser.images} type="text" className="input input-ghost w-full  input-bordered"  name='images'  placeholder='img'/> <br />
            <textarea onChange={inpureChange} defaultValue={reviewUser.message} name="message" className="textarea textarea-bordered h-24 w-full" cols="30" rows="10"></textarea>
            <input className='btn btn-outline my-5 px-5 w-20' type="submit" value="Update" />
                 </div>
                

            </form>
        </div>
    );
};

export default ReviewUpdate;