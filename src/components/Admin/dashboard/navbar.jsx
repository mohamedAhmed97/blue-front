import React from 'react'
import { Navbar, Nav, Dropdown, Icon } from 'rsuite'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Body>
                    <Nav>
                        <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
                        <Nav.Item >
                            <Link style={{color: "#575757"}} to="/admin/category">
                                Categories
                            </Link>
                        </Nav.Item>
                        <Nav.Item>brands</Nav.Item>
                        <Nav.Item>Products</Nav.Item>
                    </Nav>
                    <Nav pullRight>
                        <Dropdown icon={<Icon icon="user" />} >
                            <Dropdown.Item>logout</Dropdown.Item>
                        </Dropdown>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        );

    }
}
export default NavBar;    