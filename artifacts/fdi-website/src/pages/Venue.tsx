import React from "react";

export default function Venue() {
  return (
    <div className="w-full bg-white pb-20">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 border-b border-border mb-16" data-testid="venue-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold" data-testid="venue-heading">Venue</h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-testid="venue-content">
        
        <div className="border border-border p-8 md:p-12 rounded-none mb-12">
          <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Geneva Hotel, Amman</h2>
          
          <div className="bg-muted p-6 border-l-4 border-accent mb-8">
            <p className="text-foreground font-medium">
              Status: Venue details are being finalized. Updates will be shared with registered participants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold font-serif text-xl mb-4">Space Requirements</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground marker:text-accent">
                <li>1 dedicated room for 6 hours</li>
                <li>Seating capacity for 48+ people</li>
                <li>Sufficient open space for practical BLS demonstrations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold font-serif text-xl mb-4">Technical & Catering</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground marker:text-accent">
                <li>Projector or screen setup</li>
                <li>Audio equipment</li>
                <li>Includes one scheduled coffee break</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-serif font-bold mb-4 text-foreground">FDI Workshop Hosting Policy</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our workshops are intentionally hosted at professional external venues rather than inside schools. This ensures proper equipment availability, appropriate setup for hands-on demonstrations, and a focused environment conducive to intensive medical training.
          </p>
        </div>

      </section>
    </div>
  );
}
