import React from 'react';
import Card from './Card';

 export default function CardList(props) {
  
   console.log(props.keys)         
   return (
    props.keys.map((item) => 
        <Card item = {item} 
              key = {item.name} />
    )
   )
     
}

