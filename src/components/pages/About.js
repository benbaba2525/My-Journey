import React from 'react';
import "../../App.css";
import Carditem from '../../components/CardItem';
import "../../styles/Cards.css";
import Footer from '../Footer';

export default function About() {
    return (
    <div>
    <h1 className="about">My lifetimes of Travelling </h1>
    <div className="cards__container">
     <div className="cards__wrapper">
              <h1 className="aboutTrvelling">About me is travelling</h1>
              <p className="travelDesc">Sometimes travel can seem a distant thing, and we need a bit of travel inspiration to get us fired up.
                   So this section aims to do exactly that. Giving you that travel inspiration you need to go out there and make travel happen.
             </p>
            <br />
             <p className="travelDesc">
             I think travel makes everybody a more awesome person. We end our travels way better off than when we started. I’m not saying this to be conceited or egotistical; I’m saying it because I believe that travel is something that makes you not only a better human being but a way cooler one too. The kind of person people gravitate toward and want to be around.
             </p>

             </div>
             <div className="imgBox">
                    
          
            <img src="images/frankinCanyon.jpg" className="imgAbout"></img>
             
                </div>

    </div>

    <Footer />
    </div>
    )
   
}