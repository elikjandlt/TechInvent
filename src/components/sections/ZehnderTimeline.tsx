"use client";

import { motion } from "framer-motion";

export default function ZehnderTimeline() {
  const zehnderTimeline = [
    { year: "1895", title: "Zehnder Group байгуулагдсан", description: "Швейцарын ган хийц болон ванны радиатор үйлдвэрлэгч №1 компани." },
    { year: "2001", title: "Агааржуулалтын бизнест орсон", description: "Гэр ахуйн агааржуулалтын Европын №1 үйлдвэрлэгч." },
    { year: "2007-2008", title: "Аж үйлдвэрийн агаар цэвэршүүлэх систем", description: "Freshman AB/SE-ийг худалдан авч, Clean Air Solutions хэлтэс байгуулагдсан." },
    { year: "2009", title: "Бүрэн системийн нийлүүлэгч", description: "Zehnder бүрэн системийн шийдэл нийлүүлэгчээр тодорхойлогдсон." },
    { year: "2010", title: "БНХАУ-д эрчим хүчний хэмнэлттэй барилга", description: "ZG&BBMG-тай хамтын ажиллагаа эхэлсэн." },
    { year: "2011", title: "Анхны Пассив барилга", description: "Qinhuangdao-д анхны Пассив барилгын төсөл хэрэгжсэн." },
    { year: "2014", title: "CHM патент", description: "CHM бүтээгдэхүүний патент авсан." },
    { year: "2015", title: "Хөргөх таазны систем", description: "Хөргөх таазны системийг танилцуулсан. PHI-certified бүтээгдэхүүн." },
    { year: "2018", title: "PHI-certified CHM", description: "CHM бүтээгдэхүүн PHI-certified болсон." },
    { year: "2025", title: "Tech Invent - албан ёсны дистрибьютер", description: "Zehnder Group China-ийн онцгой эрхтэй дистрибьютерээр Монголд ажиллаж эхэлсэн." },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-[3px] uppercase mb-4">ХӨГЖЛИЙН ТҮҮХ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Zehnder Group-ийн түүх</h2>
          <p className="text-text-secondary max-w-[700px] mx-auto">
            1895 оноос өнөөдрийг хүртэлх 130 жилийн түүх
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block"></div>
          
          <div className="space-y-8">
            {zehnderTimeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex flex-col md:flex-row items-center gap-4 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div>
                    <div className="text-primary font-bold text-xl mb-1">{item.year}</div>
                    <h3 className="font-semibold text-secondary mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm">{item.description}</p>
                  </div>
                </div>
                
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10 hidden md:block flex-shrink-0"></div>
                
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
