"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "@/components/common/Image";
import { ChevronRight, Wind, Check, ArrowRight } from "lucide-react";

export default function ERVPage() {
  const products = [
    {
      id: "comfowall-caw",
      slug: "comfowall-caw",
      title: "ComfoWall CAW",
      subtitle: "Хананд шууд суурьлуулах",
      description: "Сургуулийн болон заалны агааржуулалт. Стенд хувилбар, таазанд суурьлуулсан, комфомембран дотор агуулсан.",
      image: "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      specs: {
        airflow: "70/100/300м³/цаг",
        efficiency: "ER 50%, HR 60%",
        noise: "<45 дБ",
        filter: "HEPA + Нүүрс, PM2.5 >95%",
      },
      models: ["CAW300", "CAW100", "CAW70"],
      price: "15,000,000₮",
    },
    {
      id: "comfoair-d",
      slug: "comfoair-d",
      title: "Comfoair D",
      subtitle: "Орон сууцны агааржуулалт",
      description: "Энтальпийн сэргээх агааржуулалтын төхөөрөмж. Таазанд суурьлуулна. Комфомембран дотор нь бактерийн эсрэг үйлчилгээтэй.",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      specs: {
        airflow: "250/350/500 м³/цаг",
        efficiency: "ER 60-70%, HR 70-75%",
        pressure: "Статик 100Па",
        filter: "HEPA H11, PM2.5 90%",
      },
      models: ["CA-D725", "CA-D735", "CA-D750", "CA-D925", "CA-D935", "CA-D950"],
      price: "25,000,000₮",
    },
    {
      id: "heatpump",
      slug: "heatpump",
      title: "HeatPump хосолсон",
      subtitle: "Илүү дулааны үр ашиг",
      description: "HeatPump хосолсон агааржуулалтын төхөөрөмж. Илүү дулааны үр ашигтай, өвлийн хүйтэнд илүү тогтвортой.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      specs: {
        airflow: "120-500 м³/цаг",
        efficiency: "ER 60%, HR 70%",
        heater: "PTC PreHeater",
        control: "APP боломжтой",
      },
      models: ["CHM120", "CHM200", "CHM300", "CHM500"],
      price: "35,000,000₮",
    },
    {
      id: "industrial",
      slug: "industrial",
      title: "Аж үйлдвэрийн зориулалт",
      subtitle: "Томоохон барилгуудад",
      description: "Comfoair D: CA-D7100/7150/7200/7300. Таазанд суурьлуулсан, EC фенүүд, хөргөх/халаах боломжтой.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      specs: {
        airflow: "1000/1500/2000/3000м³/цаг",
        pressure: "Статик 200Па",
        efficiency: "ER 60%, HR 70%",
        filter: "HEPA, PM2.5 90%",
      },
      models: ["CA-D7100", "CA-D7150", "CA-D7200", "CA-D7300"],
      price: "50,000,000₮",
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
            <span className="text-secondary font-semibold">ERV Систем</span>
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
                <Wind className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-primary text-sm font-medium">ZEHNDER</p>
                <h1 className="text-3xl md:text-4xl font-bold text-secondary">ERV Систем</h1>
              </div>
            </div>
            <p className="text-text-secondary max-w-[700px]">
              Эрчим хүчнийг сэргээх агааржуулалтын систем (ERV). Дулаан болон чийг солилцууртай, 
              Монголын хүйтэн уур амьсгалд тохирсон шийдлүүд.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="bg-surface rounded-lg p-3">
                        <p className="text-xs text-text-muted uppercase mb-1">{key}</p>
                        <p className="text-sm font-semibold text-secondary">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.models.slice(0, 3).map((model) => (
                      <span 
                        key={model}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium"
                      >
                        {model}
                      </span>
                    ))}
                    {product.models.length > 3 && (
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-text-muted">
                        +{product.models.length - 3}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/products/zehnder/erv/${product.slug}`}
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
