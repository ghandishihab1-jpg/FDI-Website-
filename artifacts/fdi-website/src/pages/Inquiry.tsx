import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CONTACT_EMAIL = "info@futuredoctorinitiative.org";

export default function Inquiry() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const subject = form.subject
      ? `FDI Inquiry: ${form.subject}`
      : `FDI Inquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white pb-20">
      <section className="bg-primary text-primary-foreground py-20 border-b border-border mb-16" data-testid="inquiry-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold" data-testid="inquiry-heading">{t("inquiry_heading")}</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" data-testid="inquiry-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">{t("contact_info")}</h2>
              <div className="space-y-4">
                <div>
                  <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs block mb-1">{t("email_label")}</span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-foreground hover:text-accent transition-colors" data-testid="contact-email">
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div>
                  <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs block mb-1">{t("instagram_label")}</span>
                  <a href="https://www.instagram.com/fdi.jo" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent transition-colors">
                    @fdi.jo
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">{t("direct_contacts")}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-foreground font-serif">Shihab Ghandi</h3>
                  <span className="text-muted-foreground text-sm block mb-1">{t("role_president_label")}</span>
                  <a href="mailto:ghandishihab1@gmail.com" className="text-accent hover:text-accent/80 transition-colors">ghandishihab1@gmail.com</a>
                </div>
                <div>
                  <h3 className="font-bold text-foreground font-serif">Mohammed Ghandi</h3>
                  <span className="text-muted-foreground text-sm block mb-1">{t("role_copresident_label")}</span>
                  <a href="mailto:Mohamedghandimohamed@gmail.com" className="text-accent hover:text-accent/80 transition-colors">Mohamedghandimohamed@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 border border-border" style={{ backgroundColor: 'var(--color-muted)' }}>
            {submitted ? (
              <div className="text-center py-12" data-testid="inquiry-success">
                <div className="text-4xl mb-4 text-accent font-serif font-bold">{t("sent_heading")}</div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">{t("sent_sub")}</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  {t("sent_desc_pre")} <strong>{CONTACT_EMAIL}</strong>{t("sent_desc_post")}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="border border-border text-foreground hover:bg-black/5 px-6 py-2 text-sm font-medium transition-colors rounded-none"
                  data-testid="inquiry-btn-reset"
                >
                  {t("send_another")}
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">{t("send_inquiry_heading")}</h2>
                <form className="space-y-4" onSubmit={handleSubmit} data-testid="inquiry-form">
                  <div>
                    <label htmlFor="name" className="sr-only">{t("field_name")}</label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t("field_name")}
                      required
                      className="w-full bg-white border border-border text-foreground px-4 py-3 focus:outline-none focus:border-accent rounded-none"
                      data-testid="inquiry-input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">{t("field_email")}</label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t("field_email")}
                      required
                      className="w-full bg-white border border-border text-foreground px-4 py-3 focus:outline-none focus:border-accent rounded-none"
                      data-testid="inquiry-input-email"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="sr-only">{t("field_subject")}</label>
                    <input
                      type="text"
                      id="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder={t("field_subject")}
                      className="w-full bg-white border border-border text-foreground px-4 py-3 focus:outline-none focus:border-accent rounded-none"
                      data-testid="inquiry-input-subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">{t("field_message")}</label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t("field_message")}
                      rows={6}
                      required
                      className="w-full bg-white border border-border text-foreground px-4 py-3 focus:outline-none focus:border-accent rounded-none resize-none"
                      data-testid="inquiry-input-message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-4 font-medium transition-colors w-full rounded-none mt-4"
                    data-testid="inquiry-btn-submit"
                  >
                    {t("btn_send")}
                  </button>
                  <p className="text-xs text-muted-foreground text-center pt-1">
                    {t("mailto_note")} {CONTACT_EMAIL}
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
