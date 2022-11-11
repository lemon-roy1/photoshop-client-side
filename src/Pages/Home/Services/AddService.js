import React from 'react';

const AddService = () => {
    const handlePlaceServices = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const title = `${form.title.value}`;
        const img = `${form.img.value}`;
        const price = `${form.price.value}`;
        const description = form.description.value;
        const service = {
            title,
            img,
            price,
            description,
            name
        }
        fetch('http://localhost:5000/services',{
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
                if(data.acknowledged){
                    alert('Review placed successfully')
                    form.reset();
                    
                }
        })
        .catch(er => console.error(er));


    }
    return (
        <div>
         <form className='flex justify-center mt-10' onSubmit={handlePlaceServices} >
         <div className='grid grid-cols-1 gap-4 w-1/2'>
         <h3 className='text-2xl font-bold'>Add Services</h3>
         <div className='grid grid-cols-2 gap-4'>
         <input type="text" name='name' placeholder="Enter your name" className="input w-full input-bordered max-w-xs" />
          
          <input name='title' type="text" placeholder="Service name" className="input input-bordered w-full max-w-xs" />
          <input type="text" name='img' placeholder="Services photo URL" className="input input-bordered w-full max-w-xs" />
        
       <input type="text" name='price' placeholder="Price" className="input w-full input-bordered max-w-xs" />
         </div>
         <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="description" required></textarea>
         <input className='btn btn-outline my-5 px-5 w-20' type="submit" value="submit" />
         </div>  
         </form>
        </div>
    );
};

export default AddService;