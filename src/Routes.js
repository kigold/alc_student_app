 import React from 'react';
 //import { Router, Route } from 'react-router';
 import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
 import { history } from './redux/store';
 import App from './App';
 import { HomeView, Login, Signup, Page404 } from './modules';


 export default () => (
    <Router history={history}> 
        <div>
        <Route path="/" component={App} />
        <Switch>  
              
            <Route exact path="/" component={HomeView}/>
            <Route path="/login" component={Login}/> 
            <Route path="/signup" component={Signup}/>       
            <Route component={Page404}/>
        </Switch>
         
        </div>
    </Router>
 );

