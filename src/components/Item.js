import React from 'react';


export default function Item(props) {
  return (
      <li>
          <a href={`#${props.value}`} className = {props.classN}>{props.value}</a>
          {props.children}
      </li>
  )
}