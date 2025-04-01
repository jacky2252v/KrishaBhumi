"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
    const images = ["/img/imgOne.jpg", "/img/imgTwo.jpg", "/img/imgThree.jpg", "/img/imgFour.jpg"]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        let interval: NodeJS.Timeout

        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
            }, 5000)
        }

        return () => clearInterval(interval)
    }, [images.length, isAutoPlaying])

    const goToPrevious = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const goToNext = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false)
        setCurrentIndex(index)
    }

    return (
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-gray-100 dark:bg-gray-900">
            {/* Main Image */}
            <div className="w-full h-full">
                <img
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                />

                {/* Overlay with text */}
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome to Krisha Bhumi</h1>
                    <p className="text-lg md:text-xl max-w-2xl">Your trusted partner for quality construction services</p>
                </div>
            </div>

            {/* Navigation Arrows */}
            <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full"
                onClick={goToPrevious}
            >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous slide</span>
            </Button>

            <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full"
                onClick={goToNext}
            >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next slide</span>
            </Button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hero
