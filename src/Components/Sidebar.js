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
            <p><FontAwesomeIcon icon={faChartSimple} style={{marginRight: "10px", color: "#9d2e3c"}}/>Dashboard</p>
            <p><FontAwesomeIcon icon={faVenusDouble} style={{marginRight: "10px", color: "#9d2e3c"}}/>Matches</p>
            <p><FontAwesomeIcon icon={faGlobe} style={{marginRight: "10px", color: "#9d2e3c"}}/>New & Online</p>
            <p><FontAwesomeIcon icon={faMessage} style={{marginRight: "10px", color: "#9d2e3c"}}/>Chat Request</p>
            <p><FontAwesomeIcon icon={faAddressBook} style={{marginRight: "10px", color: "#9d2e3c"}}/>Contact</p>
            </div>
            </div>
            
            
            <div className="bottom">
            <h4>Support</h4>
            <div className="bottom-details">
            <p><FontAwesomeIcon icon={faGear} style={{marginRight: "10px", color: "#9d2e3c"}}/>Settings</p>
            <p><FontAwesomeIcon icon={faCircleInfo} style={{marginRight: "10px", color: "#9d2e3c"}}/>Help</p>
            <p><FontAwesomeIcon icon={faRightFromBracket} style={{marginRight: "10px", color: "#9d2e3c"}}/>Logout</p>

            </div>
            </div>
            
            

        </div>
    )
}

export default Sidebar