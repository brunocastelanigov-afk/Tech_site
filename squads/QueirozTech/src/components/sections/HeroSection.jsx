import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { assetUrl } from '../../utils/assetUrl'
import './HeroSection.css'

function HeroSection() {
    const { ref: animRef, isVisible } = useScrollAnimation()

    return (
        <section className={`hero scroll-animate${isVisible ? ' scroll-animate--visible' : ''}`} id="hero" ref={animRef}>
            <div className="hero__inner">
                {/* Text Column */}
                <div className="hero__text">
                    <h1 className="hero__headline">
                        TECNOLOGIA FACILIDADE PRODUTIVIDADE
                    </h1>
                    <p className="hero__subtitle">
                        Transformando tecnologia em resultado. Parcerias, consultoria e investimento para acelerar seu negócio.
                    </p>
                    <Link to="/contato" className="hero__cta">
                        Entrar em contato
                        <svg
                            className="hero__cta-icon"
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

                {/* Image Column + Decorations */}
                <div className="hero__visual">
                    {/* Decorations behind image */}
                    <div className="hero__ellipse hero__ellipse--lg" />
                    <div className="hero__ellipse hero__ellipse--md" />
                    <div className="hero__ellipse hero__ellipse--sm" />
                    <div className="hero__gradient-rect" />

                    {/* Hero image */}
                    <div className="hero__image-container">
                        <img
                            src={assetUrl('imgs/chatgpt_image_19_de_fev__de_2026__12_51_44_1.png')}
                            alt="Profissional da QueirozTech sorrindo"
                            className="hero__image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
