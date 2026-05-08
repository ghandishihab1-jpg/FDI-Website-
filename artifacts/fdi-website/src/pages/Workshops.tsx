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
        <div className="border border-border p-8 md:p-12 rounded-none">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-8 text-foreground">
            BLS Workshop - Jordan Paramedic Society Partnership
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-6">
              <div>
                <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs block mb-1">Partner</span>
                <span className="font-medium text-foreground text-lg">Jordan Paramedic Society (JPS)</span>
              </div>
              <div>
                <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs block mb-1">Course</span>
                <span className="font-medium text-foreground text-lg">Basic Life Support (BLS)</span>
              </div>
              <div>
                <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs block mb-1">Participants</span>
                <span className="font-medium text-foreground text-lg">35 expected + 12 team members</span>
              </div>
              <div>
                <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs block mb-1">Venue</span>
                <span className="font-medium text-foreground text-lg">Geneva Hotel, 1 room for 6 hours</span>
              </div>
              <div>
                <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs block mb-1">Cost</span>
                <span className="font-medium text-foreground text-lg">10 JD per participant (JPS training) + 7 JD per person (coffee break)</span>
              </div>
            </div>
            
            <div className="bg-muted p-6 border border-border">
              <h3 className="font-serif font-bold text-xl mb-4">What you will learn</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground marker:text-accent">
                <li>Basic emergency response protocols</li>
                <li>Core Basic Life Support (BLS) skills</li>
                <li>CPR fundamentals for various ages</li>
                <li>Effective bleeding control techniques</li>
                <li>Confidence to act in medical emergencies</li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              This comprehensive workshop is designed to equip students and educators with the essential skills needed to respond effectively during the critical first minutes of a medical emergency. Partnering with the certified professionals at the Jordan Paramedic Society ensures that all techniques taught meet rigorous medical standards.
            </p>
          </div>
          
          <div className="border-t border-border pt-8">
            <Link 
              href="/inquiry" 
              className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg font-medium transition-colors rounded-none text-center"
              data-testid="btn-register-interest"
            >
              Register Interest
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
