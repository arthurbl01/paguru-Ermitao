import React, { useState, useEffect, use } from 'react';
import '../css/pay.css';
import firebase from 'firebase'
import '../firebase'

// COMPONENTS
import Navbar from '../components/navbar';
//import Cart from '../components/cart';

export default function Pay(){
    const [ name , setName ] = useState (localStorage.getItem('name'));
    const [ showCart, setShowCart ] =  useState ('none');
    const [ carrinho , setCarrinho ] = useState ([]);
    const [ valorTotal , setValorTotal ] = useState (0);




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
                          id: childItem.val().id,
                          
                      });
                      setValorTotal(parseFloat(carrinho.reduce((total, preco) => total + preco.valor, 0).toFixed(2)) );
                     
                  });
              });
          };
   
           getCar();

      
    
    }, []);
  
   
 
    return(
        <div className="container-pay">
            <Navbar setShow={setShowCart} show={showCart} hide='none'/>
           { /*  <Cart show={showCart}/> */}
            <div className="checkout">
                <div className="receipt">
                    <h4 className="title-receipt">Recibo</h4>


                    <div className="itens-receipt">
                    {
                            carrinho.map((item, index) => {
                                return(
                                        <div className="item-receipt">
                                            
                                            <img className="img-item-receipt" src={item.imagem} /> <span className="name-item-receipt">{item.nome}</span> <span className="qtd-item-receipt">{item.quantidade}x</span>
                                          
                                            
                                        </div>                   
                                );
                            })
                        }
                           
                           </div>

                   
                    <div className="date-values-receipt">
                        <span className="total-values-receipt">Total</span> 
                        <span className="value-receipt">PG$ {valorTotal}</span>
                    </div>
                </div>
                <div className="payment">
                    <h4 className="title-payment">Checkout de Pagamento</h4>
                    <h5 className="subtitle-payment">Cadastre o seu BeachCard</h5>
                    <div className="form-payment">
                        <div className="form-group-card-number">
                            <p htmlFor="card-number" className="txt-card-number">Número do BeachCard</p>
                            <input id="card-number" className="input-card-number" placeholder="0000 0000 0000 0000" />
                        </div>
                    </div>
                    <div className="form-payment">
                        <div className="form-group-card-vality">
                            <p htmlFor="card-vality" className="txt-card-vality">Data de Validade</p>
                            <input id="card-vality" className="input-card-vality"  placeholder="MM/AA"/>
                        </div>

                        <div className="form-group-details-card">
                            <p htmlFor="card-code" className="txt-card-code">Código de Segurança</p>
                            <input id="card-code" type="password" className="input-card-code" placeholder="***" />
                        </div>
                    </div>
                    <hr/>
                    <h4 className="title-endress-payment">Endereço de cobrança</h4>
                    <div className="form-group-endress-payment">
                        <div className="form-group-cep-payment">
                            <p htmlFor="input-cep" className="txt-cep-payment">CEP</p>
                            <input id="input-cep" className="input-cep-payment" placeholder="00000-000" />
                        </div>
                        <div className="form-group-number-residence">
                            <p htmlFor="input-number-residence" className="txt-number-residence">Nº</p>
                            <input id="input-number-residence" className="input-number-residence"  placeholder="00"/>
                        </div>
                        <div className="form-group-uf-residence">
                            <p htmlFor="input-uf-residence" className="txt-uf-residence">UF</p>
                            <input id="input-uf-residence" className="input-uf-residence" placeholder="Ceará"/>
                        </div>
                    </div>

                    <div className="btn-group-payment">
                    <button className="btn-payment">Efetuar pagamento</button> <button className="btn-cancelar-payment">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}