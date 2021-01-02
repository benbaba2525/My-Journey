import React from 'react';
import Carditem from './CardItem';
import "../styles/Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out My Destination</h1>
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
                    src="images/yellow.png" 
                    text="Travel through Fountain Paint Pot, Yellowstone National Park, Wyoming"
                    label="Adventure"
                    path="/articles"
                    />   
                </ul>

                <ul className="cards__items">

                   <Carditem 
                    src="images/utah.jpg" 
                    text="Travel through Arches Nation Park Moab UT"
                    label="Adventure"
                    path="/articles"
                    />   

                    
                   <Carditem 
                    src="images/jashuatree.jpg" 
                    text="Explore my Adventure Keys View, Joshua Tree National Park."
                    label="Adventure"
                    path="/articles"
                    />   

                   <Carditem 
                    src="images/diamondHead.jpg" 
                    text="Travel through Diamond Head Crater Trail"
                    label="Adventure"
                    path="/articles"
                    />   

                </ul>

                <ul className="cards__items">

                   <Carditem 
                    src="images/utah2.jpg" 
                    text="Travel through Arches Nation Park Moab UT"
                    label="Adventure"
                    path="/articles"
                    />   

                    
                   <Carditem 
                    src="images/basslake.jpg" 
                    text="Travel through Bass Lake, California"
                    label="Adventure"
                    path="/articles"
                    />   

                   <Carditem 
                    src="images/catalina1.jpg" 
                    text="Travel through Catalina Island"
                    label="Adventure"
                    path="/articles"
                    />   

                </ul>

                <ul className="cards__items">

                   <Carditem 
                    src="images/punga.jpg" 
                    text="Travel through Phang-nga Island"
                    label="Adventure"
                    path="/articles"
                    />   

                    
                   <Carditem 
                    src="images/ppIsland2.jpg" 
                    text="Travel through Phi Phi Island"
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
