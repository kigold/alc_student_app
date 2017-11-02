import React from 'react';
import { Menu } from 'semantic-ui-react';
import logo from '../../logo.svg';
import './styles.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const NavBar = ({path}) => (
    <Menu>
        <Menu.Menu>
            <Menu.Item active={path==='/'}>
                <Link to="/"> MyFullFeatureList</Link>
                <img src={logo} className="NavBar-logo" alt="logo" />                     
            </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
            <Menu.Item active={path==='/signup'}>
                <Link to="signup"> Sign Up</Link>
            </Menu.Item>
            <Menu.Item active={path==='/login'}>
                <Link to="login"> Login</Link>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
)

export default NavBar;