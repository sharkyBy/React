import React from 'react';


export default function Card (props) { 
   
    return (
        <figure className = 'card__container' >
            <div className = 'card__img'>
                <img src = {props.item.source} alt = "img"/>
            </div>
            <div className = 'card__info'>
                <div className = 'card__text'>
                    <h2>{props.item.name}</h2>
                    <h6>{props.item.section}</h6> 
                </div>
                <span className = 'card__rating'>{props.item.rating}</span>
            </div>           
        </figure>
    )
}
       


