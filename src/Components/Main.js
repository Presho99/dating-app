import React from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCircleArrowLeft, faCircleArrowRight, faFaceSmile, faFolder, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'


function Main(){
    return(
        <div className='main'>
            <div className='box-one'>
                <div className='left-icon'><FontAwesomeIcon icon={faCircleArrowLeft}/></div>
                <div className='panel' style={{backgroundImage: "url('profile.jpeg')"}}>
                    <h3>Susan,24</h3>
                </div>
                <div className='panel' style={{backgroundImage: "url('profile.jpeg')"}}>
                     <h3>Susan,24</h3>
                </div>
                <div className='panel' style={{backgroundImage: "url('profile.jpeg')"}}>
                     <h3>Susan,24</h3>
                </div>
                <div className='panel' style={{backgroundImage: "url('profile.jpeg')"}}>
                     <h3>Susan,24</h3>
                </div>
                <div className='panel' style={{backgroundImage: "url('profile.jpeg')"}}>
                     <h3>Susan,24</h3>
                </div>
                <div className='panel' style={{backgroundImage: "url('profile.jpeg')", width: "100", height: "100"}}>
                     <h3>Susan,24</h3>
                </div>
                <div className='right-icon' icon={faCircleArrowRight}></div>
            </div>

            <div className='box-two'>
                
            </div>
           
        </div>
    )
}

export default Main