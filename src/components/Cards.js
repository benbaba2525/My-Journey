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
                    text="Explore my Adventure kytfitftcktckutfk8yogu;ohpn9uno"
                    lable="Adventure"
                    path="/articles"
                    />
                </ul>
             </div>
            </div>
        </div>
    )
}

export default Cards
