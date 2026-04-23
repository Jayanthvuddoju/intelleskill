import * as React from "react"

import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

export default function CarouselOrientation() {
  return (
    <div className="flex justify-center items-center py-20 bg-slate-950">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-xs"
      >
        <CarouselContent className="-mt-1 h-[300px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
              <div className="p-1">
                <Card className="bg-white/5 border-white/10 hover:border-blue-500/50 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-12">
                    <span className="text-4xl font-bold text-white mb-2">{index + 1}</span>
                    <span className="text-blue-400 font-medium">Industry Case {index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white hover:text-blue-400" />
        <CarouselNext className="text-white hover:text-blue-400" />
      </Carousel>
    </div>
  )
}
