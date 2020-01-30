import React from 'react';
import Genre from './Genre';
import Item from './Item';

// import Toggle from './Toggle';



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

export const body = document.querySelector('body');
body.onclick = (event) => {
    let target = event.target;
    let active = document.querySelector('.subMenu');
    let link = document.querySelector('.nav >li:last-child > a');
    
    switch (target !== link) {
        case true:
            active.style.display = 'none';
            link.classList.remove('active');
            break;
        case false:           
            active.style.display = ((active.style.display === 'none' || active.style.display === '' ) ?  'grid':  'none');
            link.classList.contains('active') ? link.classList.remove('active'): link.classList.add('active');
            break;
        default:
            break;
    }

}

