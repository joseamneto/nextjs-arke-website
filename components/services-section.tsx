import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Target, Zap, Shield } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description:
      "Strategic guidance to transform your business with cutting-edge solutions and forward-thinking approaches.",
  },
  {
    icon: Target,
    title: "Performance Optimization",
    description: "Maximize efficiency and results through data-driven analysis and targeted improvements.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize your operations with advanced technology integration and digital workflow solutions.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive protection strategies to safeguard your business and ensure sustainable growth.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your business to new heights of success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-accent">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
