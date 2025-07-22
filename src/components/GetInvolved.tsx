import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { UserPlus, Heart, Megaphone, Mail, ExternalLink } from 'lucide-react';

const GetInvolved = () => {
  return (
    <section id="get-involved" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Movement
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              There are many ways to get involved and make a difference in the lives of refugee students. 
              Whether you want to lead, volunteer, donate, or stay informed, we welcome your support.
            </p>
          </div>

          {/* Leadership Opportunities */}
          <div className="mb-16">
            <Card className="shadow-card border-0 bg-gradient-hero text-white overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <UserPlus className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">Apply for Leadership</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 text-white/90">
                  Join our student leadership team and help grow Refugee Uplift's impact. 
                  We're looking for passionate undergraduate students to fill key leadership roles.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="text-white/90">
                    <h4 className="font-semibold mb-2">Available Positions:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Director of Outreach</li>
                      <li>• Director of Marketing</li>
                      <li>• Co-Director of Education</li>
                      <li>• Director of Finance and Fundraising</li>
                    </ul>
                  </div>
                  <div className="text-white/90">
                    <h4 className="font-semibold mb-2">What You'll Do:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Lead strategic initiatives</li>
                      <li>• Coordinate programs</li>
                      <li>• Build community partnerships</li>
                      <li>• Mentor volunteers</li>
                    </ul>
                  </div>
                </div>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfN2vR4br6G9wB_4Gr_kOmqVZWS6UOLp-ZEl3617DQQlyTzXQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Apply for Leadership
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Volunteer and Donate */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Volunteer */}
            <Card className="shadow-card border-0 hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-hope/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-hope" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Volunteer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="mb-6 text-muted-foreground">
                      Make a direct impact by volunteering as a tutor or mentor. 
                      We're looking for high school students who want to make a difference.
                    </p>
                    <ul className="space-y-2 mb-6 text-muted-foreground">
                      <li>• One-on-one tutoring sessions</li>
                      <li>• Group study support</li>
                      <li>• Event assistance</li>
                      <li>• Administrative support</li>
                    </ul>
                  </div>
                  <div className="ml-6">
                    <Button variant="outline">
                      Volunteer Today
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donation */}
            <Card className="shadow-card border-0 bg-hope/5 hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-hope/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-hope" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Support Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Your donation directly supports tutoring programs, educational materials, 
                  and expanding our reach to more refugee families.
                </p>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <strong>$25</strong> - Provides tutoring materials for one student<br/>
                    <strong>$50</strong> - Funds a week of tutoring sessions<br/>
                    <strong>$100</strong> - Supports a family for one month
                  </div>
                  <Button variant="donate" className="w-full">
                    Donate Now
                    <Heart className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-gentle/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-trust/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-trust" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Stay Connected</h3>
            </div>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to get updates on our impact, upcoming events, 
              and ways to get involved in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white flex-1"
              />
              <Button variant="default">
                Subscribe
                <Megaphone className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;