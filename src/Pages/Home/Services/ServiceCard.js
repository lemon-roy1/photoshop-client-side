import React from 'react';
import { Link } from 'react-router-dom';
//import { FaBeer } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import './ServiceCard.css';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 bg-color shadow-xl">
            <PhotoProvider>
            <PhotoView src={img}>
                <img src={img} alt="" />
            </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl font-semibold'>Price: ${price}</p>
                <div className="card-actions ">
                    <Link to={`/Details/${_id}`}>
                        <button className="card-btn flex">
                        <p>Lets go </p>  <HiOutlineArrowNarrowRight /> 
                        
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;