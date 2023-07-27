import React from 'react'
import Results from './Results'
import {Switch,Route,Redirect} from 'react-router-dom';
export default function Routers() {
    return (
        <div className="p-4">
        
           <Switch>
               <Route exact path='/'>
                   <Redirect to='/search'/>
               </Route>
               <Route exact path={['/search','/images','/news','/videos']}>
                   <Results/>
               </Route>
           </Switch>
        </div>
    )
}
