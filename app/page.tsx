'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Minus, Plus } from 'lucide-react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Simple Counter</CardTitle>
          <CardDescription>
            Use the buttons below to increase or decrease the counter
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-2">
              {count}
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={decrement}
              className="w-16 h-16 rounded-full"
              aria-label="Decrease counter"
            >
              <Minus className="h-6 w-6" />
            </Button>
            <Button
              size="lg"
              onClick={increment}
              className="w-16 h-16 rounded-full"
              aria-label="Increase counter"
            >
              <Plus className="h-6 w-6" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
