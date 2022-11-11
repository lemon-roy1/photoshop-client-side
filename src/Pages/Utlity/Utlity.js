
const Utiliti = (user) => {


    const currentUser = {
        email: user.email
    }
    // get jwt token
    fetch('https://service-review-server-indol.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem('review-token', data.token);
            
        });
    
};

export default Utiliti;