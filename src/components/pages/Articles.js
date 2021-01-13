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
                     <p className="travelDescSec">Diamond Head is a volcanic cone on the Hawaiian island of Oahu and is the most popular Hawaii State Park. Hawaiians call it Lēʻahi (brow of the tuna) in reference to the formation’s ridgeline, which resembles the tuna fish’s dorsal fin.
                      The British soldiers who visited the area in the 19th century thought that the sparkling calcite crystals on the neighboring beach were diamonds. 
                     </p>
                    <br />
                 <hr />
              </div>

              <div className="imgBox">
                <img src="images/utah2.jpg" className="imgAbout"></img>
                  <h2>Antelope Canyon, Arizona</h2>
                     <p className="travelDescSec">
                     Antelope Canyon is the product of millions of years of water erosion. In fact, the Navajo name for Upper Antelope Canyon is “Tse' bighanilini,” which means "the place where water runs through rocks.
                     " Once home to herds of pronghorn antelope, the canyon now lies within the LeChee Chapter of the Navajo Nation, and draws nature-lovers near and far for its remarkable, mysterious beauty. 
                     The canyon walls climb 120 feet above the stream bed, making it a cathedral of red-hued, swirling sandstone.
                     </p>
                    <br />
                 <hr />
              </div>

              <div className="imgBox">
                <img src="images/yosemi.jpg" className="imgAbout"></img>
                  <h2>Half Dome, Yosemite National Park</h2>
                     <p className="travelDescSec">
                     Half Dome is a granite dome at the eastern end of Yosemite Valley in Yosemite National Park, California. It is a well-known rock formation in the park, named for its distinct shape.
                     One side is a sheer face while the other three sides are smooth and round, making it appear like a dome cut in half.
                     </p>
                    <br />
                 <hr />
              </div>

              <div className="imgBox">
                <img src="images/phuketIsland.jpg" className="imgAbout"></img>
                  <h2>Hong Island, Thailand</h2>
                     <p className="travelDescSec">
                     also known as Koh Hong, is located in the province Krabi, in South of Thailand. The island is known for its impressive limestone formations and for that, it‘s certainly one of the most beautiful places in Thailand. But not only the limestone cliffs are impressive, also the fine white powdered sand beach of Hong Island is really awesome.
                     Another highlight on the island is the Hong Lagoon, which can only be reached by boat entering a narrow rock-opening.
                     </p>
                    <br />
                 <hr />
              </div>

              <div className="imgBox">
                <img src="images/samui.jpg" className="imgAbout"></img>
                  <h2>Koh Samui, Thailand</h2>
                     <p className="travelDescSec">
                     Ko Samui, Thailand’s second largest island, lies in the Gulf of Thailand off the east coast of the Kra Isthmus. It's known for its palm-fringed beaches, coconut groves and dense, mountainous rainforest, plus luxury resorts and posh spas.
                     The landmark 12m-tall golden Big Buddha statue at Wat Phra Yai Temple is located on a tiny island connected to Ko Samui by a causeway.
                     </p>
                    <br />
               </div>        
            </div>
          <Footer />
      </div>
    )
};