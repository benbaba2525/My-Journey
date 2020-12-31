import React from 'react';
import Carditem from './CardItem';
import "../styles/Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out My Desination</h1>
            <div className="cards__container">
             <div className="cards__wrapper">
                <ul className="cards__items">
                    <Carditem 
                    src="images/jamesbondIsland.jpg" 
                    text="Travel through the James Bond Island 🌴 🌊 "
                    label="Adventure"
                    path="/articles"
                    />

                   <Carditem 
                    src="images/ppIsland.jpg" 
                    text="Explore my Adventure kytfitftcktckutfk8yogu;ohpn9unofc6rcu6rcuj uhbiu"
                    label="Adventure"
                    path="/articles"
                    />   
                </ul>

                <ul className="cards__items">

                   <Carditem 
                    src="images/utah.jpg" 
                    text="Explore my Adventure kytfitftcktckutfk8yogu;ohpn9unofc6rcu6rcuj uhbiu"
                    label="Adventure"
                    path="/articles"
                    />   

                    
                   <Carditem 
                    src="images/jashuatree.jpg" 
                    text="Explore my Adventure kytfitftcktckutfk8yogu;ohpn9unofc6rcu6rcuj uhbiu"
                    label="Adventure"
                    path="/articles"
                    />   

                   <Carditem 
                    src="images/diamondHead.jpg" 
                    text="Explore my Adventure kytfitftcktckutfk8yogu;ohpn9unofc6rcu6rcuj uhbiu"
                    label="Adventure"
                    path="/articles"
                    />   

                </ul>

             </div>
            </div>
        </div>
    )
}

export default Cards
