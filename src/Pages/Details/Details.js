import React, { useContext, useEffect} from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import {useNavigate} from "react-router-dom"
import Reviews from './Reviews';
import {useParams} from "react-router-dom"

const Details = () => {
    const { _id, title, price,description, img} = useLoaderData();
    const { user} = useContext(AuthContext);
//    console.log(user)
   const navigate =useNavigate()

    const [showDet,setShowDet]=useState(false)
    const params= useParams()
 

    const sets = (id)=>{
        
        if(user){
            setShowDet(id)
        }else{
            navigate("/login")
        }
    }

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.Name.value}`;
        const images = `${form.images.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            images,
            message
        }


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('review-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.acknowledged){
                    alert('Review placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

    }

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setReviews(data.filter((item)=> item.service === params.id));
            })
    }, [params])

 

    return (
        <div>
            <h2 className="text-4xl">services : {title}</h2>
                <img src={img} alt="" />
                {showDet ? <p>{description}</p> : <p>{description.slice(0,100)}</p>}
                <h4 className="text-3xl">Price: {price}</h4>
              
                {!showDet && <button onClick={()=>sets(true)} className=' btn btn-outline'>Details</button>}
            { showDet && <form className='flex justify-center mt-10' onSubmit={handlePlaceReview}>

                        <div className='grid grid-cols-1 gap-4 w-1/2'>
                            <h3 className='text-2xl font-bold'>Add Review</h3>
                            <div className='grid grid-cols-2 gap-4'>
                            <input name="Name" type="text" placeholder="Name" className="input input-ghost w-full  input-bordered" />
                            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                            </div>
                            <input name="images" type="text" placeholder="img URL" className="input input-ghost w-full  input-bordered" />
                            <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                            <input className='btn btn-outline my-5 px-5 w-20' type="submit" value="submit" />
                        </div>
                       

               
            </form>}
            { showDet && <>
                <h2 className="text-3xl"> {reviews.length} Review</h2>

                       {
                            reviews.map(review => <Reviews
                                key={review._id}
                                review={review}
                            ></Reviews>)
                        }  
                         
            
            </>}
            
        </div>
    );
};

export default Details;