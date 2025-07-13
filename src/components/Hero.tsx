import { Button } from '@/components/ui/button';
import { Heart, Users, BookOpen, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Empowering Refugee Students Through
                <span className="text-transparent bg-gradient-hero bg-clip-text"> Education & Hope</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                A youth-led nonprofit providing one-on-one tutoring, mentorship, and educational support to refugee families. Together, we're building bridges to brighter futures.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-hope/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-hope" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Families Served</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-trust/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-trust" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">$20K+</div>
                  <div className="text-sm text-muted-foreground">Funds Raised</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">Multi-State</div>
                  <div className="text-sm text-muted-foreground">Expansion</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Apply to Lead
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:order-last order-first">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src={heroImage}
                alt="Students learning together in a supportive environment"
                className="relative rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;