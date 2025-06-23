"use client"

import type React from "react"

import Image from "../assets/effect-image.jpg"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Option {
  id: number
  title: string
  subtitle: string
  backgroundImage: string
}

const options: Option[] = [
  {
    id: 1,
    title: "GULHAZ dévoile sa nouvelle app Minest",
    subtitle:
      "Une app destinée à réduire sa dépendance aux réseaux sociaux tout en améliorant sa productivité principalement destiné au étudiant il tente aujourd'hui...",

    backgroundImage: Image,
  },
  {
    id: 2,
    title: "GULHAZ dévoile sa nouvelle app Minest",
    subtitle:
      "Une app destinée à réduire sa dépendance aux réseaux sociaux tout en améliorant sa productivité principalement destiné au étudiant il tente aujourd'hui...",

    backgroundImage: Image,
  },
  {
    id: 3,
    title: "GULHAZ dévoile sa nouvelle app Minest",
    subtitle:
      "Une app destinée à réduire sa dépendance aux réseaux sociaux tout en améliorant sa productivité principalement destiné au étudiant il tente aujourd'hui...",

    backgroundImage: Image,
  },
  {
    id: 4,
    title: "GULHAZ dévoile sa nouvelle app Minest",
    subtitle:
      "Une app destinée à réduire sa dépendance aux réseaux sociaux tout en améliorant sa productivité principalement destiné au étudiant il tente aujourd'hui...",
    backgroundImage: Image,
  },
  {
    id: 5,
    title: "GULHAZ dévoile sa nouvelle app Minest",
    subtitle:
      "Une app destinée à réduire sa dépendance aux réseaux sociaux tout en améliorant sa productivité principalement destiné au étudiant il tente aujourd'hui...",
    backgroundImage: Image,
  },
]

export default function EmailSection() {
  const [activeOption, setActiveOption] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const isDragging = useRef(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % options.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + options.length) % options.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return
    startX.current = e.touches[0].clientX
    isDragging.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !isDragging.current) return
    e.preventDefault()
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isMobile || !isDragging.current) return

    const endX = e.changedTouches[0].clientX
    const diffX = startX.current - endX

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    isDragging.current = false
  }

  const handleMouseStart = (e: React.MouseEvent) => {
    if (!isMobile) return
    startX.current = e.clientX
    isDragging.current = true
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile || !isDragging.current) return
    e.preventDefault()
  }

  const handleMouseEnd = (e: React.MouseEvent) => {
    if (!isMobile || !isDragging.current) return

    const endX = e.clientX
    const diffX = startX.current - endX

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    isDragging.current = false
  }

  if (isMobile) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center px-4 py-8 font-sans">
        <div className="relative w-full ">
          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseStart}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {options.map((option) => (
                <div
                  key={option.id}
                  className="w-full flex-shrink-0 h-96 relative overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: `url(${option.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#E6E9ED",
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[120px]"
                    style={{
                      boxShadow: "inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black",
                    }}
                  />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex flex-col justify-center text-white">
                      <div className="font-bold text-lg mb-2">{option.title}</div>
                      <div className="text-sm opacity-90">{option.subtitle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button> 
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {options.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Desktop version (unchanged)
  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4 py-8 font-sans">
      <div className="flex flex-col sm:flex-row items-stretch w-full max-w-7xl gap-2">
        {options.map((option) => (
          <div
            key={option.id}
            className={`
              relative overflow-hidden cursor-pointer rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)]
              ${
                activeOption === option.id
                  ? "flex-[4] sm:flex-[5] lg:flex-[8] xl:flex-[10] m-0"
                  : "sm:min-w-[60px] flex-grow "
              }
              h-60 sm:h-[400px]
            `}
            style={{
              backgroundImage: `url(${option.backgroundImage})`,
              backgroundSize: activeOption === option.id ? "cover" : "auto 120%",
              backgroundPosition: "center",
              backgroundColor: "#E6E9ED",
            }}
            onClick={() => setActiveOption(option.id)}
          >
            <div
              className="absolute bottom-0 left-0 right-0 h-[120px] transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)]"
              style={{
                boxShadow:
                  activeOption === option.id
                    ? "inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black"
                    : "inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black",
              }}
            />
            <div
              className={`
                absolute flex h-10 transition-all duration-500 ease-[cubic-bezier(0.05,0.61,0.41,0.95)]
                ${activeOption === option.id ? "bottom-5 left-5 right-0" : "bottom-2.5 left-2.5 right-0"}
              `}
            >
              <div className="flex flex-col justify-center ml-2.5 text-white whitespace-pre-wrap text-sm sm:text-base">
                <div
                  className={`relative font-bold text-lg sm:text-xl transition-all duration-500 ${
                    activeOption === option.id ? "left-0 opacity-100" : "left-5 opacity-0"
                  }`}
                  style={{
                    transitionProperty: "left, opacity",
                    transitionTimingFunction: "ease-out",
                  }}
                >
                  {option.title}
                </div>
                <div
                  className={`relative transition-all mb-10 duration-500 ${
                    activeOption === option.id ? "left-0 opacity-100" : "left-5 opacity-0"
                  }`}
                  style={{
                    transitionProperty: "left, opacity",
                    transitionTimingFunction: "ease-out",
                  }}
                >
                  {option.subtitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
