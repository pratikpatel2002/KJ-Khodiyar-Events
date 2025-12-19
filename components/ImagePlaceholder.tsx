'use client'

import React from 'react'
import Image from 'next/image'

interface ImagePlaceholderProps {
  src?: string
  alt: string
  width?: number
  height?: number
  className?: string
  category?: string
  priority?: boolean
}

// Generate a beautiful gradient placeholder based on category
const getGradientPlaceholder = (category?: string) => {
  const gradients: { [key: string]: string } = {
    wedding: 'from-gold-500 via-gold-600 to-maroon-600',
    birthday: 'from-royal-500 via-royal-600 to-gold-600',
    'baby-shower': 'from-maroon-500 via-maroon-600 to-royal-600',
    corporate: 'from-royal-600 via-royal-700 to-gold-600',
    festival: 'from-gold-600 via-maroon-600 to-royal-600',
    'haldi-mehendi': 'from-gold-500 via-maroon-500 to-gold-600',
    default: 'from-gray-400 via-gray-500 to-gray-600',
  }

  return gradients[category || 'default'] || gradients.default
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  category,
  priority = false,
}) => {
  // If no source, show beautiful placeholder
  if (!src) {
    const gradient = getGradientPlaceholder(category)
    
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} animate-pulse`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/90 z-10">
              <div className="text-5xl mb-3">📸</div>
              <p className="text-sm font-semibold mb-1">High-Quality Image Placeholder</p>
              <p className="text-xs text-white/70">Replace with: /images/{category || 'events'}/image.jpg</p>
            </div>
          </div>
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>
      </div>
    )
  }

  // If source exists, use Next.js Image component
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        priority={priority}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmQ3MDAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM4MDAwMjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==`}
      />
    </div>
  )
}

export default ImagePlaceholder









