import React from 'react'
// import { FaBars } from 'react-icons/fa'
// import { Nav, NavbarContainer, NavLogo, Mobile, NavMenu, NavItem, NavLinks } from './Elements'
import './Navbar.scss';
function Navbar({open, setOpen}) {
    return (
        <div className="something">
            {/* <Nav>
                <NavbarContainer> */}
                    {/* <NavLogo to="/">Incredible India</NavLogo>
                    <Mobile>
                        <FaBars/>
                    </Mobile>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="states">States</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu> */}
                    <div className={"navbar " + (open && "active")}>
                        <div className="wrapper">
                            <div className="left">
                                <div className="itemContainer">
                                    <a href="#hero" className="logo">Incredible India</a>
                                </div>
                            </div>
                            <div className="right">
                                <div className="ham" onClick={() => setOpen(!open)}>
                                    <span className="line1"></span>
                                    <span className="line1"></span>
                                    <span className="line1"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </NavbarContainer>
            </Nav> */}
        </div>
    )
}

export default Navbar
