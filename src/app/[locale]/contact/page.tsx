"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");

  const contactInfo = [
    {
      icon: MapPin,
      label: t("info.address"),
      value: "Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Энхтайвны өргөн чөлөө 15",
    },
    {
      icon: Phone,
      label: t("info.phone"),
      value: "+976 7711 2233",
    },
    {
      icon: Mail,
      label: t("info.email"),
      value: "info@techinvent.mn",
    },
    {
      icon: Clock,
      label: t("info.hours"),
      value: "Да-Ба: 09:00 - 18:00",
    },
  ];

  return (
    <main className="flex-1">
      {/* Title */}
      <section className="pt-24 pb-8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-medium tracking-[3px] uppercase mb-4">ХОЛБОО БАРИХ</p>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary">{t("title")}</h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-[500px]"
            >
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-secondary mb-1">{info.label}</p>
                        <p className="text-text-secondary">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <form className="bg-white rounded-xl p-8 lg:p-10 shadow-sm space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">{t("form.name")}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder={t("form.name")}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">{t("form.email")}</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder={t("form.email")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">{t("form.phone")}</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder={t("form.phone")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">{t("form.message")}</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    placeholder={t("form.message")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  {t("form.submit")}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
