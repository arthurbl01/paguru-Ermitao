import React, { useState, useEffect, useMemo } from 'react';
import firebase from 'firebase'
import '../firebase'
import AOS from 'aos';

export default function Produtos(props){
    const [ name , setName ] = useState (localStorage.getItem('name'));
    const [produto, setProduto ] =  useState (props.id);    
    const [produtos, setProdutos ] =  useState ([]); 

    async function fetchData() {
        try {
            const response = await fetch(
                'https://paguru-challenge-api.herokuapp.com/products'
            );
            const json = await response.json();
            setProdutos(json);
        } catch (e) {
            console.error(e);
        }
    };

    async  function handleAddToCart() {
            await firebase.database().ref('usuarios').child(name).child('carrinho').child(produto).child('quantidade').set(1);
            await firebase.database().ref('usuarios').child(name).child('carrinho').child(produto).child('imagem').set(props.image)
            await firebase.database().ref('usuarios').child(name).child('carrinho').child(produto).child('nome').set(props.name)
            await firebase.database().ref('usuarios').child(name).child('carrinho').child(produto).child('valor').set(props.price)
            await firebase.database().ref('usuarios').child(name).child('carrinho').child(produto).child('id').set(props.id)
            document.location.reload(true)
    }


    AOS.init();
    return( 
            <div className="item-catalogue" data-aos="fade-up">
                <img className="img-product" src={props.image} />
                <div className="product-data">
                    <h4 className="name-product"> {props.name} </h4>
                    <h4 className="price-product">PG$ {props.price}</h4>
                </div>
                <button className="btn-add-to-cart" onClick={handleAddToCart}>Add carrinho</button>
            </div>
    );
}