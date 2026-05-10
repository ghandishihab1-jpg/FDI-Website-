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

const DEPT_STYLES: Record<string, { border: string; roleColor: string; cardBg: string }> = {
  dept_presidency:   { border: "#CC0000", roleColor: "#CC0000", cardBg: "#ffffff" },
  dept_operations:   { border: "#3D6B8E", roleColor: "#3D6B8E", cardBg: "#ffffff" },
  dept_organization: { border: "#7CAABF", roleColor: "#5A8FAA", cardBg: "#ffffff" },
  dept_media:        { border: "#D4E8EE", roleColor: "#3D6B8E", cardBg: "#EEF6FA" },
  dept_education:    { border: "#CC0000", roleColor: "#9B0000", cardBg: "#FFF5F5" },
};

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
          {TEAM_MEMBERS.map((member, index) => {
            const style = DEPT_STYLES[member.deptKey] ?? DEPT_STYLES.dept_operations;
            return (
              <div
                key={index}
                className="border border-border p-6 rounded-none transition-colors"
                style={{
                  borderLeftColor: style.border,
                  borderLeftWidth: "4px",
                  backgroundColor: style.cardBg,
                }}
                data-testid={`team-card-${index}`}
              >
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: style.roleColor }}
                >
                  {t(member.roleKey)}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1 font-serif">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(member.deptKey)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-6">
          {Object.entries(DEPT_STYLES).map(([deptKey, style]) => (
            <div key={deptKey} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-none"
                style={{ backgroundColor: style.border }}
              />
              <span className="text-sm text-muted-foreground">{t(deptKey as TranslationKey)}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
