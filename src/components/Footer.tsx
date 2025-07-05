const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Practice Info */}
          <div>
            <h3 className="text-xl font-serif mb-4">Dr. Serena Blake, PsyD</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Licensed Clinical Psychologist providing compassionate therapy for anxiety, 
              relationships, and trauma recovery in Los Angeles, California.
            </p>
            <p className="text-sm text-primary-foreground/60">
              License: California Board of Psychology
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact Information</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>1287 Maplewood Drive</p>
              <p>Los Angeles, CA 90026</p>
              <p>(323) 555-0192</p>
              <p>serena@blakepsychology.com</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-medium mb-4">Office Hours</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div>
                <p className="font-medium">In-person Sessions</p>
                <p>Tuesday & Thursday</p>
                <p>10:00 AM - 6:00 PM</p>
              </div>
              <div className="mt-4">
                <p className="font-medium">Virtual Sessions</p>
                <p>Monday, Wednesday & Friday</p>
                <p>1:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Dr. Serena Blake Psychology Practice. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            If you are experiencing a mental health emergency, please call 911 or go to your nearest emergency room.
            <br />
            For crisis support, contact the National Suicide Prevention Lifeline at 988.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;