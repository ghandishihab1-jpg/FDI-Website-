import React from "react";

export default function About() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 border-b border-border" data-testid="about-hero">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold" data-testid="about-heading">About FDI</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20" data-testid="about-content">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div data-testid="about-founding">
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Why We Started</h2>
            <div className="prose max-w-none text-muted-foreground text-lg leading-relaxed">
              <p className="mb-4">
                The story of FDI began with a simple 4th-grade football incident. A brother broke his wrist on the field. The immediate response from the trainer? Applying cold water. When he returned home, no one in the family knew exactly what to do either.
              </p>
              <p>
                This incident highlighted a stark reality: basic, daily injuries escalate rapidly without proper education. We realized that schools across Jordan were facing the same issue. The problem isn't a lack of desire to help—it's a critical lack of knowledge on how to respond correctly in those crucial first few minutes.
              </p>
            </div>
          </div>

          <hr className="border-border" />

          <div data-testid="about-mission">
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              To make basic medical knowledge accessible to every school in Jordan. We achieve this by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground marker:text-accent">
              <li>Organizing professional, hands-on emergency response workshops for students and teachers.</li>
              <li>Partnering with certified medical societies to deliver accurate, up-to-date training.</li>
              <li>Creating a scalable model that can be implemented in schools nationwide.</li>
              <li>Equipping individuals with the confidence to act during medical emergencies.</li>
            </ul>
          </div>

          <hr className="border-border" />

          <div data-testid="about-vision">
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              FDI envisions a Jordan where every student and teacher can respond safely and effectively to emergencies. We strive for a future where schools are fundamentally safer, and a culture of medical awareness and preparedness spreads throughout the community.
            </p>
          </div>

          <hr className="border-border" />

          <div data-testid="about-problem">
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">The Problem We Are Solving</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In critical situations, hesitation or incorrect intervention can cause permanent damage. By democratizing access to first-aid education, we are bridging the gap between the occurrence of an injury and the arrival of professional medical help. Education is the most effective preventative medicine.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
