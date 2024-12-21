import React from 'react'
import { Card, CardContent } from "@/components/ui/card"


interface StatsCardProps {
    icon: React.ReactNode
    value: string
    label: string
    className?: string
  }

const StatsCard = ({ icon, value, label, className }: StatsCardProps) => {
  return (
    <Card className={` ${className}`}>
    <CardContent className="flex items-center gap-4 p-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </CardContent>
  </Card>
  )
}

export default StatsCard
