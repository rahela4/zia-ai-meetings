import { Card } from "@/components/ui/card";
import { DollarSign, TrendingDown, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            About Us & Why We Do It
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We've witnessed countless businesses burn through their budgets hiring human SDR teams, 
            only to see minimal results and mounting costs. That's why we founded Zia Solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              The Problem We Solve
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">High Hiring Costs</h4>
                  <p className="text-muted-foreground">Average SDR salary: $60K+ plus benefits, training, and management overhead</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Poor Performance</h4>
                  <p className="text-muted-foreground">Most human SDRs book only 2-5 qualified meetings per month</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Scalability Issues</h4>
                  <p className="text-muted-foreground">Building and managing SDR teams is complex, time-consuming, and expensive</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Our Solution
            </h3>
            <Card className="p-6 bg-primary text-primary-foreground border-primary/20">
              <div className="text-center">
                <Target className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-primary-foreground mb-3">
                  LinkedIn Outbound Done Right
                </h4>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Our LinkedIn automation systems work around the clock, delivering personalized outreach 
                  at scale while costing 80% less than traditional hiring. No salaries, no benefits, 
                  no management headaches—just qualified meetings delivered to your calendar.
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Why Zia Solutions Exists
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We founded Zia Solutions because we believe every DevTools SaaS company deserves predictable, 
            cost-effective lead generation. Instead of gambling with expensive SDR hires, our LinkedIn outbound 
            systems ensure you get 15+ qualified meetings in 60 days while cutting your sales development costs by up to 80%.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;