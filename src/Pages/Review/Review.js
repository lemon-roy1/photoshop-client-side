import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';
import './Review.css'
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';


const Review = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        if(!user?.email){
            return;
        }
        fetch(`https://y-swart-three.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('review-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this Review');
        if (proceed) {
            fetch(`https://y-swart-three.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('review-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Successfully toasted!');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>review</title>
            </Helmet>
            <h2 className="text-5xl">You have {reviews.length} Review</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Services</th>
                            <th >Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}

                            ></ReviewRow>)
                        }   
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;