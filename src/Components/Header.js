import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faFaceSmile, faFolder, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return(
        <div className='header'>
            
                {/* header first */}
                <div className='first'>
                    <div className='inbox'>
                        
                        <p>Inbox<FontAwesomeIcon icon={faFolder} style={{color: 'orange', cursor: 'pointer'}}/></p>
                    </div>
                    <div className='mood'>
                        
                        <p>Mood<FontAwesomeIcon icon={faFaceSmile}  style={{color: 'pink', cursor:'pointer'}}/></p>
                    </div>
                    <div className='favorite'>
                        <p>Favorite<FontAwesomeIcon icon={faStar}  style={{color: 'yellow', cursor:'pointer'}}/></p>
                    </div>
                </div>

                {/* header second */}
                <div className='second'>
                    <form className='search-bar'>
                        <input type="text" className="input" placeholder='Search...'></input>
                        <button><FontAwesomeIcon icon={faSearch} /></button>
                    </form>

                    <button className='upgrade'>Upgrade Now</button>

                </div>

                {/* header-third */}
                <div className='third'>
                    <p>Hi, Manuel</p>
                    <img src='profile.jpeg'></img>

                </div>
        


        </div>
    )
}

export default Header