import  React from 'react';
import {Item} from './NavList';


export default function Genre (props) {
 
  return (    
    <ul className='subMenu' >
      {props.val.map((item) =>
        <Item value = {item} 
              key = {item} />
          )
        }      
    </ul>
    
  
  );
   
}