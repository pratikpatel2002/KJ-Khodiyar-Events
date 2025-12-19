'use client'

import React, { useState } from 'react'
import { FiPlay, FiPause } from 'react-icons/fi'

interface VideoPlaceholderProps {
  src?: string
  poster?: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  showControls?: boolean
  placeholderText?: string
}

const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({
  src,
  poster,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  showControls = false,
  placeholderText = 'Replace with your video: /videos/hero-banner.mp4',
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [showPlaceholder, setShowPlaceholder] = useState(!src)

  // If no video source, show placeholder
  if (!src || showPlaceholder) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-royal-900 via-maroon-900 to-black">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSIjZmZkNzAwIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-20"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <div className="w-24 h-24 bg-gold-500/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border-2 border-gold-500/50 animate-pulse">
              <FiPlay className="text-gold-400 text-4xl ml-1" />
            </div>
            <p className="text-lg font-semibold mb-2">Video Placeholder</p>
            <p className="text-sm text-white/80 max-w-md px-4">{placeholderText}</p>
            <p className="text-xs text-white/60 mt-2">Add your video file to replace this placeholder</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay && isPlaying}
        loop={loop}
        muted={muted}
        playsInline
        className="w-full h-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controls={showControls}
      />
      {!showControls && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 bg-gold-500/80 hover:bg-gold-500 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <FiPause className="text-white text-3xl" />
            ) : (
              <FiPlay className="text-white text-3xl ml-1" />
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default VideoPlaceholder










