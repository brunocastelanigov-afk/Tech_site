import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './ContactSection.css'

function ContactSection() {
    const { ref: animRef, isVisible } = useScrollAnimation()
    const dots = Array.from({ length: 11 }, (_, i) => (
        <span key={i} className="contact__dot" />
    ))

    return (
        <section className={`contact scroll-animate${isVisible ? ' scroll-animate--visible' : ''}`} id="contato" ref={animRef}>
            <div className="contact__ellipse contact__ellipse--left" />
            <div className="contact__ellipse contact__ellipse--right" />

            <div className="contact__inner">
                <div className="contact__content">
                    <div className="contact__hero">
                        <div className="contact__rect contact__rect--back" />
                        <div className="contact__dots">{dots}</div>
                        <img
                            src="/imgs/chatgpt_image_22_de_fev__de_2026__16_46_57_1.png"
                            alt="Equipe QueirozTech"
                            className="contact__hero-image"
                        />
                        <div className="contact__rect contact__rect--front" />
                    </div>

                    {/* Text content */}
                    <div className="contact__text">
                        <span className="contact__label">Atendimento online</span>
                        <h3 className="contact__heading">
                            Estamos esperando<br />
                            <em>seu contato!</em>
                        </h3>
                        <p className="contact__subtext">
                            Mais de 20 anos melhorando o mercado de <strong>tecnologia</strong>!
                        </p>
                        <Link to="/contato" className="contact__cta">
                            Entrar em contato
                            <svg
                                className="contact__cta-icon"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
