import { useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <header className="navbar">
            <div className="navbar__inner">
                {/* Nav Links — left */}
                <nav>
                    <ul className="navbar__links">
                        <li><a href="#solucoes">Soluções</a></li>
                        <li><a href="#sobre">Sobre nós</a></li>
                        <li><a href="#parceiros">Nossos parceiros</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </nav>

                {/* Logo — center */}
                <a href="#" className="navbar__logo">
                    <img
                        src="/imgs/QUEIROZTECH_Logo_Preto_letraPreta.svg"
                        alt="QueirozTech"
                    />
                </a>

                {/* Hamburger Button — visible only on mobile */}
                <button
                    className="navbar__hamburger"
                    onClick={toggleMenu}
                    aria-label="Menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={`navbar__hamburger-bar${isMenuOpen ? ' open' : ''}`} />
                    <span className={`navbar__hamburger-bar${isMenuOpen ? ' open' : ''}`} />
                    <span className={`navbar__hamburger-bar${isMenuOpen ? ' open' : ''}`} />
                </button>

                {/* CTA — right */}
                <a href="#contato" className="navbar__cta">
                    Entrar em contato
                </a>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`navbar__mobile-menu${isMenuOpen ? ' navbar__mobile-menu--open' : ''}`}>
                <nav>
                    <ul className="navbar__mobile-links">
                        <li><a href="#solucoes" onClick={closeMenu}>Soluções</a></li>
                        <li><a href="#sobre" onClick={closeMenu}>Sobre nós</a></li>
                        <li><a href="#parceiros" onClick={closeMenu}>Nossos parceiros</a></li>
                        <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
                    </ul>
                </nav>
                <a href="#contato" className="navbar__mobile-cta" onClick={closeMenu}>
                    Entrar em contato
                </a>
            </div>
        </header>
    )
}

export default Navbar
