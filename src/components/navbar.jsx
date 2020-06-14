import React, { useState } from 'react';
import { Redirect } from 'react-router'

export default function Navbar(props){
  
const [name, setName ] = useState (localStorage.getItem('name'));

    const addToCart = () => {
        if(props.show === 'flex'){
            props.setShow('none');
        } else{
            props.setShow('flex')
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('name');
    
        window.location.reload()
    }

    if(name === null) {
        return(
             <Redirect to="/" />)
      }
      else { 
        return(
            <div className="container-navbar">
            <div className="navbar">
                <div className="group-navbar-left">
                    <span className="item-navbar-left"><i className="fas fa-warehouse fa-2x"></i></span>
                    <span className="item-navbar-text-left"> Olá, {localStorage.getItem('name')}</span>
                </div>
                <div className="group-navbar-right">
                    <button className="item-navbar-right" onClick={addToCart}><i className="fas fa-shopping-cart fa-1x"></i></button>
                    <button className="item-navbar-right" onClick={handleLogout}><i className="fas fa-sign-out-alt fa-1x"></i></button>
                </div>
            </div>
       </div>
        );       

      }

        
 


        

}