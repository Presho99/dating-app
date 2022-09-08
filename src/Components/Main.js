import React from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCircleArrowLeft, faCircleArrowRight, faUser, faEye, faFaceSmile, faFolder, faSearch, faStar, faVenusDouble } from '@fortawesome/free-solid-svg-icons'


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
                <h3>Activity</h3>
                <div className='chat'>
                    <div className='chat-icon'>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div className='chat-text'>
                        <h4>Susan</h4>
                        <p>is now following you</p>
                    </div>
                    <div className='chat-time'>
                        <p>2 hours ago</p>
                    </div>
                </div>
                <div className='chat'>
                    <div className='chat-icon'>
                        <FontAwesomeIcon icon={faVenusDouble}/>
                    </div>
                    <div className='chat-text'>
                        <h4>Susan</h4>
                        <p>Matched 90% with you</p>
                    </div>
                    <div className='chat-time'>
                        <p>3 hours ago</p>
                    </div>
                </div>

                <div className='chat'>
                    <div className='chat-icon'>
                        <FontAwesomeIcon icon={faEye}/>
                    </div>
                    <div className='chat-text'>
                        <h4>Susan</h4>
                        <p>viewed your profile</p>
                    </div>
                    <div className='chat-time'>
                        <p>4 hours ago</p>
                    </div>
                </div>

                <div className='chat'>
                    <div className='chat-icon'>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div className='chat-text'>
                        <h4>Susan</h4>
                        <p>sent you a message</p>
                    </div>
                    <div className='chat-time'>
                        <p>2 hours ago</p>
                    </div>
                </div>

                <div className='chat'>
                    <div className='chat-icon'>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div className='chat-text'>
                        <h4>Susan</h4>
                        <p>sent you a message</p>
                    </div>
                    <div className='chat-time'>
                        <p>2 hours ago</p>
                    </div>
                </div>

            </div>

            <div className='box-three'>
                <div className='photo-panel'>
                    <img src='profile.jpeg'/>
                </div>
                <div className='photo-panel'>
                    <img src='profile.jpeg'/>
                </div>
                <div className='photo-panel'>
                    <img src='profile.jpeg'/>
                </div>


            </div>
           
        </div>
    )
}

export default Main