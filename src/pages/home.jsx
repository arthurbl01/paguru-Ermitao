import React, { useState, useEffect } from 'react';
import '../css/reset.css';
import '../css/home.css';
import firebase from 'firebase'
import '../firebase'

// Components
import Produtos from '../components/produtos';
import Header from '../components/header';
import Navbar from '../components/navbar';


export default function Home() {
    const [ showCart, setShowCart ] =  useState ('none'); 
    const [ produtos, setProdutos ] =  useState ([]);
    const [ carrinho , setCarrinho ] = useState ([]);
    const [ name , setName ] = useState (localStorage.getItem('name'));
    const [ valorTotal , setValorTotal ] = useState (0);
    const [verify, setVerify ] = useState (false);

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

    useEffect(() => {

     });


      useEffect(() => {
        async function getCar() {
 
            await   firebase.database().ref('usuarios').child(name).child('carrinho').on('value',  (snapshot) => {
               
                  snapshot.forEach( (childItem) => {
                      carrinho.push({
                          key: childItem.key,
                          nome: childItem.val().nome,
                          imagem: childItem.val().imagem,
                          valor: childItem.val().valor,
                          quantidade: childItem.val().quantidade,
                          id: childItem.val().id
                      });
                  });
              });
              console.log(carrinho)
          };
   
           getCar();

        fetchData();
    }, []);

    const handlePay = () => {
        setVerify(true);
     }

    return(
        <div className="container-home">
            <Navbar setShow={setShowCart} show={showCart}/>


            <div className="container-cart" style={{display: showCart}}>
                <div className="cart">
                    <div className="title-cart">
                        Carrinho de compras
                    </div>
                    <div className="descripction-product">
                        <span className="itens-description-product">Itens</span> <span className="qtd-description-product"> Qtd.</span>
                    </div>
                    <div className="itens-cart">
                    {
                        carrinho.map((item) => {
                            return(
                                <div className="item-cart" key={item.key}>
                    
                                    <div className="data-item-cart">
                                        <img className="img-item-cart" src={item.imagem} />
                        
                                        <div className="qtd-item-cart">
                                            <button>-</button> 
                                            <span>{item.quantidade}</span> 
                                            <button>+</button> 
                                            <button className="btn-trash-cart">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                            
                                <div className="id-item-cart">
                                    <span className="name-item-cart">{item.nome}</span> 
                                    <span className="price-item-cart">PG$ {item.valor}</span>
                                </div>
                            <hr/>
                            </div>
                            );
                        })
                    }

                    </div>
                    <div className="total-cart">
                        <span className="title-total">Total</span> 
                        <span className="value-total">PG$ {valorTotal}</span>
                    </div>
                    <div className="container-btn-buy-cart">
                        <button className="btn-finish-buy" onClick={handlePay}>Finalizar Compra</button>
                    </div>
                </div>
            </div>

           <div className="catalogue">
                    <Header title="Catálogo de Conchas" />

                    <div className="itens-catalogue">

                        {produtos.map((item, index) => {
                            return(
                                <Produtos name={item.name} price={item.price} image={item.image_url} id={item.id} key={index} />
                            );
                        })}


                    </div>
               </div>

        </div>
    );
}