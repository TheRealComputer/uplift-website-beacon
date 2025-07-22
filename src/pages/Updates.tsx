import { Calendar } from 'lucide-react';

const Updates = () => {
  const updates = [
    {
      date: "November 11, 2023",
      title: "Quarterly Recognition Event",
      description: "Refugee Uplift kicks off its quarterly recognition event to recognize outstanding volunteers and teams for their work. Congratulations to Aiman for her work during October!"
    },
    {
      date: "March 18, 2023", 
      title: "Clarkston Onboarding Event",
      description: "After automating the onboarding process using online tools, we conducted an event in Clarkston to induct more refugee students within the organization. The outcome was incredible, with over 50 students onboarded right after the event."
    },
    {
      date: "October 23, 2022",
      title: "Quarterly Planning Meeting", 
      description: "Refugee Uplift holds its quarterly meet, going over strategic plans for the next quarter and year to expand our impact and reach more families."
    },
    {
      date: "August 7, 2022",
      title: "Annual Meet-and-Greet Event",
      description: "Refugee Uplift hosts its annual meet-and-greet event with all tutors and students gathering together for food, games, and community building."
    },
    {
      date: "March 27, 2022", 
      title: "Afghan Family Outreach",
      description: "Refugee Uplift meets with new refugee families from Afghanistan to donate education packages and provide comprehensive outreach support."
    },
    {
      date: "February 20, 2022",
      title: "Education Package Assembly",
      description: "Refugee Uplift organizes volunteers to assemble education packages for the Afghan Support Initiative, preparing essential materials for distribution to families in need."
    },
    {
      date: "November 26, 2021",
      title: "Community Bake Sale Fundraiser", 
      description: "Refugee Uplift holds a successful bake sale to help collect funds for the Afghan Education Support Initiative, bringing the community together for a great cause."
    },
    {
      date: "November 21, 2021",
      title: "First Major Fundraising Event",
      description: "Refugee Uplift launches its first large-scale fundraising event to raise critical funds for the Afghan Education Support Initiative."
    },
    {
      date: "October 31, 2021",
      title: "First Afghan Family Connection",
      description: "Refugee Uplift meets its first family from Afghanistan, providing laptops and establishing the foundation for ongoing educational support."
    },
    {
      date: "September 18, 2021", 
      title: "New Student Volunteer Meeting",
      description: "Volunteers from Refugee Uplift meet and welcome new refugee students, beginning the process of building lasting mentorship relationships."
    },
    {
      date: "September 5, 2021",
      title: "Monthly Volunteer Planning",
      description: "Refugee Uplift holds its monthly volunteer outdoor meeting to discuss plans for the upcoming Afghan Initiative, strengthening team coordination and strategy."
    },
    {
      date: "May 2, 2021",
      title: "Volunteer and Student Introduction",
      description: "Refugee Uplift introduces and connects new volunteers with refugee students while conducting a food drive and providing essential technology resources to families."
    },
    {
      date: "February 6, 2021",
      title: "First In-Person Community Meet",
      description: "Refugee Uplift holds its inaugural in-person meeting, providing laptops and food support to refugee families in Clarkston, GA, marking the beginning of our hands-on community impact."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Newsletter Banner */}
      <div className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on our impact, upcoming events, 
            and opportunities to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-md border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-2 bg-white text-primary rounded-md hover:bg-white/90 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Updates Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Journey
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Follow our path as we've grown from a small group of student volunteers 
                to a comprehensive support network for refugee families.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-primary/30"></div>

              {updates.map((update, index) => (
                <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-1/2 md:-ml-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-card border border-border p-6 hover:shadow-soft transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3 text-primary">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{update.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {update.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {update.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Updates;