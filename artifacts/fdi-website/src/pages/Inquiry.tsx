import React from "react";

export default function Inquiry() {
  return (
    <div className="w-full bg-white pb-20">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 border-b border-border mb-16" data-testid="inquiry-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold" data-testid="inquiry-heading">Get In Touch</h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" data-testid="inquiry-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs block mb-1">Email</span>
                  <a href="mailto:fdi.jo123@gmail.com" className="font-medium text-foreground hover:text-accent transition-colors">fdi.jo123@gmail.com</a>
                </div>
                <div>
                  <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs block mb-1">Instagram</span>
                  <a href="https://www.instagram.com/fdi.jo" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors">@fdi.jo</a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Direct Contacts</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-foreground font-serif">Shihab Ghandi</h3>
                  <span className="text-muted-foreground text-sm block mb-1">President</span>
                  <a href="mailto:ghandishihab1@gmail.com" className="text-accent hover:text-accent/80 transition-colors">ghandishihab1@gmail.com</a>
                </div>
                <div>
                  <h3 className="font-bold text-foreground font-serif">Mohammed Ghandi</h3>
                  <span className="text-muted-foreground text-sm block mb-1">Co-President</span>
                  <a href="mailto:Mohamedghandimohamed@gmail.com" className="text-accent hover:text-accent/80 transition-colors">Mohamedghandimohamed@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-light-gray p-8 border border-border" style={{ backgroundColor: 'var(--color-muted)' }}>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send an Inquiry</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()} data-testid="inquiry-form">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Full Name" 
                  className="w-full bg-white border border-border text-foreground px-4 py-3 focus:outline-none focus:border-accent rounded-none"
                  data-testid="inquiry-input-name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Email Address" 
                  className="w-full bg-white border border-border text-foreground px-4 py-3 focus:outline-none focus:border-accent rounded-none"
                  data-testid="inquiry-input-email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="Subject" 
                  className="w-full bg-white border border-border text-foreground px-4 py-3 focus:outline-none focus:border-accent rounded-none"
                  data-testid="inquiry-input-subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea 
                  id="message"
                  placeholder="Your Message" 
                  rows={6}
                  className="w-full bg-white border border-border text-foreground px-4 py-3 focus:outline-none focus:border-accent rounded-none resize-none"
                  data-testid="inquiry-input-message"
                />
              </div>
              <button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 font-medium transition-colors w-full rounded-none mt-4"
                data-testid="inquiry-btn-submit"
              >
                Send Inquiry
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}
