'use client';

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react";
import { getHeroSection } from "@/lib/contentstack";

export function HeroSection() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHero() {
      try {
        const data = await getHeroSection();
        setHeroData(data);
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchHero();
  }, []);

  const fallbackData = {
    title: "Elevate your expectations.",
    subtitle: "Transform your business with innovative solutions that exceed industry standards and deliver exceptional results.",
    cta_button_text: "Discover Our Services",
  };

  const displayData = heroData || fallbackData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with particle effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px),
                             radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 2px, transparent 2px)`,
              backgroundSize: "50px 50px, 80px 80px, 120px 120px",
              animation: "float 20s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {loading ? "Loading..." : displayData.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          {loading ? "Loading content..." : displayData.subtitle}
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4" disabled={loading}>
          {loading ? "Loading..." : displayData.cta_button_text}
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <ChevronDown size={32} />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
      `}</style>
    </section>
  );
}
