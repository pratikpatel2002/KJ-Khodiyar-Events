import React from 'react'

type LogoProps = {
  className?: string
  showText?: boolean
  variant?: 'header' | 'footer'
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  variant = 'header',
}) => {
  return (
    <div className={`flex items-center space-x-1 min-[360px]:space-x-1.5 min-[400px]:space-x-2 sm:space-x-3 ${className}`}>
      {/* Monogram */}
      <div className="relative flex-shrink-0">
        <div className="w-9 h-9 min-[360px]:w-10 min-[360px]:h-10 min-[400px]:w-12 min-[400px]:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-lg flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <span className="text-base min-[360px]:text-lg min-[400px]:text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white">KJ</span>
        </div>
        <div className="absolute -top-0.5 -right-0.5 min-[400px]:-top-1 min-[400px]:-right-1 w-2 h-2 min-[360px]:w-2.5 min-[360px]:h-2.5 min-[400px]:w-3 min-[400px]:h-3 sm:w-4 sm:h-4 bg-maroon-500 rounded-full"></div>
      </div>
      
      {/* Full Name */}
      {showText && (
        <div className="flex flex-col min-w-0">
          <span
            className={`text-[10px] min-[360px]:text-xs min-[400px]:text-sm sm:text-lg md:text-xl font-serif font-bold leading-tight transition-colors duration-300 truncate ${
              variant === 'footer'
                ? 'text-royal-100'
                : 'text-royal-600 dark:text-royal-100'
            }`}
          >
            KJ Khodiyar
          </span>
          <span
            className={`text-[8px] min-[360px]:text-[9px] min-[400px]:text-[10px] sm:text-sm font-semibold tracking-wider transition-colors duration-300 ${
              variant === 'footer'
                ? 'text-gold-400'
                : 'text-gold-600 dark:text-gold-400'
            }`}
          >
            EVENTS
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo



