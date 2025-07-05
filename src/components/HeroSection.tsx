'use client'

import { Button } from "@/components/ui/button";
import ScrollAnimation from "./ScrollAnimation";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="hero-section min-h-screen flex items-center justify-center relative bg-[#fec9c8]"
      style={{
        backgroundImage: `linear-gradient(rgba(210, 15%, 25%, 0.3), rgba(210, 15%, 25%, 0.3)), url('/hero-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container-max text-center text-white z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation direction="fade" delay={200}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
              Compassionate Care for a
              <br />
              <span className="italic">Healthier Mind</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={400}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Therapy rooted in empathy, evidence, and growth
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={600}>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Offering individual psychotherapy and couples counseling in Los Angeles and via telehealth
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={800}>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-white/90 text-primary hover:bg-white hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-full font-medium animate-pulse hover:animate-none"
            >
              Book a Free Consultation
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
