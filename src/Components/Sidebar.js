import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandHoldingHeart, faChartSimple, faVenusDouble, faMessage, faAddressBook, faCircleInfo, faGear, faGlobe, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import React from "react"
import "./Sidebar.css"

function Sidebar(){
    return(
        <div className="sidebar">
            <h1>HoldMe<FontAwesomeIcon icon={faHandHoldingHeart} style={{marginLeft: "10"}}/></h1>
            <div className="top">
            <h4>Main Menu</h4>
            <div className="top-details">
            <p><FontAwesomeIcon icon={faChartSimple} style={{marginRight: "10px", color: "#585352"}}/>Dashboard</p>
            <p><FontAwesomeIcon icon={faVenusDouble} style={{marginRight: "10px", color: "#585352"}}/>Matches</p>
            <p><FontAwesomeIcon icon={faGlobe} style={{marginRight: "10px", color: "#585352"}}/>New & Online</p>
            <p><FontAwesomeIcon icon={faMessage} style={{marginRight: "10px", color: "#585352"}}/>Chat Request</p>
            <p><FontAwesomeIcon icon={faAddressBook} style={{marginRight: "10px", color: "#585352"}}/>Contact</p>
            </div>
            </div>
            
            
            <div className="bottom">
            <h4>Support</h4>
            <div className="bottom-details">
            <p><FontAwesomeIcon icon={faGear} style={{marginRight: "10px", color: "#585352"}}/>Settings</p>
            <p><FontAwesomeIcon icon={faCircleInfo} style={{marginRight: "10px", color: "#585352"}}/>Help</p>
            <p><FontAwesomeIcon icon={faRightFromBracket} style={{marginRight: "10px", color: "#585352"}}/>Logout</p>

            </div>
            </div>
            
            

        </div>
    )
}

export default Sidebar