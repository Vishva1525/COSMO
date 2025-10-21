declare global {
  interface Window {
    trackCTA?: (label: string) => void
  }
}

export {}
