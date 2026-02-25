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
                        Somos a Queiroz Tech, uma empresa especializada em consultoria estratégica em Tecnologia. Atuamos no desenvolvimento e na comercialização de softwares e soluções digitais inovadoras que impulsionam negócios, aumentam a eficiência e geram resultados reais.
                    </p>
                    <p className="about__text">
                        Nossa missão é entregar estratégia, inovação e parceria. A Queiroz Tech oferece atendimento personalizado que gera economia, performance e crescimento sustentável para o seu negócio.
                    </p>
                    <p className="about__text">
                        Atuamos com as maiores distribuidoras e marcas globais, atestando qualidade aos produtos e serviços ofertados. Temos o compromisso de facilitar a produtividade dos nossos clientes garantindo a segurança necessária e indispensável.
                    </p>
                    <p className="about__text">
                        Os sócios fundadores da Queiroz Tech têm mais de 20 anos de experiência no Setor de TI e Comunicações.
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
