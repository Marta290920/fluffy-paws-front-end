import { Component } from "react";
import { Row } from 'simple-flexbox';
import FluffyPaws from '../assets/images/FluffyPaws.png';
import { NavLink } from 'react-router-dom';
import '../assets/css/header.css'
class Header extends Component{
    render() {
        return (
          <Row horizontal='spaced' vertical='center' flexGrow={ 1 } className="navBar navbar">
            <Row horizontal='start' vertical='center' style={ {width: '100%', backgroundColor: '#5ce1e6'} }>
              <NavLink to='/' className="logo-text">
                <span>
                  <img src={FluffyPaws} style={ { margin: "7px 3px 7px 3px", width: '80px', height: '80px' } } alt="FluffyPaws"/>
                </span>
              </NavLink>
                <span className="header-text" align="center" >Fluffy Paws</span>
                <NavLink to='/signin'>
                  <button className="sign-in">
                  Sign in
                  </button>
                </NavLink>
                <NavLink to='/signup'>
                  <button className="sign-in">
                  Sign Up
                  </button>
                </NavLink>
            </Row>
          </Row>
        );
      }
    }
      
    export default Header;