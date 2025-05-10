"use client"

import type { Region } from "@/lib/data"
import { useState } from "react"

type ItalyMapProps = {
  regionData: Region[]
}

export function ItalyMap({ regionData }: ItalyMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null)

  // Find max claim count for color scaling
  const maxClaims = Math.max(...regionData.map((r) => r.claimCount))

  // Get color intensity based on claim count (0-100%)
  const getColorIntensity = (claimCount: number) => {
    return Math.min(100, Math.max(10, Math.floor((claimCount / maxClaims) * 100)))
  }

  // Get region data by name
  const getRegionData = (name: string) => {
    return regionData.find((r) => r.name.toLowerCase() === name.toLowerCase())
  }

  // Simplified map of Italy with main regions
  // Each path represents a region
  return (
    <div className="relative w-full max-w-[600px]">
      <svg viewBox="0 0 600 600" className="w-full h-auto">
        {/* North */}
        <path
          d="M150,100 L250,80 L300,100 L350,90 L400,120 L380,170 L300,200 L250,190 L200,180 L150,150 Z"
          fill={`rgba(59, 130, 246, ${getColorIntensity(getRegionData("Lombardy")?.claimCount || 0) / 100})`}
          stroke="#333"
          strokeWidth="2"
          onMouseEnter={() => setHoveredRegion(getRegionData("Lombardy") || null)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        <path
          d="M380,170 L400,120 L450,130 L480,150 L470,200 L420,210 Z"
          fill={`rgba(59, 130, 246, ${getColorIntensity(getRegionData("Veneto")?.claimCount || 0) / 100})`}
          stroke="#333"
          strokeWidth="2"
          onMouseEnter={() => setHoveredRegion(getRegionData("Veneto") || null)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        <path
          d="M300,200 L380,170 L420,210 L400,250 L350,240 Z"
          fill={`rgba(59, 130, 246, ${getColorIntensity(getRegionData("Emilia-Romagna")?.claimCount || 0) / 100})`}
          stroke="#333"
          strokeWidth="2"
          onMouseEnter={() => setHoveredRegion(getRegionData("Emilia-Romagna") || null)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        <path
          d="M150,150 L200,180 L180,230 L130,220 Z"
          fill={`rgba(59, 130, 246, ${getColorIntensity(getRegionData("Piedmont")?.claimCount || 0) / 100})`}
          stroke="#333"
          strokeWidth="2"
          onMouseEnter={() => setHoveredRegion(getRegionData("Piedmont") || null)}
          onMouseLeave={() => setHoveredRegion(null)}
        />

        {/* Central */}
        <path
          d="M300,200 L350,240 L330,290 L280,300 L250,270 L270,230 Z"
          fill={`rgba(59, 130, 246, ${getColorIntensity(getRegionData("Tuscany")?.claimCount || 0) / 100})`}
          stroke="#333"
          strokeWidth="2"
          onMouseEnter={() => setHoveredRegion(getRegionData("Tuscany") || null)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        <path
          d="M350,240 L400,250 L380,300 L330,290 Z"
          fill={`rgba(59, 130, 246, ${getColorIntensity(getRegionData("Marche")?.claimCount || 0) / 100})`}
          stroke="#333"
          strokeWidth="2"
          onMouseEnter={() => setHoveredRegion(getRegionData("Marche") || null)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        <path
          d="M280,300 L330,290 L350,330 L320,350 L270,340 Z"
          fill={`rgba(59, 130, 246, ${getColorIntensity(getRegionData("Lazio")?.claimCount || 0) / 100})`}
          stroke="#333"
          strokeWidth="2"
          onMouseEnter={() => setHoveredRegion(getRegionData("Lazio") || null)}
          onMouseLeave={() => setHoveredRegion(null)}
        />

        {/* South */}
        <path
          d="M320,350 L350,330 L380,350 L370,400 L330,420 L300,390 Z"
          fill={`rgba(59, 130, 246, ${getColorIntensity(getRegionData("Campania")?.claimCount || 0) / 100})`}
          stroke="#333"
          strokeWidth="2"
          onMouseEnter={() => setHoveredRegion(getRegionData("Campania") || null)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        <path
          d="M380,350 L420,340 L450,370 L430,410 L370,400 Z"
          fill={`rgba(59, 130, 246, ${getColorIntensity(getRegionData("Apulia")?.claimCount || 0) / 100})`}
          stroke="#333"
          strokeWidth="2"
          onMouseEnter={() => setHoveredRegion(getRegionData("Apulia") || null)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        <path
          d="M330,420 L370,400 L430,410 L400,450 L350,460 Z"
          fill={`rgba(59, 130, 246, ${getColorIntensity(getRegionData("Calabria")?.claimCount || 0) / 100})`}
          stroke="#333"
          strokeWidth="2"
          onMouseEnter={() => setHoveredRegion(getRegionData("Calabria") || null)}
          onMouseLeave={() => setHoveredRegion(null)}
        />

        {/* Islands */}
        <path
          d="M350,500 L400,480 L450,500 L470,550 L420,570 L370,550 Z"
          fill={`rgba(59, 130, 246, ${getColorIntensity(getRegionData("Sicily")?.claimCount || 0) / 100})`}
          stroke="#333"
          strokeWidth="2"
          onMouseEnter={() => setHoveredRegion(getRegionData("Sicily") || null)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        <path
          d="M100,350 L150,330 L200,350 L180,400 L130,420 L80,380 Z"
          fill={`rgba(59, 130, 246, ${getColorIntensity(getRegionData("Sardinia")?.claimCount || 0) / 100})`}
          stroke="#333"
          strokeWidth="2"
          onMouseEnter={() => setHoveredRegion(getRegionData("Sardinia") || null)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
      </svg>

      {/* Tooltip */}
      {hoveredRegion && (
        <div className="absolute top-0 left-0 bg-white p-2 rounded shadow-md border text-sm">
          <p className="font-bold">{hoveredRegion.name}</p>
          <p>Claims: {hoveredRegion.claimCount}</p>
          <p>Total: €{hoveredRegion.totalAmount.toLocaleString()}</p>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-0 right-0 bg-white p-2 rounded shadow-md border text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-100"></div>
          <span>Low</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-300"></div>
          <span>Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500"></div>
          <span>High</span>
        </div>
      </div>
    </div>
  )
}
