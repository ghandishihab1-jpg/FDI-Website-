import React, { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "./Navbar";
import logoPath from "@assets/44425E6A-9426-487B-93F0-FF6FB9B2DAEC_1778263764804.jpeg";

const CONTACT_EMAIL = "info@futuredoctorinitiative.org";

function FooterForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const subject = `FDI Message from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit} data-testid="footer-form">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-3 py-2 text-sm focus:outline-none focus:border-accent rounded-none"
        data-testid="footer-input-name"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-3 py-2 text-sm focus:outline-none focus:border-accent rounded-none"
        data-testid="footer-input-email"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        rows={3}
        required
        className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-3 py-2 text-sm focus:outline-none focus:border-accent rounded-none resize-none"
        data-testid="footer-input-message"
      />
      <button
        type="submit"
        className="bg-accent hover:bg-accent/90 text-white px-6 py-2 text-sm font-medium transition-colors w-full rounded-none"
        data-testid="footer-btn-submit"
      >
        Send
      </button>
    </form>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans rounded-none">
      {/* Top contact strip */}
      <div className="bg-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-border flex justify-between items-center" data-testid="top-strip">
        <div className="flex items-center gap-4">
          <img src={logoPath} alt="FDI Logo" className="h-6 w-auto object-contain rounded-none" />
        </div>
        <div className="flex gap-4 text-muted-foreground">
          <a href="https://www.instagram.com/fdi.jo" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram @fdi.jo</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground">{CONTACT_EMAIL}</a>
        </div>
      </div>

      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-auto rounded-none" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="space-y-4">
            <img src={logoPath} alt="FDI Logo" className="h-12 w-auto bg-white p-1 rounded-none" />
            <p className="text-sm text-gray-300 max-w-xs">
              A student-led initiative making basic medical knowledge accessible to every school in Jordan.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-gray-300 hover:text-white block transition-colors">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link href="/team" className="text-sm text-gray-300 hover:text-white transition-colors">Team</Link>
              <Link href="/workshops" className="text-sm text-gray-300 hover:text-white transition-colors">Workshops</Link>
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="/partnership" className="text-sm text-gray-300 hover:text-white transition-colors">Partnership</Link>
              <Link href="/inquiry" className="text-sm text-gray-300 hover:text-white transition-colors">Inquiry</Link>
              <Link href="/venue" className="text-sm text-gray-300 hover:text-white transition-colors">Venue & Schedule</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-4">Write to Us</h3>
            <FooterForm />
          </div>

        </div>
      </footer>
    </div>
  );
}
