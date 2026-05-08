import React from "react";
import { Link } from "wouter";

export default function Workshops() {
  return (
    <div className="w-full bg-white pb-20">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 border-b border-border mb-16" data-testid="workshops-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold" data-testid="workshops-heading">Workshops</h1>
        </div>
      </section>

      {/* Workshop Block */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-testid="workshops-content">
        <div className="border border-border p-8 md:p-12 rounded-none text-center">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">First Workshop</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6 text-foreground">
            BLS Workshop
          </h2>
          <div className="inline-block border border-accent text-accent text-sm font-semibold tracking-widest uppercase px-6 py-2 mb-8">
            Coming Soon
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Details will be announced soon. Stay tuned via our Instagram page or submit an inquiry to be notified.
          </p>
          <div className="border-t border-border mt-10 pt-8">
            <Link
              href="/inquiry"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 text-base font-medium transition-colors rounded-none"
              data-testid="btn-register-interest"
            >
              Submit Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
