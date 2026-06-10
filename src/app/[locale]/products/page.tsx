"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "@/components/common/Image";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const t = useTranslations("products");

  const brands = [
    {
      key: "zehnder",
      href: "/products/zehnder",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      color: "#D63031",
      subcategories: ["ERV Систем", "Радиатор"],
    },
    {
      key: "bwt",
      href: "#",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
      color: "#1A3C34",
      subcategories: ["Ус цэвэршүүлэх"],
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Products background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-[100px] py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("title")}</h1>
            <p className="text-lg text-white/80 max-w-[500px]">{t("subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Link href={brand.href}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={brand.image}
                        alt={t(`${brand.key}.title`)}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div 
                          className="text-white font-bold text-2xl mb-2"
                          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                        >
                          {t(`${brand.key}.title`)}
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                          <span className="text-sm">Дэлгэрэнгүй</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-text-secondary mb-4">{t(`${brand.key}.description`)}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {brand.subcategories.map((sub) => (
                          <span 
                            key={sub}
                            className="px-3 py-1 rounded-full text-sm font-medium"
                            style={{ 
                              backgroundColor: `${brand.color}15`,
                              color: brand.color 
                            }}
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
