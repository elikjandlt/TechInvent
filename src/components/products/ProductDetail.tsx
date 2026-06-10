"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "@/components/common/Image";
import { ChevronRight, Check, Phone, ShoppingCart, ChevronDown, ChevronUp, Truck, Shield, Wrench, HelpCircle } from "lucide-react";

interface ProductDetailProps {
  breadcrumb: {
    parent: { label: string; href: string };
    grandparent?: { label: string; href: string };
    current: string;
  };
  brand: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  price?: string;
  specs: Record<string, string>;
  keyFeatures: string[];
  models?: string[];
  warranty?: string;
  category: string;
  tag?: string | null;
}

export default function ProductDetail({
  breadcrumb,
  brand,
  title,
  subtitle,
  description,
  longDescription,
  image,
  price,
  specs,
  keyFeatures,
  models,
  warranty,
  category,
  tag,
}: ProductDetailProps) {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("description");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Related products based on category
  const relatedProducts = [
    {
      id: 1,
      title: category === "erv" ? "Comfoair D" : "Дизайн Радиатор",
      price: category === "erv" ? "25,000,000₮" : "800,000₮",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
      slug: category === "erv" ? "comfoair-d" : "design-radiator",
    },
    {
      id: 2,
      title: category === "erv" ? "HeatPump хосолсон" : "Алчуур хатаагч",
      price: category === "erv" ? "35,000,000₮" : "1,200,000₮",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80",
      slug: category === "erv" ? "heatpump" : "towel-radiator",
    },
    {
      id: 3,
      title: category === "erv" ? "Аж үйлдвэрийн ERV" : "Шалны Радиатор",
      price: category === "erv" ? "50,000,000₮" : "2,500,000₮",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
      slug: category === "erv" ? "industrial" : "floor-radiator",
    },
  ].filter(p => p.title !== title);

  const getTagColor = (tagValue: string | null | undefined) => {
    if (!tagValue) return null;
    if (tagValue.includes("түгээмэл")) return "bg-primary/10 text-primary border border-primary/20";
    if (tagValue.includes("хүчин")) return "bg-orange-50 text-orange-600 border border-orange-200";
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
            <Link href="/products/zehnder" className="text-text-muted hover:text-primary transition-colors">Zehnder</Link>
            <ChevronRight className="w-4 h-4 text-text-muted" />
            <span className="text-secondary font-semibold">{title}</span>
          </div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="bg-surface pb-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm aspect-[4/3] flex items-center justify-center p-8">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              {tag && (
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}>
                  {tag}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{category === "erv" ? "ERV system" : "Радиатор"}</span>
                <span className="text-sm text-text-muted">{brand}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-secondary">{title}</h1>
              <p className="text-text-secondary">{subtitle}</p>

              {price && (
                <div className="text-3xl font-bold text-secondary">{price}</div>
              )}

              <div className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowOrderModal(true)}
                  className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Захиалах
                </button>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Зөвлөгөө авах
                </Link>
              </div>

              {warranty && (
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Shield className="w-4 h-4" />
                  {warranty}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details & Sidebar */}
      <section className="py-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Accordion */}
            <div className="lg:col-span-2 space-y-4">
              {/* Description */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection("description")}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-secondary">Дэлгэрэнгүй мэдээлэл</span>
                  </div>
                  {openSection === "description" ? <ChevronUp className="w-5 h-5 text-text-muted" /> : <ChevronDown className="w-5 h-5 text-text-muted" />}
                </button>
                {openSection === "description" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5"
                  >
                    <div className="text-text-secondary space-y-4">
                      {longDescription.split('\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Specs */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection("specs")}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Wrench className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-secondary">Техник үзүүлэлт</span>
                  </div>
                  {openSection === "specs" ? <ChevronUp className="w-5 h-5 text-text-muted" /> : <ChevronDown className="w-5 h-5 text-text-muted" />}
                </button>
                {openSection === "specs" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(specs).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-secondary"><span className="font-medium">{key}:</span> {value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Models */}
              {models && models.length > 0 && (
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection("models")}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-semibold text-secondary">Үндсэн загварууд</span>
                    </div>
                    {openSection === "models" ? <ChevronUp className="w-5 h-5 text-text-muted" /> : <ChevronDown className="w-5 h-5 text-text-muted" />}
                  </button>
                  {openSection === "models" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5"
                    >
                      <div className="flex flex-wrap gap-2">
                        {models.map((model) => (
                          <span
                            key={model}
                            className="px-4 py-2 bg-gray-50 rounded-lg text-secondary font-medium border border-gray-200"
                          >
                            {model}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-secondary mb-4">Хүргэлт & Баталгаа</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-secondary">Улаанбаатар хотод үнэгүй хүргэлт</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-secondary">Албан ёсны баталгаа</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-secondary">Мэргэжлийн суурьлуулалт</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-secondary">Борлуулалтын дараах үйлчилгээ</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-5">
                <h3 className="font-semibold text-secondary mb-2">Тусламж хэрэгтэй юу?</h3>
                <p className="text-sm text-text-secondary mb-4">Та өөрийн хэрэгцээнд тохирсон системийг сонгоход манай мэргэжилтнүүд тусална.</p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Холбоо барих
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-surface">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
            <h2 className="text-2xl font-bold text-secondary mb-8">Ижил бүтээгдэхүүнүүд</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/zehnder/${category}/${product.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-text-muted font-medium uppercase mb-1">{brand}</p>
                    <h3 className="font-bold text-secondary mb-2">{product.title}</h3>
                    <p className="text-lg font-bold text-secondary">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href={`/products/zehnder/${category}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg text-secondary hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Бүх бүтээгдэхүүнүүд рүү буцах
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Order Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-bold text-secondary mb-2">Захиалга хийх</h3>
            <p className="text-text-secondary mb-4">
              {title} - {subtitle}
            </p>
            <p className="text-sm text-text-muted mb-6">
              Та бидэнтэй холбогдож захиалгаа хийгээрэй.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+97699782331"
                className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +976 9978-2331
              </a>
              <button
                onClick={() => setShowOrderModal(false)}
                className="px-6 py-3 border border-gray-300 rounded-lg text-secondary hover:bg-gray-50 transition-colors"
              >
                Хаах
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
