"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const timelineEvents = [
  { year: "2015", title: "Байгуулагдсан", description: "Tech Invent ХХК байгуулагдсан" },
  { year: "2017", title: "Zehnder-тэй хамтын ажиллагаа", description: "Zehnder брэндийн дистрибьютер болсон" },
  { year: "2019", title: "BWT нэмэгдсэн", description: "BWT ус цэвэршүүлэх систем нэмэгдсэн" },
  { year: "2021", title: "100+ төсөл", description: "100 гаруй төсөл амжилттай хэрэгжсэн" },
  { year: "2023", title: "Тэргүүлэгч", description: "Монголын зах зээлд тэргүүлэгч байр суурь" },
  { year: "2025", title: "Zehnder Group China", description: "Zehnder Group China-ийн онцгой эрхтэй дистрибьютерээр ажиллаж эхэлсэн. Монгол улсын цаг уур нөхцөлд тохируулан бүтээгдэхүүн нийлүүлж байна." },
];

export default function Timeline() {
  const t = useTranslations("timeline");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-[3px] uppercase mb-4">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            {t("title")}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 text-center md:text-right">
                  <div className={`${index % 2 !== 0 ? "md:text-left" : ""}`}>
                    <h3 className="text-2xl font-bold text-primary mb-2">{event.year}</h3>
                    <h4 className="text-lg font-semibold text-secondary mb-1">{event.title}</h4>
                    <p className="text-text-secondary">{event.description}</p>
                  </div>
                </div>

                <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10 hidden md:block" />

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
