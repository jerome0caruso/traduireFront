import React, { useState } from 'react'
import { Navigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Logout = (props) => {
    
    const logout = async() => {
        props.setLoggedIn(false)
        await fetch('https://traduireapi.herokuapp.com/logout', {
            method: 'GET',
        }).then(res =>  res.json())
          .then(data => {
            console.log(data)
            localStorage.setItem('isLoggedIn', JSON.stringify(false));
            localStorage.setItem('user', JSON.stringify({}));
         }).catch(err => console.log(err))
         window.location.reload(false);
    } 
    

    return (
            <div>
                <button type="submit" onClick={logout} className='btn btn-primary'>Logout</button>
            </div>
    )
}
export default Logout;