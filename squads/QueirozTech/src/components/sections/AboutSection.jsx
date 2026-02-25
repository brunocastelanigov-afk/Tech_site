import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './AboutSection.css'

function AboutSection() {
    const { ref: animRef, isVisible } = useScrollAnimation()
    return (
        <section className={`about scroll-animate${isVisible ? ' scroll-animate--visible' : ''}`} id="sobre" ref={animRef}>
            <div className="about__bg">
                <img
                    className="about__bg-image"
                    src="/imgs/chatgpt_image_16_de_fev__de_2026__09_12_48_1.png"
                    alt=""
                    aria-hidden="true"
                />
                <div className="about__bg-overlay" />
            </div>

            <div className="about__inner">
                <div className="about__content">
                    <span className="about__label">Sobre nós</span>
                    <h2 className="about__headline">QueirozTech</h2>
                    <p className="about__text">
                        A QueirozTech é uma empresa especializada em consultoria de tecnologia, parcerias estratégicas e investimentos em inovação. Atuamos conectando empresas, distribuidores, fabricantes e startups a um ecossistema completo de modernização, eficiência e crescimento. Nosso compromisso é transformar desafios tecnológicos em oportunidades reais de resultado e escala.
                    </p>
                    <a href="#contato" className="about__cta">
                        Saber mais
                        <svg
                            className="about__cta-icon"
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
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
