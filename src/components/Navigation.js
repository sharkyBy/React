import React from 'react';

const nav = ['Trending','Top Rated', 'Comming Soon', 'Gentre'];

export default function Navigation() {

    const  navList = nav.map((link) =>
        <li key={link}>
            <a href = '#'>{link}</a>
        </li>
        );
    return(
        <ul className = 'nav'>
            {navList}
        </ul>
    );
}


