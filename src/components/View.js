import React from 'react';
import Item from './Item';

export default function View(props) {
  return (
    <ul className='view'>
    {props.classN.map((item) =>  
    <Item classN={item} key = {item}/>
    )}
      

    </ul>
  )
}

