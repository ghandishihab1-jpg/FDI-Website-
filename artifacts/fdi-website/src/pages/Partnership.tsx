import React from "react";
import { Link } from "wouter";

const TIERS = [
  {
    name: "Founding Gold Partner",
    amount: "500 JD and above",
    benefits: [
      "Premium logo placement on all FDI materials",
      "Mention as a primary sponsor in all workshops",
      "Dedicated social media spotlight",
      "VIP invitations to special events"
    ]
  },
  {
    name: "Silver Partner",
    amount: "250 - 499 JD",
    benefits: [
      "Logo placement on website and select materials",
      "Mention during workshop introductions",
      "Social media acknowledgment"
    ]
  },
  {
    name: "Bronze Partner",
    amount: "100 - 249 JD",
    benefits: [
      "Name listed on website sponsor page",
      "General social media thank you post"
    ]
  },
  {
    name: "In-Kind Partner",
    amount: "Non-monetary (Venue, Equipment, Speakers)",
    benefits: [
      "Logo placement corresponding to contribution value",
      "Direct acknowledgment at the provided venue/event",
      "Promotional opportunity for provided services"
    ]
  },
  {
    name: "Strategic Medical Partner",
    amount: "Custom (Hospitals, Training Centers)",
    benefits: [
      "Exclusive naming rights for specific modules",
      "Curriculum co-development opportunities",
      "Direct engagement with student attendees"
    ]
  }
];

export default function Partnership() {
  return (
    <div className="w-full bg-white pb-20">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 border-b border-border mb-16" data-testid="partnership-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold" data-testid="partnership-heading">Partner With Us</h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" data-testid="partnership-content">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Empowering the next generation with life-saving skills requires a united front. By partnering with FDI, you are directly investing in the safety of schools and communities across Jordan. 
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {TIERS.map((tier, index) => (
            <div 
              key={index} 
              className="border border-border p-6 md:p-8 rounded-none hover:border-accent transition-colors flex flex-col md:flex-row md:items-center gap-6"
              data-testid={`tier-${index}`}
            >
              <div className="md:w-1/3">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">{tier.name}</h3>
                <div className="text-accent font-semibold">{tier.amount}</div>
              </div>
              <div className="md:w-2/3 md:border-l border-border md:pl-8">
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground marker:text-accent">
                  {tier.benefits.map((benefit, bIndex) => (
                    <li key={bIndex}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/inquiry" 
            className="inline-block bg-accent hover:bg-accent/90 text-white px-10 py-4 text-lg font-medium transition-colors rounded-none"
            data-testid="btn-become-partner"
          >
            Become a Partner
          </Link>
        </div>
      </section>
    </div>
  );
}
