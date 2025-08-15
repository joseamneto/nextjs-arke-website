import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-heading font-bold">ARKE</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
              Elevating expectations through innovative solutions and exceptional service.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-accent">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-accent">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/80 hover:text-accent">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Innovation Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Performance Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Risk Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-secondary-foreground/80">hello@arke.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-secondary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-secondary-foreground/80">New York, NY</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-secondary-foreground/80 mb-4">Subscribe to our newsletter for insights and updates.</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2024 Arke. All rights reserved. Good just isn't good enough anymore.
          </p>
        </div>
      </div>
    </footer>
  )
}
