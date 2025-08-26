import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "15-30 qualified meetings guaranteed per month",
  "Complete setup and optimization included",
  "No hiring, training, or management overhead",
  "Real-time analytics and performance tracking",
  "Full compliance with GDPR and CAN-SPAM"
];

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-10 right-20 w-64 h-64 gradient-feature rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 left-20 w-80 h-80 gradient-feature rounded-full blur-3xl opacity-15 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-strong">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to Scale Your Pipeline?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Join 100+ B2B SaaS companies already using our AI SDR to book more meetings, 
                  close more deals, and grow faster than ever before.
                </p>
              </div>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90 group">
                  <Calendar className="w-5 h-5" />
                  Book Your Strategy Call Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
                  Download Case Study
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="text-white/80 text-sm">
                <p>✓ No long-term contracts  ✓ 30-day money-back guarantee  ✓ Quick setup included</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company branding */}
        <div className="text-center mt-12">
          <div className="text-white/60 text-sm mb-2">Powered by</div>
          <div className="text-2xl font-bold text-white">Zia Solutions</div>
          <div className="text-white/80 text-sm">solutionsbyzia.com</div>
        </div>
      </div>
    </section>
  );
};

export default CTA;