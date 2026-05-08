import React from "react";

const TEAM_MEMBERS = [
  { name: "Shihab Ghandi", role: "President", dept: "Presidency" },
  { name: "Mohammed Ghandi", role: "Co-President", dept: "Presidency" },
  { name: "Sulaiman Ghandi", role: "Head of Operations", dept: "Operations" },
  { name: "Sanad Lada", role: "Deputy Head of Operations", dept: "Operations" },
  { name: "Haya Rihani", role: "Head of Organization", dept: "Organization" },
  { name: "Luna Zaatar", role: "Deputy Head of Organization", dept: "Organization" },
  { name: "Tala Qiblawi", role: "Head of Media", dept: "Media" },
  { name: "Anirudh Nagella", role: "Deputy Head of Media", dept: "Media" },
  { name: "Mohammad Mazen", role: "Co-Head of Education", dept: "Education" },
  { name: "Mayasa Zaatar", role: "Co-Head of Education", dept: "Education" },
];

export default function Team() {
  return (
    <div className="w-full bg-white pb-20">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 border-b border-border mb-16" data-testid="team-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold" data-testid="team-heading">Our Team</h1>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-testid="team-grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <div 
              key={index} 
              className="border border-border p-6 rounded-none hover:bg-black/[0.02] transition-colors"
              data-testid={`team-card-${index}`}
            >
              <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
                {member.role}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1 font-serif">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {member.dept}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
