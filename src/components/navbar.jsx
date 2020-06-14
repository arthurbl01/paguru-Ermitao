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
        localStorage.setItem('name', 'visitante');
    
        window.location.reload()
    }

    if(name === 'visitante') {
        return(
             <Redirect to="/" />)
      }
      else { 
        return(
            <div className="container-navbar">
            <div className="navbar">
                <div className="group-navbar-left">
                    <span className="item-navbar-text-left logo">Ermitão</span>
                    <span className="item-navbar-text-left name-usuario"> Olá, {localStorage.getItem('name')}</span>
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