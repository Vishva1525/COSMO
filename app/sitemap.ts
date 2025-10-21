import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.cosmofloor.com'
  
  const routes = [
    '',
    '/collections/marble',
    '/collections/granite', 
    '/collections/wood',
    '/collections/doors'
  ].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))

  return routes
}
