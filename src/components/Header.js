import React from 'react';

export default function Header() {
    return(
        <div className = 'header__container'>
            <div className = 'header__search'>
                <h1>FILMS</h1>
                <form className='form'>
                    <input type="search" name="q" placeholder="search..."/>
                    <button type="submit" formAction="http://google.com/search?q"><i class="fas fa-search"></i></button>   
                </form>
            </div>
            
        </div>
    );
}