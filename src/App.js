
import './App.css';
import React, {useState} from "react"
import Dashboard from './Components/Dashboard'

import { Route, Switch } from "react-router-dom"
import Home from "./Components/Home"


function App() {
  
      
    return(
        <div className='App'>
            <Dashboard/>
           
            {/* <Switch>
                <Route path="/">
                  <Home/>
                </Route>
                <Route path="./dashboard">
                  <Dashboard/>
                </Route>
                
            </Switch>
           */}
        </div>
    )
     
  
  
}

export default App;
