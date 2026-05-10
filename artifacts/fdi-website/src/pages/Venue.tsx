import React from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Venue() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white pb-20">
      <section className="bg-primary text-primary-foreground py-20 border-b border-border mb-16" data-testid="venue-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold" data-testid="venue-heading">{t("venue_heading")}</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-testid="venue-content">
        <div className="border border-border p-12 md:p-16 rounded-none">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">{t("venue_label")}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 mb-6 text-foreground">{t("venue_title")}</h2>
          <div className="inline-block border border-accent text-accent text-sm font-semibold tracking-widest uppercase px-6 py-2 mb-8">
            {t("coming_soon")}
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-10">
            {t("venue_desc")}
          </p>
          <Link
            href="/inquiry"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 text-base font-medium transition-colors rounded-none"
            data-testid="btn-venue-inquiry"
          >
            {t("submit_inquiry")}
          </Link>
        </div>
      </section>
    </div>
  );
}
