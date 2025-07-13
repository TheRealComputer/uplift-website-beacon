import { Heart, Target, Users2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gentle/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story & Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Founded in December 2020 by passionate young leaders, Refugee Uplift began as a local initiative 
              in Clarkston, Georgia, and has grown into a multi-state organization dedicated to transforming 
              lives through education.
            </p>
          </div>

          {/* Story */}
          <div className="mb-16">
            <Card className="shadow-card border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">How We Started</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  What began as a small group of dedicated youth volunteers has evolved into a comprehensive 
                  support network for refugee families. We saw the unique challenges faced by refugee students 
                  and knew we had to act.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through one-on-one tutoring, mentorship, and educational support, we've built lasting 
                  relationships that extend far beyond the classroom. Our approach is personal, culturally 
                  sensitive, and focused on long-term success.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-card border-0 bg-white/70 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-trust/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-trust" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide personalized educational support and mentorship that empowers refugee students 
                  to achieve academic success and build brighter futures.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-white/70 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-hope/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-hope" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where every refugee student has access to quality education and the support 
                  they need to thrive in their new communities.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-white/70 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Approach</h3>
                <p className="text-muted-foreground">
                  Youth-led, culturally sensitive, and relationship-focused programming that addresses 
                  the unique needs of each student and family we serve.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What We Do */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">What We Do</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-xl font-semibold text-foreground mb-2">One-on-One Tutoring</h4>
                <p className="text-muted-foreground">
                  Personalized academic support tailored to each student's learning style and needs.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Mentorship</h4>
                <p className="text-muted-foreground">
                  Building meaningful relationships that provide guidance, encouragement, and support.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Educational Support</h4>
                <p className="text-muted-foreground">
                  Comprehensive assistance with homework, test preparation, and academic planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;