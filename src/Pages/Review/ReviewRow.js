import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete}) => {
    const { _id, serviceName,  service,  message, } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`https://y-swart-three.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])


    return (
        <tr>
           
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div  className="w-24 h-24">
                        { reviewService?.img && 
                        <img src={reviewService.img} alt="img" />}
                        </div>
                    </div>
                </div>
            </td>
            <td><div className="font-bold"> {serviceName}</div></td>
            <td className='bg-slate-600 '>
                <div className='table-data '>{message}</div>
            </td>
            <th className='flex justify-end'>
               <Link to={`/update/${review._id}`}>
               <button className='btn btn-outline btn-success mr-2'>Update</button>
               </Link>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-error'>Delete </button>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                        />
                </label>

            </th>
           
        </tr>
    );
};

export default ReviewRow;