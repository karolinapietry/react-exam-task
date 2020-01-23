import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css"
import styled from 'styled-components'



const Navigation = () => {

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="container">
                    <ul className="nav">
                        <li className="navLi">
                            <div className="navLiA" >
                                <Hyperlink to="/" exact={true}>
                                    Home
                                </Hyperlink>
                            </div>
                            <div className="navLiA">
                                <Hyperlink to="/catalog">
                                    Catalog
                                </Hyperlink>
                            </div>
                            <div className="navLiA">
                                <Hyperlink to="/about">
                                    About
                                </Hyperlink>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment >
    );
};

export default Navigation;


export const Hyperlink = styled(NavLink)`
      color: #ffff;
      font-size: 16px;
        font-weight: 100;
        padding: 15px 35px;
        display: inline-block;
        text-decoration: none;
    &.active {
          font-weight: bolder;
          color: #808080;
          display: block;
          margin: 0.4rem auto;
        
      }`;