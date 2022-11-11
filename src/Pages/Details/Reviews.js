import React from 'react';

const Reviews = ({review}) => {
    const {  customer, images, message, email } = review;
   
    return (
        <div>  
            <div className="card card-side bg-base-100 my-5 shadow-xl">
                <figure className=' mt-5 p-5'> 
                        <img className='w-24 h-24 rounded-full' src={images} alt="img"/></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{customer}</h2>
                    <h3 className=''>{email}</h3>
                    <p>{message}</p>
                </div>
                </div> 
        </div>
    );
};

export default Reviews;