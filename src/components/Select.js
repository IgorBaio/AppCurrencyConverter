import React, {Component} from 'react'
import Currencies from '../dataCurrency/currencies';
import { render } from '@testing-library/react';

export default class Select extends Component{
   render(){
      let options = []
         
   
      Currencies.forEach(item=>{
         if(item === Currencies[0]){
            options.push(<option key={item} value={item} defaultValue >
               {item}
            </option>)
         }else{
            options.push(<option key={item} value={item} >
               {item}
            </option>)
         }
         
         })

      return(

         <select name="optionsCurrencies">
               {options}
         </select> 
      );
   };

};

