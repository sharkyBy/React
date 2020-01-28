import React from 'react';
import Genre from './Genre';

// import Toggle from './Toggle';



export function Item(props) {
    return (
        <li>
            <a href={`#${props.value}`}>{props.value}</a>
            {props.children}
        </li>
    )
}


export function NavList(props) {
    const listItem = props.nav.map((item) =>
        (item) !== 'Genre' ? <Item value={item} key={item} /> :
            <Item value={item} key={item} >
                <Genre val={props.genre} />
            </Item>

    )

    return (
        <ul className='nav'>
            {listItem}
        </ul>
    );
}

export let body = document.querySelector('body');
body.onclick = (event) => {
    let target = event.target;
    let active = document.querySelector('.subMenu');
    let link = document.querySelector('.nav >li:last-child > a') 
    
    target !== link || active.style.display ==='grid' ? active.style.display = 'none': active.style.display = 'grid';   
    console.log(target);

}

