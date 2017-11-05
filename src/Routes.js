 import React from 'react';
 //import { Router, Route } from 'react-router';
 import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
 import { history } from './redux/store';
 import App from './App';
 import { HomeView, Login, Signup, Page404, Students, 
    Resource, Auth } from './modules';
 


 export default ({onEnter}) => (
    <Router history={history}> 
        <div>
        <Route path="/" component={App} />
        <Switch>  
              
            <Route exact path="/" component={HomeView}/>
            <Route path="/login" component={Login}/> 
            <Route path="/signup" component={Signup}/> 
            <PrivateRoute authed={false}  path="/students" component={Students} />
            <PrivateRoute authed={false} path="/resource" component={Resource} />      
            <Route component={Page404}/>
        </Switch>
         
        </div>
    </Router>
 );
//redirect if not authenticated
 const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={(props) => authed === true
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}} /> }
            />
    )
 }
