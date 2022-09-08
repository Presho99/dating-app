import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import React from "react"
import "./Signup.css"

function Signup(){
    return(
        <div className="signup">
            <h1><FontAwesomeIcon icon={faHandHoldingHeart} style={{fontSize: "80", color: "#9D2E3C", marginLeft: "150"}}/></h1>
                <form>
                    <input type="text" placeholder='Username'></input>
                    
                    <input type="password" placeholder='Password'></input>
                    <input type="password" placeholder='Confirm Password'></input>
                    <input type="text" placeholder='Country'></input>
                    <input type="text" placeholder='City'></input>
                    <button>Sign up</button>
                </form>
        </div>
    )
}

export default Signup