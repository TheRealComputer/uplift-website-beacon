import { Heart, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Refugee Uplift</h3>
            <p className="text-white/80 mb-4">
              Empowering refugee students through education, mentorship, and hope.
            </p>
            <div className="flex items-center gap-2 text-hope">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Youth-led • Community-focused</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@refugeeuplift.org</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Based in Clarkston, GA • Expanding Nationwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-white/80">
              <a href="#about" className="hover:text-hope transition-colors">About Us</a>
              <a href="#team" className="hover:text-hope transition-colors">Our Team</a>
              <a href="#get-involved" className="hover:text-hope transition-colors">Get Involved</a>
              <a href="#updates" className="hover:text-hope transition-colors">Updates</a>
              <a href="#contact" className="hover:text-hope transition-colors">Contact</a>
              <a href="#" className="hover:text-hope transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Refugee Uplift. All rights reserved. A registered 501(c)(3) nonprofit organization.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;