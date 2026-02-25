import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './BrandSection.css'

function BrandSection() {
    const { ref: animRef, isVisible } = useScrollAnimation()
    return (
        <section className={`brand scroll-animate${isVisible ? ' scroll-animate--visible' : ''}`} id="diferencial" ref={animRef}>
            <div className="brand__inner">
                {/* Section title */}
                <div className="brand__section-title">
                    <span className="brand__section-label">Porque nos escolher?</span>
                    <h2 className="brand__section-heading">Nosso Diferencial</h2>
                </div>

                {/* Content: logo + divider + text */}
                <div className="brand__content">
                    {/* Logo */}
                    <div className="brand__logo-wrap">
                        <img
                            src="/imgs/queiroztech_logo_preto_letrapreta.png"
                            alt="QueirozTech Logo"
                            className="brand__logo"
                        />
                    </div>

                    {/* Vertical divider */}
                    <div className="brand__divider" />

                    {/* Descriptive text */}
                    <div className="brand__text">
                        <p className="brand__description">
                            Com mais de <strong>1 década</strong> de experiência em tecnologia e inovação, atuamos no <strong>Brasil</strong> e nos <strong>Estados Unidos</strong> conectando empresas a distribuidores e fabricantes estratégicos. Somos especialistas em projetos para o <strong>setor público</strong> e conduzimos consultorias orientadas a resultados, unindo tecnologia, automação e inteligência artificial. Também apoiamos o crescimento do ecossistema por meio da capacidade de <strong>investimento em startups</strong> e iniciativas inovadoras.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrandSection
