import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap'
import './styles.scss'
import {ReactComponent as Logo} from '../../assets/logo-mulvi.svg'
import {ReactComponent as MenuIcon} from '../../assets/menu-icon.svg'

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [expand, setExpand] = useState(true)
    const [benefitsActive, setBenefitsActive] = useState(false)
    const [rateActive, setRateActive] = useState(false)
    const [solutionsActive, setSolutionsActive] = useState(false)
    const [contentsActive, setContentsActive] = useState(false)
    const [faqActive, setFaqActive] = useState(false)
    const [whoWeAreActive, setWhoWeAreActive] = useState(false)

    const toggle = () => {
        if (!expand) {
            setIsOpen(!isOpen)
        }
    }

    const handleClickMenuMobile = () => {
        if (!expand) {
            setIsOpen(!isOpen)
            window.location.href = '/#top'
        }
    }

    const handleClickMenu = (menu: string) => {
        if (menu === 'benefits') {
            setBenefitsActive(true)
            setRateActive(false)
            setSolutionsActive(false)
            setContentsActive(false)
            setFaqActive(false)
            setWhoWeAreActive(false)
        } else if (menu === 'rate') {
            setRateActive(true)
            setBenefitsActive(false)
            setSolutionsActive(false)
            setContentsActive(false)
            setFaqActive(false)
            setWhoWeAreActive(false)
        } else if (menu === 'solutions') {
            setSolutionsActive(true)
            setBenefitsActive(false)
            setRateActive(false)
            setContentsActive(false)
            setFaqActive(false)
            setWhoWeAreActive(false)
        } else if (menu === 'contents') {
            setContentsActive(true)
            setRateActive(false)
            setSolutionsActive(false)
            setBenefitsActive(false)
            setFaqActive(false)
            setWhoWeAreActive(false)
        } else if (menu === 'faq') {
            setFaqActive(true)
            setRateActive(false)
            setSolutionsActive(false)
            setBenefitsActive(false)
            setContentsActive(false)
            setWhoWeAreActive(false)
        } else if (menu === 'whoWeAre') {
            setWhoWeAreActive(true)
            setRateActive(false)
            setSolutionsActive(false)
            setBenefitsActive(false)
            setContentsActive(false)
            setFaqActive(false)
        }
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
        <Navbar expand={expand} fixed={'top'} className={`container-web ${isOpen ? 'menu-open' : 'menu-close'}`}id='top'>
            <NavbarBrand href="/" >
                <Logo />
            </NavbarBrand>
            <a href='#top'>
                <NavbarToggler onClick={handleClickMenuMobile} />
            </a>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='me-auto' navbar>
                    <NavItem onClick={toggle}>
                        <NavLink href="#benefits" className={`link-menu ${benefitsActive ? 'active': ''}`} id="#benefits" onClick={() => handleClickMenu('benefits')}>Vantagens</NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink href="#rate" className={`link-menu ${rateActive ? 'active': ''}`} onClick={() => handleClickMenu('rate')}>
                            Taxas
                        </NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink href="#solutions" className={`link-menu ${solutionsActive ? 'active': ''}`} onClick={() => handleClickMenu('solutions')}>
                            Soluções
                        </NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink href="#contents" className={`link-menu ${contentsActive ? 'active': ''}`} onClick={() => handleClickMenu('contents')}>
                            Conteúdos
                        </NavLink>
                    </NavItem>
                    <NavItem onClick={toggle}>
                        <NavLink href="#faq" className={`link-menu ${faqActive ? 'active': ''}`} onClick={() => handleClickMenu('faq')}>
                        Perguntas Frequentes
                        </NavLink>
                    </NavItem>
                    <NavItem className='whoWeAre' onClick={toggle}>
                        <NavLink href="#whoWeAre" className={`link-menu ${whoWeAreActive ? 'active': ''}`} onClick={() => handleClickMenu('whoWeAre')}>
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