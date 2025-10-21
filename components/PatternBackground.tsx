'use client'

import { useEffect, useRef } from 'react'

interface PatternBackgroundProps {
  className?: string
  squareCount?: number
  minSize?: number
  maxSize?: number
  opacity?: number
}

export default function PatternBackground({ 
  className = '', 
  squareCount = 40,
  minSize = 60,
  maxSize = 120,
  opacity = 0.1
}: PatternBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()
    
    // Clear existing squares
    container.innerHTML = ''
    
    // Create pattern squares
    for (let i = 0; i < squareCount; i++) {
      const square = document.createElement('div')
      
      // Random size between minSize and maxSize
      const size = Math.random() * (maxSize - minSize) + minSize
      
      // Random position
      const x = Math.random() * (containerRect.width - size)
      const y = Math.random() * (containerRect.height - size)
      
      // Apply styles
      square.style.position = 'absolute'
      square.style.width = `${size}px`
      square.style.height = `${size}px`
      square.style.left = `${x}px`
      square.style.top = `${y}px`
      square.style.backgroundImage = 'url(/assets/bg.png)'
      square.style.backgroundSize = 'cover'
      square.style.backgroundPosition = 'center'
      square.style.backgroundRepeat = 'no-repeat'
      square.style.borderRadius = '12px'
      square.style.opacity = opacity.toString()
      square.style.pointerEvents = 'none'
      square.style.zIndex = '1'
      
      // Add subtle animation
      square.style.transition = 'transform 0.3s ease-out'
      
      // Add hover effect
      square.addEventListener('mouseenter', () => {
        square.style.transform = 'scale(1.05)'
        square.style.opacity = (opacity * 1.5).toString()
      })
      
      square.addEventListener('mouseleave', () => {
        square.style.transform = 'scale(1)'
        square.style.opacity = opacity.toString()
      })
      
      container.appendChild(square)
    }
  }, [squareCount, minSize, maxSize, opacity])

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  )
}
