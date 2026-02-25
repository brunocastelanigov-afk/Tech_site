import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './PartnersSection.css'

const partnersRow1 = [
    { name: 'Scansource', file: 'image_159.png', width: 180, height: 36, opacity: 1 },
    { name: 'TD SYNNEX', file: 'image_160.png', width: 200, height: 40, opacity: 0.5 },
    { name: 'QGIS', file: 'image_161.png', width: 110, height: 46, opacity: 1 },
    { name: 'Sigma One', file: 'image_removebg_preview_1.png', width: 150, height: 39, opacity: 1 },
]

const partnersRow2 = [
    { name: 'Simpress', file: 'image_164.png', width: 140, height: 40, opacity: 1 },
    { name: 'Solo Network', file: 'image_162.png', width: 90, height: 40, opacity: 0.5 },
    { name: 'Solo Iron', file: 'solo_iron_logo.svg', width: 80, height: 55, opacity: 1 },
    { name: 'Adistec', file: 'adistec_white.svg', width: 145, height: 40, opacity: 1 },
    { name: 'Multicloud', file: 'image_163.png', width: 145, height: 55, opacity: 1 },
]

const partnersRow3 = [
    { name: 'Positivo Tecnologia', file: 'image_165.png', width: 125, height: 47, opacity: 0.5 },
    { name: 'ACorp do Brasil', file: 'image_166.png', width: 140, height: 42, opacity: 0.65 },
]
const PartnerLogo = ({ partner }) => (
    <div className="partners__logo" style={{ opacity: partner.opacity }}>
        <img
            src={`/imgs/${partner.file}`}
            alt={`${partner.name} Logo`}
            style={{ width: partner.width, height: partner.height }}
        />
    </div>
)

function PartnersSection() {
    const { ref: animRef, isVisible } = useScrollAnimation()
    return (
        <section className={`partners scroll-animate${isVisible ? ' scroll-animate--visible' : ''}`} id="parceiros" ref={animRef}>
            <div className="partners__header">
                <span className="partners__label">Nossos Parceiros</span>
                <h2 className="partners__title">Empresas Parceiras</h2>
            </div>

            <div className="partners__grid">
                {/* Row 1: 4 logos */}
                <div className="partners__row">
                    {partnersRow1.map((p) => (
                        <PartnerLogo key={p.name} partner={p} />
                    ))}
                </div>

                {/* Row 2: 5 logos */}
                <div className="partners__row">
                    {partnersRow2.map((p) => (
                        <PartnerLogo key={p.name} partner={p} />
                    ))}
                </div>

                {/* Row 3: 2 logos */}
                <div className="partners__row">
                    {partnersRow3.map((p) => (
                        <PartnerLogo key={p.name} partner={p} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default PartnersSection
