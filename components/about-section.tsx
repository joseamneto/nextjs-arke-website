import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Excellence in Every Detail
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Arke, we believe that exceptional results come from meticulous attention to detail and unwavering
              commitment to quality. Our team of experts brings decades of combined experience to every project.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We don't just meet expectations – we elevate them. Through innovative thinking, strategic planning, and
              flawless execution, we help businesses achieve their most ambitious goals.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Learn More About Us</Button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <img
                src="/images/about-image.png"
                alt="Professional team collaboration"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
