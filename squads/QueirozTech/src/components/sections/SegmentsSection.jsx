import { useState, useEffect, useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import './SegmentsSection.css'

const baseSlides = [
    {
        image: '/imgs/___unlock_growth_with_smart_business_loans_1.png',
        title: 'Distribuidoras de TI',
        description:
            'Apoiamos distribuidoras de TI na evolução de suas operações por meio da integração de sistemas e otimização de fluxos comerciais e logísticos. Nossas soluções tecnológicas ampliam eficiência, competitividade e garantem crescimento com segurança e escalabilidade.',
    },
    {
        image: '/imgs/listamos_30_empregos_bem_pagos_e_sem_curso_superior_1.png',
        title: 'Setor Público',
        description:
            'Atuamos ao lado do setor público na modernização de processos, digitalização de serviços e aumento da eficiência operacional.',
    },
    {
        image: '/imgs/num_rique_dossouhoui_p_1.png',
        title: 'Varejo e e-commerce',
        description:
            'Atuamos ao lado do varejo e e-commerce otimizando operações, integrando plataformas e melhorando a experiência do cliente. Implementamos soluções tecnológicas que ampliam a eficiência, fortalecem a presença digital e impulsionam resultados de forma segura e escalável.',
    },
]

const segmentSlides = [...baseSlides, ...baseSlides] // 6 slides to match design dots

function SegmentsSection() {
    const [current, setCurrent] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const intervalRef = useRef(null)
    const touchStartX = useRef(0)
    const { ref: animRef, isVisible } = useScrollAnimation()
    const windowWidth = useWindowWidth()
    const visibleCount = windowWidth <= 768 ? 1 : 3

    const maxIndex = segmentSlides.length - visibleCount

    // Auto-play: advance every 5s, pause on hover
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setCurrent((prev) => (prev < maxIndex ? prev + 1 : 0))
            }, 5000)
        }
        return () => clearInterval(intervalRef.current)
    }, [isPaused, maxIndex])

    const goPrev = () => {
        setCurrent((prev) => (prev > 0 ? prev - 1 : maxIndex))
    }

    const goNext = () => {
        setCurrent((prev) => (prev < maxIndex ? prev + 1 : 0))
    }

    const goTo = (index) => {
        if (index > maxIndex) index = maxIndex
        setCurrent(index)
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
            className={`segments scroll-animate${isVisible ? ' scroll-animate--visible' : ''}`}
            id="segmentos"
            ref={animRef}
        >
            <div className="segments__inner">
                {/* Section header */}
                <div className="segments__header">
                    <span className="segments__label">Como podemos lhe ajudar?</span>
                    <h2 className="segments__title">Áreas de atuação</h2>
                </div>

                {/* Carousel with side arrows */}
                <div
                    className="segments__carousel-wrap"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Prev arrow */}
                    <button className="segments__arrow segments__arrow--prev" onClick={goPrev} aria-label="Anterior">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Carousel */}
                    <div className="segments__carousel">
                        <div
                            className="segments__track"
                            style={{ transform: `translateX(calc(-${current} * var(--translate-step, 33.3333%)))` }}
                        >
                            {segmentSlides.map((slide, i) => (
                                <div className="segments__slide" key={i}>
                                    <div className="segments__slide-image-wrap">
                                        <img
                                            className="segments__slide-image"
                                            src={slide.image}
                                            alt={slide.title}
                                        />
                                    </div>
                                    <h3 className="segments__slide-title">{slide.title}</h3>
                                    <p className="segments__slide-desc">{slide.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next arrow */}
                    <button className="segments__arrow segments__arrow--next" onClick={goNext} aria-label="Próximo">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                {/* Dots */}
                <div className="segments__dots">
                    {segmentSlides.map((_, i) => (
                        <button
                            key={i}
                            className={`segments__dot${i === current ? ' segments__dot--active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SegmentsSection
