import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/44425E6A-9426-487B-93F0-FF6FB9B2DAEC_1778263764804.jpeg";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Team" },
    { href: "/workshops", label: "Workshops" },
    { href: "/partnership", label: "Partnership" },
    { href: "/inquiry", label: "Inquiry" },
    { href: "/venue", label: "Venue & Schedule" },
  ];

  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3" data-testid="nav-logo">
              <img src={logoPath} alt="FDI Logo" className="h-8 w-auto object-contain bg-white p-0.5" />
              <span className="font-bold text-sm text-white tracking-wide hidden lg:block">FDI – Future Doctor Initiative</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location === link.href
                      ? "text-white border-b-2 border-white"
                      : "text-gray-300 hover:text-white hover:bg-black/20"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/fdi.jo"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-link-instagram"
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-black/20 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-testid="nav-mobile-toggle"
              className="inline-flex items-center justify-center p-2 rounded-none text-gray-400 hover:text-white hover:bg-black/20 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary border-t border-white/10" data-testid="nav-mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${
                  location === link.href
                    ? "text-white bg-black/20"
                    : "text-gray-300 hover:text-white hover:bg-black/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/fdi.jo"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-black/20"
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
