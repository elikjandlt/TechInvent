"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import { Award, Handshake, Factory } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-[560px]"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              {t("title")}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              {t("description")}
            </p>
            
            {/* Key Achievements */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Passive Premium Сертификат</h3>
                  <p className="text-text-secondary text-sm">Монголдоо анхны Пассив барилга дээр Passive Premium сертификат авч, эзэндээ нэмэлт орлого бүрдүүлдэг байшин болон хорооллыг бүтээн байгуулахаар ажиллаж байна.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">Zehnder Group China</h3>
                  <p className="text-text-secondary text-sm">2025 оноос Zehnder Group China-ийн онцгой эрхтэй дистрибьютерээр ажиллаж байна. Монгол улсын цаг уур нөхцөлд тохируулан хэрэглэгч та бүхэндээ нийлүүлж байна.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">ERV Систем</h3>
                  <p className="text-text-secondary text-sm">Дотороос гарч буй бохир, дулаан агаараас дулаан болон чийгийн тодорхой хувийг сэргээж, гаднаас орж ирэх цэвэр агаарт дамжуулдаг дэвшилтэт технологи.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-[480px]"
          >
            <div className="relative aspect-[480/340] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="About Tech Invent"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
