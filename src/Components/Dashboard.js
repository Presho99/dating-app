import React from 'react'
import './Dashboard.css'
import Header from "./Header"
import Sidebar from './Sidebar'

function Dashboard() {
    return (
        <div className='dashboard'>
            <header>
                <Header/>
            </header>
            <div>
                <Sidebar/>
            </div>
            
        </div>
    )
}

export default Dashboard