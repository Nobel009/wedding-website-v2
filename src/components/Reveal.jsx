import { forwardRef, useEffect, useRef, useState } from 'react'

export const Reveal = forwardRef(function Reveal(
  { as: Component = 'section', className = '', children, delay = 0, ...props },
  forwardedRef,
) {
  const localRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const setRefs = (node) => {
    localRef.current = node
    if (typeof forwardedRef === 'function') {
      forwardedRef(node)
    } else if (forwardedRef) {
      forwardedRef.current = node
    }
  }

  useEffect(() => {
    const node = localRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={setRefs}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  )
})
