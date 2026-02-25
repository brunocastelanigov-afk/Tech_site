import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import './ServicesGrid.css'

const services = [
    {
        icon: '/imgs/server_1.png',
        title: 'Modernização de Servidores',
        description: 'Atualização e otimização de ambientes para mais desempenho e confiabilidade.',
        iconSize: { width: 83, height: 83 },
        shadow: '7px 11px 6.3px rgba(28, 119, 199, 0.19)',
    },
    {
        icon: '/imgs/cloud_1.png',
        title: 'Implementação de cloud',
        description: 'Migração e estruturação em nuvem com foco em escalabilidade e eficiência.',
        iconSize: { width: 108, height: 83 },
        shadow: '9px 7px 7px rgba(51, 123, 216, 0.15)',
    },
    {
        icon: '/imgs/lupa_1.png',
        title: 'SAM & FinOps',
        description: 'Gestão inteligente de ativos e custos para controle e otimização financeira.',
        iconSize: { width: 100, height: 83 },
        shadow: '9px 7px 7px rgba(64, 105, 171, 0.15)',
    },
    {
        icon: '/imgs/hardware_1.png',
        title: 'Automação e IA',
        description: 'Soluções inteligentes que aumentam produtividade e reduzem tarefas manuais.',
        iconSize: { width: 113, height: 114 },
        shadow: '9px 7px 7px rgba(64, 97, 157, 0.15)',
    },
    {
        icon: '/imgs/cheet_1.png',
        title: 'Consultoria para licitações',
        description: 'Apoio estratégico e técnico para participação e sucesso em processos públicos.',
        iconSize: { width: 109, height: 110 },
        shadow: '9px 7px 7px rgba(52, 95, 154, 0.15)',
    },
    {
        icon: '/imgs/graphic_1.png',
        title: 'Análise e otimização de infraestrutura',
        description: 'Diagnóstico e melhorias para máxima performance operacional.',
        iconSize: { width: 109, height: 110 },
        shadow: '9px 7px 7px rgba(69, 103, 159, 0.15)',
    },
    {
        icon: '/imgs/enginer_1.png',
        title: 'Implantação de ERPs e sistemas',
        description: 'Integração e implementação de plataformas de gestão empresarial.',
        iconSize: { width: 124, height: 125 },
        shadow: '9px 7px 7px rgba(51, 86, 136, 0.15)',
    },
    {
        icon: '/imgs/secure_1.png',
        title: 'Segurança e monitoramento',
        description: 'Proteção contínua com controle, análise e resposta a ameaças digitais.',
        iconSize: { width: 100, height: 101 },
        shadow: '9px 7px 7px rgba(69, 104, 152, 0.15)',
    },
]

function ServicesGrid() {
    const { ref: animRef, isVisible } = useScrollAnimation()
    const [showAll, setShowAll] = useState(false)
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth <= 768

    const visibleServices = isMobile && !showAll ? services.slice(0, 3) : services
    return (
        <section className={`services scroll-animate${isVisible ? ' scroll-animate--visible' : ''}`} id="servicos" ref={animRef}>
            {/* Decorative blurred ellipses */}
            <div className="services__ellipse services__ellipse--left" />
            <div className="services__ellipse services__ellipse--right" />

            <div className="services__inner">
                {/* Section header */}
                <div className="services__header">
                    <div className="services__title-wrap">
                        <div className="services__title-line" />
                        <h2 className="services__title">Portfólio &amp; Soluções</h2>
                    </div>
                </div>

                {/* Grid of service cards */}
                <div className="services__grid">
                    {visibleServices.map((service, i) => (
                        <div className="services__card" key={i}>
                            <div className="services__card-icon-wrap">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="services__card-icon"
                                    style={{
                                        width: `${service.iconSize.width}px`,
                                        height: `${service.iconSize.height}px`,
                                        filter: `drop-shadow(${service.shadow})`,
                                    }}
                                />
                            </div>
                            <h3 className="services__card-title">{service.title}</h3>
                            <p className="services__card-desc">{service.description}</p>
                        </div>
                    ))}
                </div>

                {isMobile && !showAll && (
                    <button className="services__view-more" onClick={() => setShowAll(true)}>
                        Ver mais
                    </button>
                )}
            </div>
        </section>
    )
}

export default ServicesGrid
