"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "@/components/common/Image";
import { ChevronRight, Wind, Thermometer, Award } from "lucide-react";

export default function ZehnderPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Бүгд", icon: null },
    { id: "erv", label: "ERV system", icon: Wind },
    { id: "radiator", label: "Радиатор", icon: Thermometer },
  ];

  const products = [
    {
      id: 1,
      category: "erv",
      slug: "comfowall-caw",
      brand: "ZEHNDER",
      title: "ComfoWall CAW",
      description: "Сургуулийн болон заалны агааржуулалт. Стенд хувилбар, таазанд суурьлуулсан.",
      specs: "70-300м³/цаг | ER 50% | PM2.5 >95%",
      price: "15,000,000₮",
      image: "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=400&q=80",
      tag: null,
    },
    {
      id: 2,
      category: "erv",
      slug: "comfoair-d",
      brand: "ZEHNDER",
      title: "Comfoair D",
      description: "Энтальпийн сэргээх агааржуулалт. Таазанд суурьлуулна. Бактерийн эсрэг.",
      specs: "250-500м³/цаг | ER 60-70% | HEPA H11",
      price: "25,000,000₮",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
      tag: "Хамгийн түгээмэл",
    },
    {
      id: 3,
      category: "erv",
      slug: "heatpump",
      brand: "ZEHNDER",
      title: "HeatPump хосолсон",
      description: "HeatPump хосолсон агааржуулалт. Илүү дулааны үр ашигтай.",
      specs: "120-500м³/цаг | PTC PreHeater | APP",
      price: "35,000,000₮",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
      tag: "Өндөр хүчин чадал",
    },
    {
      id: 4,
      category: "erv",
      slug: "industrial",
      brand: "ZEHNDER",
      title: "Аж үйлдвэрийн ERV",
      description: "Томоохон барилгуудад. EC фенүүд, хөргөх/халаах боломжтой.",
      specs: "1000-3000м³/цаг | 200Па | HEPA",
      price: "50,000,000₮",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
      tag: null,
    },
    {
      id: 5,
      category: "radiator",
      slug: "design-radiator",
      brand: "ZEHNDER",
      title: "Дизайн Радиатор",
      description: "Өндөр чанар, элегант загвар. Дотор болон гадна суурьлуулалт.",
      specs: "500-2000W | Ган/Алюмин | 10 бар",
      price: "800,000₮",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80",
      tag: "Хамгийн түгээмэл",
    },
    {
      id: 6,
      category: "radiator",
      slug: "towel-radiator",
      brand: "ZEHNDER",
      title: "Алчуур хатаагч",
      description: "Алчуур хатаах функцтэй. Унтлагын өрөө, угаалгын өрөөнд.",
      specs: "300-800W | Цахилгаан/Усны | IP24",
      price: "1,200,000₮",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80",
      tag: null,
    },
    {
      id: 7,
      category: "radiator",
      slug: "floor-radiator",
      brand: "ZEHNDER",
      title: "Шалны Радиатор",
      description: "Панорам цонхонд зориулсан. Бага өндөр, өндөр дулааны гарц.",
      specs: "1000-3000W | 100-300мм | Шалан суурь",
      price: "2,500,000₮",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
      tag: null,
    },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const getTagColor = (tag: string | null) => {
    if (!tag) return null;
    if (tag.includes("түгээмэл")) return "bg-primary/10 text-primary border border-primary/20";
    if (tag.includes("хүчин")) return "bg-orange-50 text-orange-600 border border-orange-200";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <section className="bg-surface pt-24 pb-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/products" className="text-text-muted hover:text-primary transition-colors">Бүтээгдэхүүн</Link>
            <ChevronRight className="w-4 h-4 text-text-muted" />
            <span className="text-secondary font-semibold">Zehnder</span>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="bg-surface pb-8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              ISO баталгаат
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Бүтээгдэхүүн</h1>
            <p className="text-text-secondary max-w-[700px] mx-auto">
              Олон улсын стандартын чанартай бүтээгдэхүүнүүд
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-surface pb-8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-text-secondary hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-1">{product.brand}</p>
                    <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                    <p className="text-sm text-text-secondary mb-3 line-clamp-2">{product.description}</p>
                    
                    <div className="bg-gray-50 rounded-lg px-3 py-2 mb-3">
                      <p className="text-xs text-text-muted">{product.specs}</p>
                    </div>

                    {product.tag && (
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getTagColor(product.tag)}`}>
                        {product.tag}
                      </span>
                    )}
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-lg font-bold text-secondary">{product.price}</span>
                      <Link
                        href={`/products/zehnder/${product.category}/${product.slug}`}
                        className="flex items-center gap-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        Дэлгэрэнгүй
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
