import React, {Component} from 'react'
import "./Conversor.css"
//vou pegar por enquanto so o bid que é de compra, depois fazer outras paginas
// para pegar os outros dados
export default class Conversor extends Component{
   constructor(props){
      super(props);
      
      this.state = {
         moedaA_valor:"",
         moedaB_valor: 0,
      };

      this.converter = this.converter.bind(this);

   }

   converter(){
      let de_para = `${this.props.moedaA}-${this.props.moedaB}`;
      let url = `https://economia.awesomeapi.com.br/all/${de_para}`;

      fetch(url).then(res=>{
         return res.json();
      })
      .then(json=>{
         let cotacao = json[this.props.moedaA].bid;
         let moedaB_valor = ( parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
         this.setState({moedaB_valor});
      })

   }

   render(){
      return(
         <div className="conversor">
            <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
            <h3>({this.props.nomeMoeda})</h3>
            <input type="text" onChange={(event)=>{this.setState({
                                                                           moedaA_valor:event.target.value
                                                                                 }
                                                                              )
                                                                           }
                                                                        }
            ></input>
            <button type="button" value="Converter" onClick={this.converter}>Converter</button>
            <h2>Valor de compra: {this.state.moedaB_valor}</h2>
         </div>
      )
   }
}