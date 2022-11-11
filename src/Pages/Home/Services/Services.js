import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://service-review-server-indol.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>services</title>
            </Helmet>
            <div className='text-center mb-4'>
                <h2 className="text-5xl py-5 font-semibold">Our Service</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;