import React, {useState} from 'react';
import '../css/login.css';
import { Redirect } from 'react-router'
import firebase from 'firebase';
import '../firebase';

function Index(){
const [name, setName ] = useState ('');
const [verify, setVerify ] = useState (false);
const [alert, setAlert ] = useState ('');

const inputVerify = (e) => {
    setName(e.target.value);
    setTimeout(() => {
        setAlert('')
    }, 4000);
}

const handleLogin = () => {

    if (name.length == '') {
        setAlert('Digíte seu nome.')
    } else{
        if (name.length >= 3){
            localStorage.setItem('name', name);
            firebase.database().ref('usuarios').child(name).child('nome').set(localStorage.getItem('name'));

            setVerify(true);
        } else{
            setAlert('Seu nome precisa conter no minimo 3 caracteres.')
            
        }
    }

}
if(verify) {
    return <Redirect to="/home/" />
  }
  else { 
    return(
        <div className="login-container">
            <div className="container">
                <div className="login">
                    <h1 className="title-login">
                        Olá Ermitão, seja <br/> bem-vindo a nossa loja
                    </h1>
                    <h4 className="sub-title-login">
                        Faça o login para ter acesso <br/> a loja de conchas
                    </h4>
                    
                    <div className="form-login">
                        <label htmlFor="name" className="label-form" >Seu nome</label><br/>
                        <input id="name" className="input-form" onChange={inputVerify}/> <br/>
                        <button className="btn-form-login" onClick={handleLogin}>ACESSAR LOJA</button>
                    </div>
                    <h4 className="msg-error">{alert}</h4>

                </div>
            </div>
        </div>
        
    );
  }

}

export default Index;