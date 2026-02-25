import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(options = {}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px', ...options }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { ref, isVisible }
}
