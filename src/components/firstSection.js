import React from "react";
import video from "../videos/video-1.mp4";

function bodySection() {
    return (
        <div className= "first-container">
            <video src={video} autoPlay loop muted/>
            <h1 >Adventure Awaits</h1>
        </div>
    )
}

export default bodySection
