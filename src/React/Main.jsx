import React from'react';
import { Switch, Route } from 'react-router-dom'

/* Components---------------------------*/
import Welcome from './Pages/Welcome/Welcome.jsx';
import Services from './Pages/Services/Services.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Login from './Pages/Login/Login.jsx';
import Essay from './Pages/Essay/Essay.jsx';

const Main = () => {
return (
    <main>
        <Switch>
            <Route path= '/services' component={ Services } />
            <Route path= '/contact' component={ Contact } />
            <Route path= '/services' component={ Login } />
            <Route path= '/login' component={ Login } />
            <Route path= '/essay' component={ Essay } />
            <Route path= '/' component={ Welcome } />
    
        </Switch>
    </main>
    )
    } 

export default Main;