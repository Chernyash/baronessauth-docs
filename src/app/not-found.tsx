"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw, ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    // Установить начальные размеры
    handleResize()

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm"
      animate={{
        x: [0, 100, 0],
        y: [0, -100, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8 + i * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5,
      }}
      style={{
        left: `${10 + i * 15}%`,
        top: `${20 + i * 10}%`,
      }}
    />
  ))

  // Вычисляем углы наклона
  const rotateX = windowSize.height ? (mousePosition.y - windowSize.height / 2) * 0.05 : 0
  const rotateY = windowSize.width ? (mousePosition.x - windowSize.width / 2) * 0.05 : 0

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900"
        animate={{
          background: [
            "linear-gradient(45deg, #581c87, #7c3aed, #3730a3)",
            "linear-gradient(135deg, #7c3aed, #3730a3, #581c87)",
            "linear-gradient(225deg, #3730a3, #581c87, #7c3aed)",
            "linear-gradient(315deg, #581c87, #7c3aed, #3730a3)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Mouse follower effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-white/5 backdrop-blur-xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
      />

      {/* Floating elements */}
      {floatingElements}

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          {/* Glass morphism container with tilt effects */}
          <motion.div
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            animate={{
              rotateX: rotateX,
              rotateY: rotateY,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 100,
              damping: 15,
              mass: 0.3
            }}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            {/* Animated 404 */}
            <motion.div
              className="text-8xl md:text-9xl font-bold text-white mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.2,
              }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(147,51,234,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                4
              </motion.span>
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 40px rgba(147,51,234,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(147,51,234,0.8)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              >
                0
              </motion.span>
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(147,51,234,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              >
                4
              </motion.span>
            </motion.div>

            {/* Animated title */}
            <motion.h1
              className="text-2xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Страница не найдена
            </motion.h1>

            {/* Animated description */}
            <motion.p
              className="text-lg text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Похоже, вы попали в цифровое измерение, которого не существует. 
              Не волнуйтесь, мы поможем вам вернуться в реальность!
            </motion.p>

            {/* Animated buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300"
                >
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    На главную
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => window.history.back()}
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white border-white/30 backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Назад
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => window.location.reload()}
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white border-white/30 backdrop-blur-sm transition-all duration-300"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Обновить
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
    </div>
  )
} 