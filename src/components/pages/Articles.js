import React from 'react';
import "../../App.css";
import "../../styles/Cards.css";
import Footer from '../Footer';


export default function Articles() {
    return (
    <div>
    <h1 className="articles">Travel Stories</h1>

    <div className="cards__container">
     <div className="cards__wrapper">
              <h1 className="aboutTrvelling">My Top 5 Favorite Places</h1>
              <p className="travelDesc"> 
              The world is filled with such a wide variety of wonderful destinations and beautiful places to visit, 
              it can be quite difficult to compile a list of the best ones.I have my top 5 journey that would be an idea for you who cannot decide where to travel.
             </p>
            <br />
            <hr />
             

             </div>

               
             <div className="imgBox">
                
               <img src="images/diamondHead.jpg" className="imgAbout"></img>
                <h2>Diamond Head, Hawii</h2>
                <p className="travelDescSec">Sometimes travel can seem a distant thing, and we need a bit of travel inspiration to get us fired up.
                   So this section aims to do exactly that. Giving you that travel inspiration you need to go out there and make travel happen.
                 </p>
          
             </div>
                
                
                <div className="imgBox">
            
          
            <img src="images/utah2.jpg" className="imgAbout"></img>
            <h2>Diamond Head, Hawii</h2>
            <p className="travelDesc"> 
              The world is filled with such a wide variety of wonderful destinations and beautiful places to visit, 
              it can be quite difficult to compile a list of the best ones.I have my top 5 journey that would be an idea for you who cannot decide where to travel.
             </p>
             
                </div>

                <hr />

                <div className="imgBox">
                <p className="travelDesc">Sometimes travel can seem a distant thing, and we need a bit of travel inspiration to get us fired up.
                   So this section aims to do exactly that. Giving you that travel inspiration you need to go out there and make travel happen.
             </p>
            <br />
             <p className="travelDesc">
             I think travel makes everybody a more awesome person. We end our travels way better off than when we started. I’m not saying this to be conceited or egotistical; I’m saying it because I believe that travel is something that makes you not only a better human being but a way cooler one too. The kind of person people gravitate toward and want to be around.
             </p>
          
            <img src="images/phuketIsland.jpg" className="imgAbout"></img>
             
                </div>

                <div className="imgBox">
                <p className="travelDesc">Sometimes travel can seem a distant thing, and we need a bit of travel inspiration to get us fired up.
                   So this section aims to do exactly that. Giving you that travel inspiration you need to go out there and make travel happen.
             </p>
            <br />
             <p className="travelDesc">
             I think travel makes everybody a more awesome person. We end our travels way better off than when we started. I’m not saying this to be conceited or egotistical; I’m saying it because I believe that travel is something that makes you not only a better human being but a way cooler one too. The kind of person people gravitate toward and want to be around.
             </p>
          
            <img src="images/yosemi.jpg" className="imgAbout"></img>
             
                </div>

                <div className="imgBox">
                <p className="travelDesc">Sometimes travel can seem a distant thing, and we need a bit of travel inspiration to get us fired up.
                   So this section aims to do exactly that. Giving you that travel inspiration you need to go out there and make travel happen.
             </p>
            <br />
             <p className="travelDesc">
             I think travel makes everybody a more awesome person. We end our travels way better off than when we started. I’m not saying this to be conceited or egotistical; I’m saying it because I believe that travel is something that makes you not only a better human being but a way cooler one too. The kind of person people gravitate toward and want to be around.
             </p>
          
            <img src="images/samui.jpg" className="imgAbout"></img>
             
                </div>

                

                

    </div>

    

    <Footer />
    </div>
    )
    
}