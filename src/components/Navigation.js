import React from 'react';



function Item(props)  {
    return (
       <li>
        <a href="#s">{props.value}</a>
    </li> 
    )    
}

export default function Navigation(props) {
    
    return(
        <ul className = 'nav'>
            {props.nav.map((item) => 
                <Item value = {item}
                      key = {item} />
           
            
            )}
        </ul>
    );
}


 
