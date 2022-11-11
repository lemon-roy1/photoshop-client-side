import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ServiceCard from '../Services/ServiceCard';
import p1 from '../../../assets/images/work/p1.png';
import p2 from '../../../assets/images/work/p2.png';
import p3 from '../../../assets/images/work/p3.png';
import d from '../../../assets/images/work/d.jpg';
import { Helmet } from 'react-helmet';

const Home = () => {

    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://y-swart-three.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <div>
            <div className='text-center mb-4'>
                <h2 className="text-5xl py-5 font-semibold">My Service</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.slice(0,3).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
           <div className="text-center py-10">
           <Link to='/services'> <button className="btn btn-outline px-10"> SEE ALL </button>  </Link>
           </div>
           <div className="hero lg:h-96 ">
                <div className="hero-content lg:h-96 flex-col lg:flex-row">
                    <img src={d} alt="img" className=" h-80 rounded-lg shadow-2xl" />
                    <div className='lg:ml-10'>
                    <h1 className="text-5xl font-bold">today from your <br /> favorite Shopkeeper <br /> to your table</h1>
                    <p className="py-6">Find the perfect food, shopkeeper stock photo, image, vector, illustration or 360 image. Available for both RF and RM licensingFind the perfect food, shopkeeper stock photo, image, vector, illustration or 360 image. Available for both RF and RM licensing</p>
                    <button className="btn btn-outline btn-warning">ORDER NOW</button>
                    </div>
                </div>
             </div>
           
           <h1 className='text-center text-5xl font-bold py-10'>How It Works</h1>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-15 '>
                   
                    <div className="card  w-96  ">
                        <img src={p1} alt="" />
                      <div className="  text-3xl text-center ">Select Shopkeeper</div>
                      <p className='text-center'>Use your Uber account to order delivery from Shopkeepers in Washington D.C.. Browse the menu, view popular items, and track your order.</p>
                    </div>
                    <div className="card  w-96  ">
                        <img src={p2} alt="" />
                      <div className=" text-3xl   text-center">Select menu</div>
                      <p className='text-center'>People were selected at random to take the survey. The restaurant was recently selected as one of the best. She was selected to work on the project.</p>
                    </div>
                    <div className="card  w-96  ">
                        <img src={p3} alt=""/>
                      <div className=" text-3xl  text-center ">Wait for delivery</div>
                      <p className='text-center'>That could be because people can't or don't want to wait for a delivery van to show up, or they are in a hurry,t want to bother with a salesperson, .</p>
                    </div>
                </div>


           
        </div>
       
        

    );
};

export default Home;