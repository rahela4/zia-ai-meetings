import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us - Left Column */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">About Zia Solutions</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              UK-based lead gen agency specializing in DevTools SaaS pipeline acceleration.
            </p>
          </div>

          {/* Quick Links - Middle Column */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('services')}
                className="text-muted-foreground hover:text-foreground justify-start p-0 h-auto font-normal"
              >
                Why Choose Us
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('book-call')}
                className="text-muted-foreground hover:text-foreground justify-start p-0 h-auto font-normal"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Contact - Right Column */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="text-muted-foreground text-sm space-y-2">
              <p>rahelalakram4@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2025 Zia Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;