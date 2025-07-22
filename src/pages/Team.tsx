const Team = () => {
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

      {/* Executive Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Executive Team
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Team Members */}
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {/* Ibrahim Mohammad */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-soft">
                    <img 
                      src="/lovable-uploads/b8c63778-c0b4-4899-8d46-c77a8f2b097c.png" 
                      alt="Ibrahim Mohammad" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Ibrahim Mohammad
                </h3>
              </div>

              {/* Rayyaan Rahman */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-soft">
                    <img 
                      src="/lovable-uploads/f62505df-907d-414e-a6bf-e62582f6b849.png" 
                      alt="Rayyaan Rahman" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Rayyaan Rahman
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;