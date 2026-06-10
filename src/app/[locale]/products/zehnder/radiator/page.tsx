"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "@/components/common/Image";
import { ChevronRight, Thermometer, ArrowRight } from "lucide-react";

export default function RadiatorPage() {
  const products = [
    {
      id: "design-radiator",
      slug: "design-radiator",
      title: "Дизайн Радиатор",
      subtitle: "Загварлаг дизайн",
      description: "Өндөр чанар, элегант загвар, өндөр дулааны гарц. Дотор болон гадна суурьлуулалт.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      specs: {
        power: "500-2000W",
        material: "Ган / Алюмин",
        connection: "Доод/хажуугийн холболт",
        style: "Заменаас хамаарна",
      },
      colors: ["Цагаан", "Хар", "Металлик", "Бусад өнгө"],
      price: "800,000₮",
    },
    {
      id: "towel-radiator",
      slug: "towel-radiator",
      title: "Алчуур хатаагч Радиатор",
      subtitle: "Унтлагын өрөө, угаалгын өрөө",
      description: "Алчуур хатаах функцтэй радиатор. Унтлагын өрөө, угаалгын өрөөнд тохиромжтой.",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      specs: {
        power: "300-800W",
        type: "Цахилгаан / Усны",
        control: "Ухаалаг удирдлага",
        timer: "Хугацаа тохируулах",
      },
      colors: ["Цагаан", "Хар", "Хром"],
      price: "1,200,000₮",
    },
    {
      id: "floor-radiator",
      slug: "floor-radiator",
      title: "Шалны Радиатор",
      subtitle: "Панорам цонхонд",
      description: "Шалны радиатор. Панорам цонхонд зориулсан. Бага өндөр, өндөр дулааны гарц.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      specs: {
        height: "100-300mm",
        power: "1000-3000W",
        width: "Захиалгаар",
        installation: "Шаланд суурьлуулна",
      },
      colors: ["Цагаан", "Хар", "Металлик"],
      price: "2,500,000₮",
    },
  ];

  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <section className="bg-surface pt-24 pb-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/products" className="text-text-muted hover:text-primary transition-colors">Бүтээгдэхүүн</Link>
            <ChevronRight className="w-4 h-4 text-text-muted" />
            <Link href="/products/zehnder" className="text-text-muted hover:text-primary transition-colors">Zehnder</Link>
            <ChevronRight className="w-4 h-4 text-text-muted" />
            <span className="text-secondary font-semibold">Радиатор</span>
          </div>
        </div>
      </section>

      {/* Title */}
      <section className="bg-surface pb-8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-primary text-sm font-medium">ZEHNDER</p>
                <h1 className="text-3xl md:text-4xl font-bold text-secondary">Радиатор</h1>
              </div>
            </div>
            <p className="text-text-secondary max-w-[700px]">
              Дизайн радиаторууд. Өндөр чанар, элегант загвар, өндөр дулааны гарц. 
              Дотор болон гадна суурьлуулалт.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <p className="text-primary text-sm font-medium mb-1">{product.subtitle}</p>
                  <h3 className="text-xl font-bold text-secondary mb-2">{product.title}</h3>
                  <p className="text-text-secondary mb-4">{product.description}</p>
                  
                  {product.price && (
                    <p className="text-lg font-bold text-primary mb-4">{product.price}</p>
                  )}
                  
                  <div className="space-y-2 mb-4">
                    {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-sm text-text-muted capitalize">{key}</span>
                        <span className="text-sm font-semibold text-secondary">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.colors.slice(0, 3).map((color) => (
                      <span 
                        key={color}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium"
                      >
                        {color}
                      </span>
                    ))}
                    {product.colors.length > 3 && (
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-text-muted">
                        +{product.colors.length - 3}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/products/zehnder/radiator/${product.slug}`}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Дэлгэрэнгүй
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
