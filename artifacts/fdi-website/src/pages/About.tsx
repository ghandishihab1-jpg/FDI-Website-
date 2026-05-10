import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white">
      <section className="bg-primary text-primary-foreground py-20 border-b border-border" data-testid="about-hero">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold" data-testid="about-heading">{t("about_heading")}</h1>
        </div>
      </section>

      <section className="py-20" data-testid="about-content">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div data-testid="about-founding">
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">{t("why_started")}</h2>
            <div className="prose max-w-none text-muted-foreground text-lg leading-relaxed">
              <p className="mb-4">{t("why_p1")}</p>
              <p>{t("why_p2")}</p>
            </div>
          </div>

          <hr className="border-border" />

          <div data-testid="about-mission">
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">{t("our_mission")}</h2>
            <p className="text-lg text-muted-foreground mb-4">{t("mission_intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground marker:text-accent">
              <li>{t("mission_li1")}</li>
              <li>{t("mission_li2")}</li>
              <li>{t("mission_li3")}</li>
              <li>{t("mission_li4")}</li>
            </ul>
          </div>

          <hr className="border-border" />

          <div data-testid="about-vision">
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">{t("our_vision")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("vision_p")}</p>
          </div>

          <hr className="border-border" />

          <div data-testid="about-problem">
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">{t("the_problem")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("problem_p")}</p>
          </div>

        </div>
      </section>
    </div>
  );
}
