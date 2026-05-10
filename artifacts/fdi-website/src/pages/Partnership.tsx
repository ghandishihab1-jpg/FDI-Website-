import React from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/i18n/translations";

type Tier = {
  nameKey: TranslationKey;
  amountKey: TranslationKey;
  benefitKeys: TranslationKey[];
};

const TIERS: Tier[] = [
  {
    nameKey: "tier_gold_name",
    amountKey: "tier_gold_amount",
    benefitKeys: ["tier_gold_b1", "tier_gold_b2", "tier_gold_b3", "tier_gold_b4"],
  },
  {
    nameKey: "tier_silver_name",
    amountKey: "tier_silver_amount",
    benefitKeys: ["tier_silver_b1", "tier_silver_b2", "tier_silver_b3"],
  },
  {
    nameKey: "tier_bronze_name",
    amountKey: "tier_bronze_amount",
    benefitKeys: ["tier_bronze_b1", "tier_bronze_b2"],
  },
  {
    nameKey: "tier_inkind_name",
    amountKey: "tier_inkind_amount",
    benefitKeys: ["tier_inkind_b1", "tier_inkind_b2", "tier_inkind_b3"],
  },
  {
    nameKey: "tier_medical_name",
    amountKey: "tier_medical_amount",
    benefitKeys: ["tier_medical_b1", "tier_medical_b2", "tier_medical_b3"],
  },
];

export default function Partnership() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white pb-20">
      <section className="bg-primary text-primary-foreground py-20 border-b border-border mb-16" data-testid="partnership-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold" data-testid="partnership-heading">{t("partnership_heading")}</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" data-testid="partnership-content">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xl text-muted-foreground leading-relaxed">{t("partnership_intro")}</p>
        </div>

        <div className="space-y-6 mb-16">
          {TIERS.map((tier, index) => (
            <div
              key={index}
              className="border border-border p-6 md:p-8 rounded-none hover:border-accent transition-colors flex flex-col md:flex-row md:items-center gap-6"
              data-testid={`tier-${index}`}
            >
              <div className="md:w-1/3">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">{t(tier.nameKey)}</h3>
                <div className="text-accent font-semibold">{t(tier.amountKey)}</div>
              </div>
              <div className="md:w-2/3 md:border-l border-border md:pl-8">
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground marker:text-accent">
                  {tier.benefitKeys.map((bKey, bIndex) => (
                    <li key={bIndex}>{t(bKey)}</li>
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
            {t("become_partner")}
          </Link>
        </div>
      </section>
    </div>
  );
}
