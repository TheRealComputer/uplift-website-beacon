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

          {/* Involvement Options */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Leadership */}
            <Card className="shadow-card border-0 bg-gradient-hero text-white overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <UserPlus className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">Apply to Lead</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-white/90">
                  Join our youth leadership team and help expand Refugee Uplift to new communities. 
                  We're looking for passionate individuals who want to make a lasting impact.
                </p>
                <ul className="space-y-2 mb-6 text-white/90">
                  <li>• Lead local chapter development</li>
                  <li>• Coordinate tutoring programs</li>
                  <li>• Organize community events</li>
                  <li>• Mentor other volunteers</li>
                </ul>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Apply Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

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
                <p className="mb-6 text-muted-foreground">
                  Make a direct impact by volunteering as a tutor or mentor. 
                  We provide training and ongoing support to help you succeed.
                </p>
                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li>• One-on-one tutoring sessions</li>
                  <li>• Group study support</li>
                  <li>• Event assistance</li>
                  <li>• Administrative support</li>
                </ul>
                <Button variant="outline">
                  Volunteer Today
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Donation and Newsletter */}
          <div className="grid lg:grid-cols-2 gap-8">
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

            {/* Newsletter */}
            <Card className="shadow-card border-0 hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-trust/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-trust" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">Stay Connected</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  Subscribe to our newsletter to get updates on our impact, upcoming events, 
                  and ways to get involved in your community.
                </p>
                <div className="space-y-4">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="bg-white"
                  />
                  <Button variant="default" className="w-full">
                    Join Our Newsletter
                    <Megaphone className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  We respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;