import { Heart, Target, Users2, BookOpen, Gift } from 'lucide-react';
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
            <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-card p-8 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Refugee Uplift was founded in 2020 by a group of high school students in Clarkston who wanted to support refugee families adjusting to life in a new country. It began with handing out laptops and supplies to a few families and gradually grew into a steady support network for the community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Over the years, we have focused on helping families navigate the challenges of resettlement, from understanding school systems to improving language skills, through one on one mentorship and tutoring. Our work is shaped by the needs of the families we serve and our commitment to making their transition a little easier.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Looking ahead, our vision is to expand refugee access to educational and career focused resources, collaborate with other organizations serving refugee communities, and foster a growing network of support as these communities build their lives here. We aim to create opportunities that help families not just adjust but thrive in their new environments.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="bg-white/50 backdrop-blur-sm rounded-lg shadow-card p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">What We Do</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 rounded-full bg-trust/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-trust" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Educational Support</h4>
                <p className="text-muted-foreground">
                  Personalized tutoring and academic assistance tailored to each student's learning needs and goals.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-hope/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-hope" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Mentorship</h4>
                <p className="text-muted-foreground">
                  Building meaningful relationships that provide guidance, encouragement, and community support.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Donation Drives</h4>
                <p className="text-muted-foreground">
                  Organizing community drives to provide essential resources and materials for refugee families.
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