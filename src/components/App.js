import React from 'react';
import CardList from './CardList';
import Header from './Header';
import {NavList} from './NavList';
import {info, navList} from './data.js'; //получение данных из отдельного файла





export default function App() {
    return (
        <div className = 'container'>
            <header className = 'header'>
               <Header /> 
            </header>
            <main>
                <div className = 'navigation'>
                    <NavList nav = {navList}/>
                    
                </div>
                <div className = "card">
                    <CardList keys = {info}/>
                    
                </div>  
            </main>
            <footer>

            </footer>
              
        </div>
    )
}


