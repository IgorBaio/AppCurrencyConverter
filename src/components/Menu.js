import React , {Component} from 'react'
import "./Menu.css"
import "./Conversor.css"

import Conversor from "./Conversor"

export default class Menu extends Component{
   
   constructor(props){
      super(props);
      
      this.state = {
         
         moedaA_valor:"",
         moedaB_valor: 0,
      };

   };

   // link(){
   //       var aplicativos = document.getElementById('aplicativos');

   //       var ir = document.getElementById('ir');

   //       for(var i = 0; i <= 2; i++){
   //          if(i == 1){
   //             aplicativos.innerHTML += '<option value="Conversor">Conversor</option>'
   //          }else if(i == 2){
   //             aplicativos.innerHTML += '<option value="Cronometro">Cronometro</option>'
   //          }else{
   //             aplicativos.innerHTML += '<option value="vazio"></option>'
   //          }
   //       }

   //       ir.addEventListener('click',function(){
   //          if(aplicativos.value === "Conversor"){
   //       //       render();
   //       //          return(
   //       //       // <h1>Conversor de moedas</h1>
   //       //       // <div className="linha">
   //       //         <Conversor moedaA ="USDT" moedaB="BRL" nomeMoeda="Dólar Turismo"></Conversor>
         
   //       //       // </div>
   //       //       <Conversor moedaA ="USD" moedaB="BRL" nomeMoeda="Dólar Comercial"></Conversor>
   //       //       <Conversor moedaA ="EUR" moedaB="BRL" nomeMoeda="Euro"></Conversor>
   //       //       <Conversor moedaA ="GBP" moedaB="BRL" nomeMoeda="Libra Esterlina"></Conversor>
   //       //       <Conversor moedaA ="CAD" moedaB="BRL" nomeMoeda="Dólar Canadense"></Conversor>
   //       // )
   //          }else if(aplicativos.value === "Cronometro"){
   //             window.location = ("cronometro.html");
   //          }
   //       })

   //       // render(
            
   //       //    <h1>Conversor de moedas</h1>
   //       //    <div className="linha">
   //       //       <Conversor moedaA ="USDT" moedaB="BRL" nomeMoeda="Dólar Turismo"></Conversor>
   //       //    </div>)
         
   // }


   render(){
      return(
         <Conversor />
      )
   }
}