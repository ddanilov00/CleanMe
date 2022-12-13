import React, { Component } from 'react';
import Logo from '../../images/logo.svg';
import Services from '../Services/Services';
import Calculator from '../Calculator/Calculator';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


/*export default function Header() {
    return (
        <header>
            <div className='logo'>
                <img className='logo-image' src={Logo} alt='cleaning service' />
            </div>
            <div className='header-nav'>
                <a href='tel: 8005553535'>8-800-555-35-35</a>
                <a href='mailto: roflan@mail.ru'>roflan@mail.ru</a>
                <a href='tel: 8005553535'>Имееются вопросы?</a>
            </div> */
            
export default class Header extends Component {
    render() {
        return(
            <header>
            <div className='logo'>
                <img className='logo-image' src={Logo} alt='cleaning service' />
            </div>
            <div className='header-nav'>
                <a href='tel: 8005553535'>8-800-555-35-35</a>
                <a href='mailto: roflan@mail.ru'>roflan@mail.ru</a>
                <a href='tel: 8005553535'>Имееются вопросы?</a>
            </div>
            </header>
         /*   <>
            <Navbar collapseOnSelect expand = "md" bg = "dark" variant = "dark">
                <Container>
                    <Navbar.Brand href ="/">
                        <img
                        src = {Logo}
                        height = "120"
                        width = "120"
                        className = "d-inline-block align-top"
                        alt = "Logo"
                        />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
                        <Navbar.Collapse id ="responsive-navbar-nav">
                            <Nav className = "mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/Services">Services</Nav.Link>
                                <Nav.Link href="/Calculator">Calculator</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl 
                                type ="text"
                                placeholder = "Search"
                                className = "mr-sm-2"
                                />
                                <Button variant = "outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <switch>
                    <Route exact path = "/Calculator" Component= {Calculator} />
                </switch>

            </Router>
            </> */


            

        );
    }
}
