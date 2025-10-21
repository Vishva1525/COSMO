// Simple animation utility to replace Framer Motion temporarily
export const createAnimationProps = (delay = 0) => ({
  className: `animate-fade-in-up`,
  style: {
    animationDelay: `${delay}ms`,
    animationFillMode: 'both',
  }
})

export const createHoverProps = () => ({
  className: 'hover:scale-105 transition-transform duration-300'
})

export const createButtonProps = () => ({
  className: 'hover:scale-105 active:scale-95 transition-transform duration-200'
})
