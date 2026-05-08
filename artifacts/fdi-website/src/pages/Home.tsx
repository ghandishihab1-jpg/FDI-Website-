import React from "react";
import { Link } from "wouter";
import fdiLogoPath from "@assets/44425E6A-9426-487B-93F0-FF6FB9B2DAEC_1778263764804.jpeg";
import jpsLogoPath from "@assets/IMG_4813_1778263821802.png";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground min-h-[520px] flex flex-col justify-center py-16 relative overflow-hidden" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase" data-testid="hero-label">
              FUTURE DOCTOR INITIATIVE - JORDAN
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white" data-testid="hero-heading">
              Future Doctor Initiative
            </h1>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed" data-testid="hero-subheading">
              Every day, basic injuries escalate because no one nearby knows the right response. We are changing that, one school and one workshop at a time.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/about" 
                className="border border-white text-white bg-transparent hover:bg-white/10 px-8 py-3 font-medium transition-colors rounded-none"
                data-testid="hero-btn-story"
              >
                Our Story
              </Link>
              <Link 
                href="/partnership" 
                className="bg-white text-foreground hover:bg-gray-100 px-8 py-3 font-medium transition-colors rounded-none"
                data-testid="hero-btn-involved"
              >
                Get Involved
              </Link>
            </div>
          </div>
          <div className="relative h-full min-h-[300px] hidden md:block">
            <svg viewBox="0 0 500 200" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-auto opacity-40">
              <polyline 
                points="0,100 150,100 170,50 200,180 230,20 260,100 500,100" 
                fill="none" 
                stroke="#FFFFFF" 
                strokeWidth="4" 
                strokeLinecap="square" 
                strokeLinejoin="miter"
              />
            </svg>
            <div className="absolute bottom-0 right-0 text-right opacity-60 text-sm font-medium tracking-widest">
              FDI | FUTURE DOCTOR INITIATIVE
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 w-full bg-[#1F4545] py-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left text-sm text-gray-300">
            <i className="font-serif">"Salus populi suprema lex esto."</i> — Let the welfare of the people be the supreme law. - Cicero
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-16" data-testid="impact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="p-6 md:p-8 pl-0 md:pl-8 border-l-4 border-accent ml-4 md:ml-0" data-testid="stat-1">
              <div className="text-5xl md:text-6xl font-bold font-serif mb-4 text-foreground">1 in 3</div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">schools lack basic emergency training</p>
            </div>
            <div className="p-6 md:p-8 border-l-4 border-accent ml-4 md:ml-0" data-testid="stat-2">
              <div className="text-5xl md:text-6xl font-bold font-serif mb-4 text-foreground">~72%</div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">of preventable injury escalations happen due to incorrect first response</p>
            </div>
            <div className="p-6 md:p-8 border-l-4 border-accent ml-4 md:ml-0" data-testid="stat-3">
              <div className="text-5xl md:text-6xl font-bold font-serif mb-4 text-foreground">100%</div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">of the knowledge required is teachable in a single workshop</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap Section */}
      <section className="bg-light-gray py-20" style={{ backgroundColor: 'var(--color-muted)' }} data-testid="gap-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">The gap is real. And it costs lives.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A fractured wrist treated with cold water instead of support. A cut left to bleed because no one knew to apply pressure. These are not rare incidents. They happen every single day in schools across Jordan. 
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The problem is not lack of care. It is lack of knowledge. That is something we can fix.
              </p>
            </div>
            <div className="space-y-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">How you can be part of this.</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6" data-testid="involvement-1">
                  <div className="text-accent font-serif font-bold text-xl">01</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Lead the Initiative</h3>
                    <p className="text-muted-foreground mb-4">Take on a leadership role and help steer FDI direction, partnerships, and goals.</p>
                    <Link href="/team" className="inline-block border border-border text-foreground hover:bg-black/5 px-6 py-2 text-sm font-medium transition-colors rounded-none">
                      Learn More
                    </Link>
                  </div>
                </div>

                <div className="flex gap-6" data-testid="involvement-2">
                  <div className="text-accent font-serif font-bold text-xl">02</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Join a Workshop</h3>
                    <p className="text-muted-foreground mb-4">Attend one of our hands-on sessions. Learn CPR, bleeding control, and emergency response.</p>
                    <Link href="/workshops" className="inline-block border border-border text-foreground hover:bg-black/5 px-6 py-2 text-sm font-medium transition-colors rounded-none">
                      Learn More
                    </Link>
                  </div>
                </div>

                <div className="flex gap-6" data-testid="involvement-3">
                  <div className="text-accent font-serif font-bold text-xl">03</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Volunteer</h3>
                    <p className="text-muted-foreground mb-4">Support us from the ground up. Logistics, events, outreach. No medical background needed.</p>
                    <Link href="/partnership" className="inline-block border border-border text-foreground hover:bg-black/5 px-6 py-2 text-sm font-medium transition-colors rounded-none">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Highlight */}
      <section className="bg-white py-20" data-testid="workshop-highlight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-border p-8 md:p-12 rounded-none text-center">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">First Workshop</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-4 mb-5 text-foreground">BLS Workshop</h2>
            <div className="inline-block border border-accent text-accent text-sm font-semibold tracking-widest uppercase px-6 py-2 mb-6">
              Coming Soon
            </div>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Details will be announced soon. Follow us on Instagram or submit an inquiry to stay informed.
            </p>
            <Link
              href="/workshops"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 font-medium transition-colors rounded-none"
              data-testid="btn-view-workshop"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-light-gray py-20 border-t border-border" style={{ backgroundColor: 'var(--color-muted)' }} data-testid="partners-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-12 text-foreground">Partners and Supporters</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="flex flex-col items-center gap-3" data-testid="partner-fdi-jps">
              <div className="flex items-center gap-6 border border-border bg-white px-10 py-6">
                <img src={fdiLogoPath} alt="FDI Logo" className="h-16 w-auto object-contain" />
                <span className="text-2xl font-bold text-foreground font-serif">×</span>
                <img src={jpsLogoPath} alt="Jordan Paramedic Society Logo" className="h-16 w-auto object-contain" />
              </div>
              <span className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">FDI × JPS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
