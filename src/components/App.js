import React from 'react';
import Card from './Card';
import Header from './Header';
import Navigation from './Navigation';

const info = [
    {
        name: 'Assasins Creed',
        section:'Action, Adventure, Fantasy',
        rating: '4.2',
        source: './img/1.jpg'
    },

    {
        name: 'Now you see me 2',
        section:'Action, Adventure, Comedy',
        rating: '4.4',
        source: './img/2.jpg'
    },

    {
        name: 'the legend of tarzan',
        section:'Action, Adventure, Drama',
        rating: '4.3',
        source: './img/3.jpg'
    },

    {
        name: 'doctor strange',
        section:'Action, Adventure, Fantasy',
        rating: '4.8',
        source: './img/4.jpg'
    },

    {
        name: 'captain america',
        section:'Action, Adventure, Sci-Fi',
        rating: '4.9',
        source: './img/5.jpg'
    },

    {
        name: 'finding dory',
        section:'Animation, Adventure, Comedy',
        rating: '4.7',
        source: './img/6.jpg'
    },

    {
        name: 'the bfg',
        section:'Adventure, Family, Fantasy',
        rating: '3.2',
        source: './img/7.jpg'
    },

    {
        name: 'independence day',
        section:'Action, Sci-Fi',
        rating: '3.9',
        source: './img/8.jpg'
    },

    {
        name: 'ice age: collision cource',
        section:'Action, Adventure, Sci-Fi',
        rating: '4.9',
        source: './img/9.jpg'
    },

    {
        name: 'Moana',
        section:'Action, Fantasy',
        rating: '4.9',
        source: './img/10.jpg'
    },

    {
        name: 'Fantastic Beasts and Where to Find Them',
        section:'Adventure, Family, Fantasy',
        rating: '4.9',
        source: './img/11.jpg'
    },

    {
        name: 'alice through the looking glass',
        section:'Adventure, Family, Fantasy',
        rating: '4.9',
        source: './img/12.jpg'
    },
]; 


export default function App() {
    return (
        <div className = 'container'>
            <header className = 'header'>
               <Header /> 
            </header>
            <main>
                <div className = 'navigation'>
                    <Navigation />
                </div>
                <div className = "card">
                    <Card info = {info}/>    
                </div>  
            </main>
            <footer>

            </footer>
              
        </div>
    )
}


