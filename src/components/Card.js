import React from 'react';
// import ReactDOM from 'react-dom'

 

export default function Card (props) {     
    
    return props.info.map((item) =>
        <figure className = 'card__container' key = {item.name}>
            <div className = 'card__img'>
                <img src = {item.source} alt = "img"/>
            </div>
            <div className = 'card__info'>
                <div className = 'card__text'>
                    <h2>{item.name}</h2>
                    <h6>{item.section}</h6> 
                </div>
                <span className = 'card__rating'>{item.rating}</span>
            </div>           
        </figure>
    )
       
}

