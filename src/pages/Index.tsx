import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import About from "@/components/landing/About";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Zia Solutions - Scale Your DevTools SaaS Pipeline - The Pipeline Surge</title>
        <meta 
          name="description" 
          content="Book 15-30 qualified meetings per month with our AI SDR. No hiring, no overhead. Perfect for DevTools SaaS companies looking to scale outbound sales." 
        />
        <meta name="keywords" content="AI SDR, DevTools SaaS, sales automation, outbound sales, lead generation" />
        <link rel="canonical" href="https://solutionsbyzia.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zia Solutions - Scale Your DevTools SaaS Pipeline - The Pipeline Surge" />
        <meta property="og:description" content="Book 15-30 qualified meetings per month with our AI SDR. No hiring, no overhead." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solutionsbyzia.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zia Solutions",
            "url": "https://solutionsbyzia.com",
            "description": "AI automation services for DevTools SaaS companies",
            "serviceType": "AI SDR Services",
            "areaServed": "Global",
            "audience": "DevTools SaaS Companies"
          })}
        </script>
      </Helmet>

      <main>
        <Hero />
        <section id="services">
          <Features />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="book-call">
          <CTA />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;