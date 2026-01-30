import React from "react"
import { cn } from "@/lib/utils"

interface MobileFrameProps {
  children?: React.ReactNode
  imageSrc?: string
  alt?: string
  className?: string
}

export function MobileFrame({ children, imageSrc, alt = "App screenshot", className }: MobileFrameProps) {
  return (
    <div className={cn("relative mx-auto", className)}>
      {/* Phone Frame */}
      <div className="relative bg-mn-green-900 rounded-[2.5rem] p-2 shadow-xl">
        {/* Screen bezel */}
        <div className="bg-mn-green-800 rounded-[2rem] p-1">
          {/* Notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-mn-green-900 rounded-full z-10" />
          
          {/* Screen */}
          <div className="relative bg-mn-surface rounded-[1.75rem] overflow-hidden aspect-[9/19.5]">
            {imageSrc ? (
              <img 
                src={imageSrc || "/placeholder.svg"} 
                alt={alt}
                className="w-full h-full object-cover"
              />
            ) : children ? (
              children
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-mn-surface-alt">
                <div className="text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-mn-green-900/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-mn-green-900 font-bold text-2xl">M</span>
                  </div>
                  <p className="text-mn-muted text-sm">Screenshot do App</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
