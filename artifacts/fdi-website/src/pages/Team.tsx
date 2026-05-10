import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/i18n/translations";

type TeamMember = {
  name: string;
  roleKey: TranslationKey;
  deptKey: TranslationKey;
};

const TEAM_MEMBERS: TeamMember[] = [
  { name: "Shihab Ghandi",    roleKey: "role_president",        deptKey: "dept_presidency" },
  { name: "Mohammed Ghandi",  roleKey: "role_copresident",      deptKey: "dept_presidency" },
  { name: "Sulaiman Ghandi",  roleKey: "role_head_ops",         deptKey: "dept_operations" },
  { name: "Sanad Lada",       roleKey: "role_deputy_ops",       deptKey: "dept_operations" },
  { name: "Haya Rihani",      roleKey: "role_head_org",         deptKey: "dept_organization" },
  { name: "Luna Zaatar",      roleKey: "role_deputy_org",       deptKey: "dept_organization" },
  { name: "Tala Qiblawi",     roleKey: "role_head_media",       deptKey: "dept_media" },
  { name: "Anirudh Nagella",  roleKey: "role_deputy_media",     deptKey: "dept_media" },
  { name: "Bayan Abu Qura",   roleKey: "role_deputy_marketing", deptKey: "dept_media" },
  { name: "Mohammad Mazen",   roleKey: "role_cohead_edu",       deptKey: "dept_education" },
  { name: "Mayasa Zaatar",    roleKey: "role_cohead_edu",       deptKey: "dept_education" },
];

export default function Team() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white pb-20">
      <section className="bg-primary text-primary-foreground py-20 border-b border-border mb-16" data-testid="team-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold" data-testid="team-heading">{t("team_heading")}</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-testid="team-grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="border border-border p-6 rounded-none hover:bg-black/[0.02] transition-colors"
              data-testid={`team-card-${index}`}
            >
              <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
                {t(member.roleKey)}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1 font-serif">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t(member.deptKey)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
