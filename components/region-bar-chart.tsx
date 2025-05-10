"use client"

import type { Region } from "@/lib/data"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"

type RegionBarChartProps = {
  data: Region[]
}

export function RegionBarChart({ data }: RegionBarChartProps) {
  // Sort data by claim count in descending order and take top 10
  const sortedData = [...data]
    .sort((a, b) => b.claimCount - a.claimCount)
    .slice(0, 10)
    .map((region) => ({
      name: region.name,
      claims: region.claimCount,
    }))

  return (
    <ChartContainer
      config={{
        claims: {
          label: "Claims",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={sortedData} layout="vertical" margin={{ top: 10, right: 30, left: 100, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="claims" fill="var(--color-claims)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
