import React from "react";
import video from "../videos-img/video-1.mp4";
import {Button} from "../components/Button";
import "../App.css";
import "../styles/firstSection.css";

function firstSection() {
    return (
        <div className= "first-container">
            <video src={video} autoPlay loop muted/>
            <h1 >Adventure Awaits</h1>
            <div className="first-btns">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
        >
          GET STARTED
        </Button>
        

            </div>
        </div>
    )
}

export default firstSection
