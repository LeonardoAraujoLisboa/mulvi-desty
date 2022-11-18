import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap'
import './styles.scss'
import {ReactComponent as Logo} from '../../assets/logo-mulvi.svg'
import {ReactComponent as MenuIcon} from '../../assets/menu-icon.svg'

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [expand, setExpand] = useState(true)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
    function handleResize() {
        const widthResizing = window.innerWidth
        
        if (widthResizing <= 1439) {
            setExpand(false)
        } else {
            setExpand(true)
            setIsOpen(false)
        }
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <Navbar expand={expand} className={`container-web ${isOpen ? 'menu-open' : 'menu-close'}`}>
            <NavbarBrand href="/" >
                <Logo />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='me-auto' navbar>
                    <NavItem onClick={toggle}>
                        <NavLink href="#benefits">Vantagens</NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink href="#rate">
                            Taxas
                        </NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink href="#solutions">
                            Soluções
                        </NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink href="#contents">
                            Conteúdos
                        </NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink href="#faq">
                        Perguntas Frequentes
                        </NavLink>
                    </NavItem>
                    <NavItem className='whoWeAre' onClick={toggle}>
                        <NavLink href="#whoWeAre">
                        Quem Somos
                        </NavLink>
                    </NavItem>
                    <NavItem className='my-account' onClick={toggle}>
                        <NavLink href="#whoWeAre">
                        Minha Conta
                        </NavLink>
                    </NavItem>
                    <NavItem className='be-mulvi' onClick={toggle}>
                        <NavLink href="#whoWeAre">
                        Quero ser mulvi
                        </NavLink>
                    </NavItem>
                </Nav>
                { isOpen && 
                    <div className='menu-icon'>
                        <MenuIcon />
                    </div>
                }
            </Collapse>
        </Navbar>
    )
}

export default Menu