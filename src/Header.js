import React, { Component } from 'react';
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <ul>
                    <li><a>Projeto</a></li>
                    <li><a>Horários</a></li>
                    <li><a>Equipa</a></li>
                    <li><a>Galeria</a></li>
                    <li><a>Aluguer de salas</a></li>
                    <li><a>Contactos</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
