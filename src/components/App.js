import React from 'react';
import CardList from './CardList';
import Header from './Header';
import {NavList} from './NavList';
import {info, genre, navList, classN} from './data.js'; //получение данных из отдельного файла
import View from './View';




export default function App() {
    return (
        <div className = 'container'>
            <header className = 'header'>
               <Header /> 
            </header>
            <main>
               
                <div className = 'navigation'>
                    <NavList nav = {navList} genre={genre}  />
                    <View classN = {classN} />
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


