import { useEffect, useRef, useState } from 'react'

import './Menu.css'

import logo from "../../imagens/logo.png"
import instagram from "../../imagens/instagram.svg"
import whatsapp from "../../imagens/whatsapp.svg"

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const menuRef = useRef(null)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) setIsOpen(false)
            updateActiveSection()
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isOpen])

    const updateActiveSection = () => {
        const sections = document.querySelectorAll('section')
        let currentSection = 'home'

        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            const threshold = window.innerHeight / 3

            if (window.scrollY >= sectionTop - threshold && window.scrollY < sectionTop + sectionHeight - threshold) {
                currentSection = section.getAttribute('id')
            }
        })

        setActiveSection(currentSection)
        window.history.replaceState(null, '', `#${currentSection}`)
    }

    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            const targetElement = document.querySelector(hash)
            if (targetElement) {
                targetElement.scrollIntoView()
            }
        }
    }, [])

    const handleLinkClick = sectionId => {
        closeMenu()
        window.history.pushState(null, '', `#${sectionId}`)
        document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="header">
            <nav className="nav container" ref={menuRef}>
                <a href="#home" onClick={() => handleLinkClick('home')}>
                    <img src={logo} className='img__logo' alt="logo" />
                </a>

                <div className={`nav__menu ${isOpen ? 'active__menu' : ''}`}>
                    <ul>
                        <li className={activeSection === 'home' ? 'active' : ''}>
                            <a href="#home" className='nav__link' onClick={() => handleLinkClick('home')}>
                                <i className="uil uil-home nav__icon"></i> Início
                            </a>
                        </li>
                        <li className={activeSection === 'services' ? 'active' : ''}>
                            <a href="#services" className='nav__link' onClick={() => handleLinkClick('services')}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Serviços
                            </a>
                        </li>
                        <li className={activeSection === 'depoimentos' ? 'active' : ''}>
                            <a href="#depoimentos" className='nav__link' onClick={() => handleLinkClick('depoimentos')}>
                                <i className="uil uil-user nav__icon"></i> Quem somos
                            </a>
                        </li>
                        <li className={activeSection === 'gallery' ? 'active' : ''}>
                            <a href="#gallery" className='nav__link' onClick={() => handleLinkClick('gallery')}>
                                <i className="uil uil-image nav__icon"></i> Galeria
                            </a>
                        </li>
                        <li className={activeSection === 'localization' ? 'active' : ''}>
                            <a href="#localization" className='nav__link' onClick={() => handleLinkClick('localization')}>
                                <i className="uil uil-map-marker nav__icon"></i> Localização
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav__socials">
                    <a href="https://www.instagram.com" target="_blank"><img src={instagram} alt="instagram icon" /></a>
                    <a href="https://www.whatsapp.com" target="_blank"><img src={whatsapp} alt="whatsapp icon" /></a>

                    <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Menu
