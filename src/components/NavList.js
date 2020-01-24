import React from 'react';
import Genre  from './Genre';
import {genre} from './data.js';


 export function Item(props)  {
    return (
       <li>
        <a href={`${props.value}`}>{props.value}</a>
        {props.children}
    </li> 
    )    
}


export function NavList(props) {   
    const listItem = props.nav.map((item) => 
    item !=='Genre' ? <Item value={item} key={item} />:
    <Item value = {item} key = {item}>
        <Genre val = {genre} />
    </Item>
    
            )
      
    return(
        <ul className = 'nav'>
            {listItem}         
            
        </ul>
    );
}


/* function clickMe() {
     
    <Genre style={{display:'flex'}} />
}
 */
 

