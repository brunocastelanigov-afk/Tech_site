import { useState, useEffect, useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import './SolutionsCarousel.css'

const baseSlides = [
    {
        image: '/imgs/___unlock_growth_with_smart_business_loans_1.png',
        title: 'Parcerias com Distribuidoras & Fabricantes de Tecnologia',
        descriptionItems: [
            'Representação comercial;',
            'Apoio técnico e comercial na expansão de canais;',
            'Desenvolvimento de projetos para setor privado e governo;',
            'Gestão de licitações e pré-vendas;',
            'Expansão de market share em regiões estratégicas (Nordeste, Sudeste e EUA);',
        ],
    },
    {
        image: '/imgs/listamos_30_empregos_bem_pagos_e_sem_curso_superior_1.png',
        title: 'Consultoria em Tecnologia',
        descriptionItems: [
            'Transformação digital;',
            'Arquitetura de TI;',
            'Clouds (AWS, Azure, GCP, Oracle);',
            'SAM – Software Asset Management;',
            'FinOps;',
            'Automação & IA;',
            'Segurança da informação;',
            'Projetos para setor público e privado;',
        ],
    },
    {
        image: '/imgs/num_rique_dossouhoui_p_1.png',
        title: 'Consultoria para Licitações e Governo',
        descriptionItems: [
            'Construção de soluções técnicas;',
            'Estratégia de editais;',
            'Montagem de propostas técnico-comerciais;',
            'Gestão de fornecedores;',
            'Planejamento para compras públicas;',
        ],
    },
]

const slides = [...baseSlides, ...baseSlides] // 6 slides to match design dots

function SolutionsCarousel() {
    const [current, setCurrent] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const intervalRef = useRef(null)
    const touchStartX = useRef(0)
    const { ref: animRef, isVisible } = useScrollAnimation()
    const windowWidth = useWindowWidth()
    const visibleCount = windowWidth <= 768 ? 1 : 3

    const maxIndex = slides.length - visibleCount

    // Auto-play: advance every 5s, pause on hover
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setCurrent((prev) => (prev < maxIndex ? prev + 1 : 0))
            }, 5000)
        }
        return () => clearInterval(intervalRef.current)
    }, [isPaused, maxIndex])

    const goTo = (index) => {
        if (index > maxIndex) index = maxIndex
        setCurrent(index)
    }

    const goPrev = () => {
        setCurrent((prev) => (prev > 0 ? prev - 1 : maxIndex))
    }

    const goNext = () => {
        setCurrent((prev) => (prev < maxIndex ? prev + 1 : 0))
    }

    // Touch / swipe handlers
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) {
            diff > 0 ? goNext() : goPrev()
        }
    }

    return (
        <section
            className={`solutions scroll-animate${isVisible ? ' scroll-animate--visible' : ''}`}
            id="solucoes"
            ref={animRef}
        >
            <div className="solutions__header">
                <span className="solutions__label">O que fazemos</span>
                <h2 className="solutions__title">Nossas Soluções</h2>
            </div>

            {/* Carousel */}
            <div
                className="solutions__carousel"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="solutions__track"
                    style={{ transform: `translateX(calc(-${current} * var(--slide-width, 33.3333%)))` }}
                >
                    {slides.map((slide, i) => (
                        <div className="solutions__card" key={i}>
                            <div className="solutions__card-image-wrap">
                                <img
                                    className="solutions__card-image"
                                    src={slide.image}
                                    alt={slide.title}
                                />
                            </div>
                            <h3 className="solutions__card-title">{slide.title}</h3>
                            <ul className="solutions__card-list">
                                {slide.descriptionItems.map((item, j) => (
                                    <li key={j} className="solutions__card-list-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="solutions__nav">
                {/* Prev arrow */}
                <button className="solutions__arrow" onClick={goPrev} aria-label="Anterior">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Dots */}
                <div className="solutions__dots">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`solutions__dot${i === current ? ' solutions__dot--active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Next arrow */}
                <button className="solutions__arrow" onClick={goNext} aria-label="Próximo">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            {/* CTA */}
            <a href="#contato" className="solutions__cta">
                Entrar em contato
                <svg
                    className="solutions__cta-icon"
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
        </section>
    )
}

export default SolutionsCarousel
