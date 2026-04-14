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
    // const style = { color: "red", fontSize: '48px', textTransform: 'uppercase' };
    const style ={};

    return (
    <header className="header">
        <h1 style={style}>Fast Pizza Co.</h1>
    </header>
);}

function Menu(){
    return (
        <main className="menu">
            <h2>Our menu</h2>

            <ul className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza 
                        // key={pizza.namew} 
                        // name={pizza.name}
                        // ingredients={pizza.ingredients}
                        // photoName={pizza.photoName}
                        // price={pizza.price} 
                        key={pizza.name}
                        pizzaObj={pizza}
                    />
                ))}
            </ul>

            {/* <Pizza 
                name='Pizza Spinaci' 
                ingredient='Tomato, mozarella, spinach, and ricotta cheese' 
                photoName='pizzas/spinaci.jpg' 
                price={10}
                />
            <Pizza 
                name='Pizza Funghi' 
                ingredient='Tomato, mushrooms' 
                photoName='pizzas/funghi.jpg' 
                price={12}
                /> */}
        </main>
    );
}

function Footer(){
        const hour = new Date().getHours();
        const openHour = 12;
        const closeHour = 22;

        const isOpen = hour >= openHour && hour <= closeHour;
        // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
        // else alert("Sorry we're close");

        return <footer className="footer">{new Date().toLocaleTimeString()}. We're currently open</footer>

}
function Pizza(props){
    return (

        <li className='pizza'>
            <img src={props.pizzaObj.photoName} atl={props.pizzaObj.name}/>
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}s</p>
                <span>{props.pizzaObj.price + 3}</span>
            </div>
        </li>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>)