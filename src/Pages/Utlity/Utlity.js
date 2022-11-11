
const Utiliti = (user) => {


    const currentUser = {
        email: user.email
    }
    //  jwt token
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
           
            localStorage.setItem('review-token', data.token);
            
        });
    
};

export default Utiliti;