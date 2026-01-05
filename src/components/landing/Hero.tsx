import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/ai-sdr-dashboard.jpg";
import Navigation from "./Navigation";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Navigation />
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-feature rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-feature rounded-full blur-3xl opacity-15 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-center">
          {/* Content */}
          <div className="text-center animate-fade-in-up pt-20 max-w-4xl">
            
            <div className="mb-4">
              <span className="text-lg md:text-xl text-white/80 font-medium">Introducing</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                The Pipeline Surge🚀
              </h2>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Scale Your Outbound Pipeline
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Book 15+ qualified meetings in 60 days for your DevTools SaaS. 
              <strong className="text-white"> No hiring, no overhead.</strong>
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-white/80 text-sm">Meetings in 60 Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">0</div>
                <div className="text-white/80 text-sm">Hiring Needed</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => scrollToSection('book-call')}
              >
                <Calendar className="w-5 h-5" />
                Book Your Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;