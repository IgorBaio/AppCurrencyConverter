import React, {Component} from 'react'
import "./Conversor.css"
// import Select from './Select'
import Currencies from '../dataCurrency/currencies';

//vou pegar por enquanto so o bid que é de compra, depois fazer outras paginas
// para pegar os outros dados
export default class Conversor extends Component{
   constructor(props){
      super(props);
      
      this.state = {
         moedaA:"usd",
         moedaB:"brl",
         moedaA_valor:"",
         moedaB_valor: 0,
      };

      this.converter = this.converter.bind(this);

   }

   converter(){
      let url = `http://www.floatrates.com/daily/${(this.state.moedaB)}.json`
      console.log(this.state.value)
      console.log(this.props.moedaA)
      console.log(this.props.moedaB)
      console.log(this.state.moedaA)
      console.log(this.state.moedaB)
      
      fetch(url).then(res=>{
         return res.json();
      })
      .then(json=>{
         let cotacao = json[(this.state.moedaA)].inverseRate;
         let moedaB_valor = ( parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
         this.setState({moedaB_valor});
      })

   }

   _handleChangeA = (event) => {
      this.setState({ moedaA: event.target.value })
      console.log(this.state.moedaA)
    }
   _handleChangeB = (event) => {
      this.setState({ moedaB: event.target.value })
      console.log(this.state.moedaB)
    }
   

   render(){
      
      let options = []
         
   
      Currencies.forEach(item=>{
         if(item === Currencies[0]){
            options.push(<option key={item.name} value={item.name} defaultValue >
               {item.name}
            </option>)
         }else{
            options.push(<option key={item.name} value={item.name} >
               {item.name}
            </option>)
         }
         
         })

      return(
         <div className="conversor">
             <h2>
               <select name="optionsCurrencies" 
                                 onChange={this._handleChangeA}
                                 className="selectCurrency"
                                 style={{marginRight:50}}
                                 ref={ref => {
                                    this._select = ref
                                 }}
                                 value={this.state.moedaA}
                                 defaultValue={this.state.moedaA}
                              >
                     {options}
                  </select> para <select  
                           name="optionsCurrencies"
                           onChange={(event)=>this.setState({ moedaB: event.target.value })}
                           className="selectCurrency"
                           style={{marginLeft:50}}
                           ref={ref => {
                              this._select = ref
                           }}
                           value={this.state.moedaB}
                           defaultValue={this.state.moedaB}>
                     {options}
                  </select> 
            </h2>
            <input type="number" className="inputNumber" onChange={(event)=>{this.setState({
                                                                           moedaA_valor:event.target.value
                                                                                 }
                                                                              )
                                                                           }
                                                                        }
            ></input>



            <button type="button" className="convertButton" value="Converter" onClick={this.converter}>Converter</button>
            <h2>Valor de compra: {this.state.moedaB_valor}</h2>
         </div>
      )
   }
}