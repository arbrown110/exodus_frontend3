import React from 'react'
import { NavLink } from 'react-router-dom'


const links = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: "white"
}

const NavBar = () => {
    return (
        <div>
            <NavLink
                to="/" exact style={links} activeStyle={{
                    background: 'darkblue'
                }}
            >Home
            </NavLink>
            
            <NavLink
                to="/adventures" exact style={links} activeStyle={{
                    background: 'darkblue'
             }}
            >
                What I've done so far
            </NavLink>
            <NavLink
                to="/adventure/new" exact style={links} activeStyle={{
                    background: 'darkblue'
                }}
            >
                Add new Topic
            </NavLink>
            <NavLink
                to="/adventure/:id" exact style={links} activeStyle={{
                    backgorund: 'darkblue'
                }}>
                Current
            </NavLink>
                
            <NavLink
                to="/About" exact style={links} activeStyle={{
                    background: 'darkblue'
                }}
            >
                About
            </NavLink>

            <NavLink
                to="/Contacts" exact style={links} activeStyle={{
                    background: 'darkblue'
             }}
            >Contacts
            </NavLink>
            <NavLink
                to="/Links" exact style={links} activeStyle={{
                    background: 'darkblue'
             }}
            >Links of more Info
            </NavLink>
            
        </div>
    )
}

export default NavBar
