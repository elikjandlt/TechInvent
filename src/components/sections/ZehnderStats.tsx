"use client";

import { motion } from "framer-motion";
import { Award, Factory, Globe, Users, BookOpen, Building2 } from "lucide-react";

export default function ZehnderStats() {
  const zehnderStats = [
    { number: "1895", label: "Байгуулагдсан", icon: Award },
    { number: "830+", label: "Патент", icon: BookOpen },
    { number: "70+", label: "Улс", icon: Globe },
    { number: "4,200", label: "Ажилтан", icon: Users },
    { number: "14", label: "Үйлдвэр", icon: Building2 },
    { number: "20,000+", label: "Сургалт/жил", icon: Factory },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-[3px] uppercase mb-4">ZEHNDER GROUP</p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">130 жилийн инноваци</h2>
          <p className="text-text-secondary max-w-[700px] mx-auto">
            Дэлхийн ган хийц болон ванны радиатор үйлдвэрлэгч №1 компани. 
            Европ, Хойд Америк, Хятадад 14 үйлдвэртэй.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {zehnderStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.number}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
