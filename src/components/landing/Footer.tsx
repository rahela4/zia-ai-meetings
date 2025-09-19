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
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Company branding */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-foreground mb-2">Zia Solutions</div>
            <div className="text-muted-foreground text-sm">solutionsbyzia.com</div>
          </div>
          
          {/* Quick links and Contact */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Quick links */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-foreground mb-3">Quick Links</h3>
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Why Choose Us
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('book-call')}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Button>
              </div>
            </div>
            
            {/* Contact Us */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-foreground mb-3">Contact Us</h3>
              <div className="text-muted-foreground">
                rahelalakram4@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;