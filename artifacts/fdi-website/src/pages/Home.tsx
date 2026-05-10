import React from "react";
import { Link } from "wouter";
import fdiLogoPath from "@assets/44425E6A-9426-487B-93F0-FF6FB9B2DAEC_1778263764804.jpeg";
import jpsLogoPath from "@assets/IMG_4813_1778263821802.png";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground min-h-[520px] flex flex-col justify-center py-16 relative overflow-hidden" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase" data-testid="hero-label">
              {t("hero_label")}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white" data-testid="hero-heading">
              {t("hero_title")}
            </h1>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed" data-testid="hero-subheading">
              {t("hero_subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/about"
                className="border border-white text-white bg-transparent hover:bg-white/10 px-8 py-3 font-medium transition-colors rounded-none"
                data-testid="hero-btn-story"
              >
                {t("hero_btn_story")}
              </Link>
              <Link
                href="/partnership"
                className="bg-white text-foreground hover:bg-gray-100 px-8 py-3 font-medium transition-colors rounded-none"
                data-testid="hero-btn-involved"
              >
                {t("hero_btn_involved")}
              </Link>
            </div>
          </div>
          <div className="relative h-full min-h-[300px] hidden md:flex items-end justify-end">
            <div className="opacity-60 text-sm font-medium tracking-widest text-white">
              FDI | FUTURE DOCTOR INITIATIVE
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full bg-[#1F4545] py-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left text-sm text-gray-300">
            <i className="font-serif">{t("hero_quote")}</i>
          </div>
        </div>
      </section>


      {/* The Gap Section */}
      <section className="bg-light-gray py-20" style={{ backgroundColor: 'var(--color-muted)' }} data-testid="gap-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">{t("gap_heading")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("gap_p1")}</p>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("gap_p2")}</p>
            </div>
            <div className="space-y-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">{t("involve_heading")}</h2>
              <div className="space-y-8">
                <div className="flex gap-6" data-testid="involvement-1">
                  <div className="text-accent font-serif font-bold text-xl">01</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("involve_01_title")}</h3>
                    <p className="text-muted-foreground mb-4">{t("involve_01_desc")}</p>
                    <Link href="/team" className="inline-block border border-border text-foreground hover:bg-black/5 px-6 py-2 text-sm font-medium transition-colors rounded-none">
                      {t("learn_more")}
                    </Link>
                  </div>
                </div>
                <div className="flex gap-6" data-testid="involvement-2">
                  <div className="text-accent font-serif font-bold text-xl">02</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("involve_02_title")}</h3>
                    <p className="text-muted-foreground mb-4">{t("involve_02_desc")}</p>
                    <Link href="/workshops" className="inline-block border border-border text-foreground hover:bg-black/5 px-6 py-2 text-sm font-medium transition-colors rounded-none">
                      {t("learn_more")}
                    </Link>
                  </div>
                </div>
                <div className="flex gap-6" data-testid="involvement-3">
                  <div className="text-accent font-serif font-bold text-xl">03</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("involve_03_title")}</h3>
                    <p className="text-muted-foreground mb-4">{t("involve_03_desc")}</p>
                    <Link href="/partnership" className="inline-block border border-border text-foreground hover:bg-black/5 px-6 py-2 text-sm font-medium transition-colors rounded-none">
                      {t("learn_more")}
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
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">{t("first_workshop_label")}</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-4 mb-5 text-foreground">{t("bls_workshop")}</h2>
            <div className="inline-block border border-accent text-accent text-sm font-semibold tracking-widest uppercase px-6 py-2 mb-6">
              {t("coming_soon")}
            </div>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t("bls_desc")}</p>
            <Link
              href="/workshops"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 font-medium transition-colors rounded-none"
              data-testid="btn-view-workshop"
            >
              {t("learn_more")}
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-light-gray py-20 border-t border-border" style={{ backgroundColor: 'var(--color-muted)' }} data-testid="partners-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-12 text-foreground">{t("partners_heading")}</h2>
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
