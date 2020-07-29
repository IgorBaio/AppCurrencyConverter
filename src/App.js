import React from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from './components/Conversor'
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">

      {/* <Menu></Menu> */}
      
      <h1>Conversor de moedas</h1>
      <div className="linha">
        <Conversor moedaA ="USDT" moedaB="BRL" nomeMoeda="Dólar Turismo"></Conversor>

      </div>
      <Conversor moedaA ="USD" moedaB="BRL" nomeMoeda="Dólar Comercial"></Conversor>
      <Conversor moedaA ="EUR" moedaB="BRL" nomeMoeda="Euro"></Conversor>
      <Conversor moedaA ="GBP" moedaB="BRL" nomeMoeda="Libra Esterlina"></Conversor>
      <Conversor moedaA ="CAD" moedaB="BRL" nomeMoeda="Dólar Canadense"></Conversor>
  
      {/* USD-BRL (Dólar Comercial)
USDT-BRL (Dólar Turismo)
CAD-BRL (Dólar Canadense)
AUD-BRL (Dólar Australiano)
EUR-BRL (Euro)
GBP-BRL (Libra Esterlina)
ARS-BRL (Peso Argentino)
JPY-BRL (Iene Japonês)
CHF-BRL (Franco Suíço)
CNY-BRL (Yuan Chinês)
YLS-BRL (Novo Shekel Israelense)
BTC-BRL (Bitcoin)
LTC-BRL (Litecoin)
ETH-BRL (Ethereum)
XRP-BRL (Ripple)
      */}
    </div>
  );
}

export default App;
