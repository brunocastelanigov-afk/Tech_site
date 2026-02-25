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
                            Com mais de uma década de atuação em tecnologia e inovação, a Queiroz Tech estrutura soluções estratégicas para organizações que operam em ambientes de alta exigência técnica e regulatória.
                            <br />
                            <br />
                            Atendemos os setores público e privado em todo o Brasil, conectando empresas a distribuidores e fabricantes estratégicos, com suporte de parceiros globais e cadeias de fornecimento consolidadas.
                            <br />
                            <br />
                            Desenvolvemos e executamos projetos complexos com foco em eficiência operacional, governança, conformidade e geração de valor mensurável. Integramos tecnologia, automação e inteligência artificial para transformar estruturas operacionais em ativos estratégicos de crescimento.
                            <br />
                            <br />
                            Atuamos como estruturadores de negócios e soluções, combinando inteligência de mercado, articulação institucional e capacidade técnica para viabilizar projetos de grande escala com segurança e previsibilidade.
                            <br />
                            <br />
                            Mais do que implementar tecnologia, entregamos performance, escalabilidade e vantagem competitiva sustentável.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrandSection
