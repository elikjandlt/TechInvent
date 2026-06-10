"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Award, Lightbulb, Headphones } from "lucide-react";

const icons = {
  quality: Award,
  innovation: Lightbulb,
  service: Headphones,
};

export default function Vision() {
  const t = useTranslations("vision");

  const cards = [
    { key: "quality", icon: icons.quality },
    { key: "innovation", icon: icons.innovation },
    { key: "service", icon: icons.service },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-[3px] uppercase mb-4">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            {t("title")}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {t(`cards.${card.key}.title`)}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {t(`cards.${card.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
