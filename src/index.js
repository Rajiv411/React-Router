import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.js';
import {Router,Route,browserHistory,Link} from 'react-router';
import './index.css';

const App = ()=> (
    <div>
    <h2>App</h2>
        <Link to="/about">About component</Link>
    </div>

);

const About = (props) => (
        <div>
            <h2>About</h2>
            <div>{props.children}</div>
            <Link activeClassName="active" to="/about/sport">sport</Link>
            {' '}
            <Link activeClassName="active" to="/about/city">city</Link>
        </div>
);

const SportImage = () => (
    <img src="http://lorempixel.com/400/200/sports/1/" alt=""/>
);

const CityImage = () => (
    <img src="http://lorempixel.com/400/200/city/1/" alt=""/>
);

ReactDOM.render(
    <Router history={browserHistory}>
                    <Route path="/" component={App}/>
                     <Route path="/about" component={About}>
                         <Route path="sport" component={SportImage}/>
                         <Route path="city" component={CityImage}/>
                     </Route>
    </Router>
    , document.getElementById("app"));
//ReactDOM.render(document.getElementById("app"), <TodoList/>);