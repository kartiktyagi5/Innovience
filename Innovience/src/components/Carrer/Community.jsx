import React, { useState } from "react";
import businesses from "../assets/Images/businesses-icon.png";
import hr from "../assets/Images/hr.png";
import startup from "../assets/Images/startup.png";
import "./Technologies.css";
 
const Community = () => { 
    return (
        <>
            <div className="community-container">
                <div className="header">
                    <h1>Community</h1>
                    <div className="underline"></div>
                </div>
                <div className="community-content">
                    <div className="community-card">
                        <div className="community-card-image">
                            <img src={businesses} alt="Businesses" />
                        </div>
                        <div className="community-card-details">
                            <h2>Businesses</h2>
                            <p>Connect with businesses and get hired.</p>
                        </div>
                    </div>
                    <div className="community-card">
                        <div className="community-card-image">
                            <img src={hr} alt="HR" />
                        </div>
                        <div className="community-card-details">
                            <h2>HR</h2>
                            <p>Get in touch with HRs and recruiters.</p>
                        </div>
                    </div>
                    <div className="community-card">
                        <div className="community-card-image">
                            <img src={startup} alt="Startup" />
                        </div>
                        <div className="community-card-details">
                            <h2>Startups</h2>
                            <p>Connect with startups and explore opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Community;
;
