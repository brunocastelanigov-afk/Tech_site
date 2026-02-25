import { useState, useEffect } from 'react'

/**
 * Returns the current window width, debounced to avoid excessive re-renders.
 * @param {number} delay - Debounce delay in ms (default 150)
 */
export function useWindowWidth(delay = 150) {
    const [width, setWidth] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth : 1920
    )

    useEffect(() => {
        let timer
        const handleResize = () => {
            clearTimeout(timer)
            timer = setTimeout(() => setWidth(window.innerWidth), delay)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            clearTimeout(timer)
            window.removeEventListener('resize', handleResize)
        }
    }, [delay])

    return width
}
