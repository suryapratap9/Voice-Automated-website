import "./navbar.css"
import React from 'react'
import videoBG from "../assets/videoBG.mp4"


export default function navbar() {
    return (

        <div className="main">
            <video id="myVideo" src={videoBG} autoPlay loop muted />

            <div className="heading">
                <div className="mainHeading">
                    HACKFEST-23
                </div>
                <div className="sub">
                    By AXISCADES-MISTRAL
                </div>

                <div className="present">
                    Presented By
                </div>

                <div className="name">
                    MAGMA
                </div>

            </div>
        </div>
    )
}
