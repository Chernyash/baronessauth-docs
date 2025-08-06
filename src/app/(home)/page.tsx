'use client'

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, Github, Mail } from 'lucide-react'

export default function Component() {
  const [activeTab, setActiveTab] = useState<'main' | 'contacts'>('main')
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return

      const card = cardRef.current
      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      setMousePosition({ x: mouseX, y: mouseY })
    }

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovered])

  const getCardTransform = () => {
    if (!isHovered) return 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    
    const maxRotation = 15
    const rotateY = (mousePosition.x / 300) * maxRotation
    const rotateX = -(mousePosition.y / 300) * maxRotation
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 pt-24">
      {/* Beautiful Colorful Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/60 via-teal-700/40 to-emerald-800/50"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-800/30 via-red-800/20 to-rose-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-800/40 via-transparent to-amber-800/30"></div>
      </div>

      {/* Navigation */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-black/20 backdrop-blur-md rounded-full p-1 shadow-lg border border-white/10">
          <div className="flex items-center space-x-1">
            <Badge 
              variant={activeTab === 'main' ? "default" : "ghost"}
              className={`${activeTab === 'main' ? 'bg-white/15 text-white backdrop-blur-sm' : 'text-white/60 hover:text-white/80'} px-4 py-2 rounded-full cursor-pointer transition-all`}
              onClick={() => setActiveTab('main')}
            >
              Главная
            </Badge>
            <Badge 
              variant={activeTab === 'contacts' ? "default" : "ghost"}
              className={`${activeTab === 'contacts' ? 'bg-white/15 text-white backdrop-blur-sm' : 'text-white/60 hover:text-white/80'} px-4 py-2 rounded-full cursor-pointer transition-all`}
              onClick={() => setActiveTab('contacts')}
            >
              Контакты
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content Card with Mouse Animation */}
      <Card 
        ref={cardRef}
        className={`w-full ${activeTab === 'contacts' ? 'max-w-md' : 'max-w-lg'} mx-auto bg-black/10 backdrop-blur-md shadow-2xl border border-white/10 relative z-10 transition-all duration-200 ease-out`}
        style={{
          transform: getCardTransform(),
          transformStyle: 'preserve-3d'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-8 text-center space-y-6">
          {activeTab === 'main' ? (
            <>
              {/* Logo and Title */}
              <div className="space-y-3">
                <div className="text-4xl mb-2">🏰</div>
                <div className="space-y-1">
                  <h2 className="text-3xl font-bold text-white/95">BaronessAuth</h2>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <p className="text-white/80 leading-relaxed">
                  Плагин аутентификации для прокси серверов BungeeCord
                </p>
                <p className="text-white/80 leading-relaxed">
                  и его форков (NullCordX, WaterFall и другие)
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href="/docs" className="flex-1">
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full transition-all">
                    Читать документацию
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button className="w-full bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-full transition-all">
                    Купить плагин
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Contacts Info */}
              <div className="space-y-3">
                <div className="text-4xl mb-2">📞</div>
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-white/95">Контакты</h2>
                  <p className="text-white/70 text-sm">Свяжитесь с нами для поддержки</p>
                </div>
              </div>

              {/* Contact Links */}
              <div className="space-y-3">
                <Link 
                  href="#" 
                  className="flex items-center gap-3 bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10 transition-all group text-left w-full"
                >
                  <MessageCircle className="w-5 h-5 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-white/95 font-medium text-sm">Discord</div>
                    <div className="text-white/70 text-xs">Сообщество и поддержка</div>
                  </div>
                </Link>

                <Link 
                  href="#" 
                  className="flex items-center gap-3 bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10 transition-all group text-left w-full"
                >
                  <Send className="w-5 h-5 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-white/95 font-medium text-sm">Telegram</div>
                    <div className="text-white/70 text-xs">Новости и обновления</div>
                  </div>
                </Link>

                <Link 
                  href="#" 
                  className="flex items-center gap-3 bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10 transition-all group text-left w-full"
                >
                  <Github className="w-5 h-5 text-purple-400 group-hover:text-purple-300 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-white/95 font-medium text-sm">GitHub</div>
                    <div className="text-white/70 text-xs">Исходный код и issues</div>
                  </div>
                </Link>

                <Link 
                  href="#" 
                  className="flex items-center gap-3 bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10 transition-all group text-left w-full"
                >
                  <Mail className="w-5 h-5 text-green-400 group-hover:text-green-300 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-white/95 font-medium text-sm">Email</div>
                    <div className="text-white/70 text-xs">Прямая связь с разработчиком</div>
                  </div>
                </Link>
              </div>

              {/* Back Button */}
              <div className="pt-4">
                <Button 
                  onClick={() => setActiveTab('main')}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full transition-all"
                >
                  Назад к главной
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
