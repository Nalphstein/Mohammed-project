import { METHODS } from 'http';
import React, { useState, useEffect } from 'react'

export default Chucknorris = () => {

   

    const [loading, setLoading] = useState(false)


    // async componentDidMount() {
    //     const url = "https://api.chucknorris.io/jokes/random";
    //     const response = await fetch(url);
    //     const data = await response.text();
    //     this.setState({jokes: data.result})
         
    // }
    
    return (
        <div>
           {loading ? <div>loading...</div> : <div>jokes...</div>} 
        </div>
    )
}

