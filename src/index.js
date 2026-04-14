import React from 'react';
import ReactDOM  from "react-dom/client";
import './index.css';
import {pizzaData} from './data';

function App(){

    return (
    <div className= "container">
        
        <Header/>
        <Menu/>
        <Footer/>
    </div>
    );
}


function Header(){
    
    const style ={};

    return (
    <header className="header">
        <h1 style={style}>Fast Pizza Co.</h1>
    </header>
);}

function Menu(){

    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our menu</h2>

    {numPizzas > 0 ? (

     <ul className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza 
                        
                        key={pizza.name}
                        pizzaObj={pizza}
                    />
                ))}
            </ul>
    ) : (
        <p>We're are still working on our menu. Please come back later</p>
    )}
        </main>
    );
}

function Footer(){
        const hour = new Date().getHours();
        const openHour = 8;
        const closeHour = 22;

        const isOpen = hour >= openHour && hour <= closeHour;
    
        return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour}/>
            ) : (
                <p>We are happy to assist you between {openHour}:00 and {closeHour}:00</p>
            )}
        </footer>
        );
}

function Order({closeHour, openHour}){
    return (

        <div className="order">
            <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online</p>
            <button className="btn">Order</button>
        </div>
    );
}
function Pizza({pizzaObj}){
    return (

        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} atl={pizzaObj.name}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}s</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>)