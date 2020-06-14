import React, { useState } from 'react';
import '../css/pay.css';


// COMPONENTS
import Navbar from '../components/navbar';
//import Cart from '../components/cart';

export default function Pay(){
    const [ showCart, setShowCart ] =  useState ('none');
    
    return(
        <div className="container-pay">
            <Navbar setShow={setShowCart} show={showCart}/>
           { /*  <Cart show={showCart}/> */}
            <div className="checkout">
                <div className="receipt">
                    <h4 className="title-receipt">Recibo</h4>
                    <div className="itens-receipt">
                        <div className="item-receipt">
                            <img className="img-item-receipt" src="https://res.cloudinary.com/jaelsondev/image/upload/v1591948967/uploads/new-classic_unthwu.png"/> <span className="name-item-receipt">Concha Tie-Dye</span> <span className="qtd-item-receipt">1x</span>
                        </div>
                        <hr/>
                    </div>
                   
                    <div className="date-values-receipt">
                        <span className="total-values-receipt">Total</span> 
                        <span className="value-receipt">PG$ 79.94</span>
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
                            <input id="card-vality" className="input-card-vality" placeholder="MM/AA" />
                        </div>

                        <div className="form-group-details-card">
                            <p htmlFor="card-code" className="txt-card-code">Código de Segurança</p>
                            <input id="card-code" className="input-card-code" placeholder="***" />
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
                            <input id="input-number-residence" className="input-number-residence" placeholder="00" />
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