"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Solutions",
    role: "CEO",
    content:
      "Arke transformed our entire business strategy. Their innovative approach and attention to detail exceeded all our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Global Dynamics",
    role: "Operations Director",
    content:
      "The results speak for themselves. Our efficiency increased by 40% within the first quarter of working with Arke.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Innovation Labs",
    role: "Founder",
    content: "Professional, reliable, and incredibly effective. Arke helped us navigate complex challenges with ease.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-popover">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with Arke.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-popover border-border">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-popover-foreground mb-6 leading-relaxed font-medium">
                "{testimonials[currentIndex].content}"
              </blockquote>
              <div className="text-muted-foreground">
                <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                <p>
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-border"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
