"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import Link from "next/link";
import {
  Sun,
  Thermometer,
  Wind,
  ShieldCheck,
  Home,
  TrendingUp,
  Heart,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function PassivePremiumPage() {
  const t = useTranslations("products");

  const stats = [
    { value: "-40°", label: "Сэрүүсгэх дээд хэм", sub: "DESIGNED FOR" },
    { value: "#1", label: "Дэлхийн хамгийн хүйтэн", sub: "COLDEST CAPITAL" },
    { value: "~90%", label: "Эрчим хүчний хэмнэлт", sub: "ENERGY SAVINGS" },
    { value: "~2сая₮", label: "Сарын орлого (зун)", sub: "MONTHLY INCOME" },
  ];

  const criteria = [
    { value: "≤15", unit: "kWh/m²·жил", label: "Халаалтын эрэлт / Heating" },
    { value: "≤0.6", unit: "ACH₅₀", label: "Агаар битүүмжлэл / Airtight" },
    { value: "≤10", unit: "W/m²", label: "Халаалтын ачаалал / Load" },
  ];

  const classes = [
    { name: "CLASSIC", value: "60 kWh/m²·жил", desc: "суурь түвшин" },
    { name: "PLUS", value: "45 kWh/m²·жил", desc: "+эрчим хүч үйлдвэрлэнэ" },
    { name: "PREMIUM", value: "30 kWh/m²·жил", desc: "≥120 үйлдвэрлэнэ", active: true },
  ];

  const systems = [
    {
      icon: Sun,
      value: "24 kWh",
      label: "Нарны систем",
      sub: "SOLAR PV",
      desc: "Дээврийн 24 кВт нарны систем жилд ~41,000 кВт·ц цахилгаан үйлдвэрлэнэ.",
    },
    {
      icon: Thermometer,
      value: "COP ~3-4",
      label: "Дулааны насос",
      sub: "HEAT PUMPS",
      desc: "Газрын гүний + агаарын эх дулааны насос — тогтвортой, өндөр үр ашигтай халаалт.",
    },
    {
      icon: Wind,
      value: "Low-temp",
      label: "Нам хэмийн халаалт",
      sub: "FLOOR HEATING",
      desc: "Шалны болон нам хэмийн халаалт — тав тухтай, хэмнэлттэй, насосгүй төгс нийцлээ.",
    },
    {
      icon: ShieldCheck,
      value: "Passive",
      label: "Дулаалга & битүүмжлэл",
      sub: "ENVELOPE",
      desc: "Зузаан дулаалга, гурвалсан цонх, дулаан сэлбэгч агааржуулалт — дулаан гадагшилдаггүй.",
    },
  ];

  const values = [
    {
      icon: TrendingUp,
      title: "Save",
      mnTitle: "ХЭМНЭЛТ",
      desc: "Эрчим хүчний зардал ~90% бага. Хүйтэн өвөлд ч халаалтын төлбөргүй амьдрах нөхцөл.",
    },
    {
      icon: Zap,
      title: "Earn",
      mnTitle: "ОРЛОГО",
      desc: "Илүүдэл эрчим хүчээ төвийн шугамд зарж жилд ~10 сая₮ хүртэл орлого олох боломж.",
    },
    {
      icon: Heart,
      title: "Live",
      mnTitle: "ТАВ ТУХ",
      desc: "Жигд дулаан, цэвэр агаар, чимээгүй. -40°C-т ч 22°C тогтвортой дотоод орчин.",
    },
  ];

  const timeline = [
    { date: "2026.06.20", title: "Суурь тавих", desc: "Газар шороо, суурь — Groundbreaking" },
    { date: "2026.07", title: "Бүтээц & дулаалга", desc: "Хана, дээвэр, гадна дулаалга & битүүмжлэл" },
    { date: "2026.08", title: "Инженерийн систем", desc: "Нарны систем, дулааны насос, нам хэмийн халаалт" },
    { date: "2026.09.09", title: "Ашиглалт & сертификат", desc: "Дуугуйдал, тохируулга, Passive Premium гэрчилгээ" },
  ];

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end pb-16 md:pb-28 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/passive-premium/hero.jpg"
            alt="Passive Premium"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-[100px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.25em] text-white/80 uppercase">
                Passive Premium · -40°C · Ulaanbaatar
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.05]">
              Орлоготой
              <br />
              <span className="italic font-serif font-normal">орон сууц</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/80 max-w-2xl leading-relaxed mb-10">
              Дэлхийн хамгийн хүйтэн нийслэлд -40°C-т тав тухтай амьдрах, эрчим хүчээ
              зарж орлого олох — Passive House Premium сертификаттай хаус.
            </p>

            <div className="flex flex-wrap items-center gap-8 text-white/70">
              <span className="text-sm tracking-[0.15em] uppercase">Comfort</span>
              <span className="w-8 h-px bg-white/30" />
              <span className="text-sm tracking-[0.15em] uppercase">Savings</span>
              <span className="w-8 h-px bg-white/30" />
              <span className="text-sm tracking-[0.15em] uppercase">Income</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-surface text-secondary">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-primary pt-6"
              >
                <p className="text-xs tracking-[0.15em] text-text-muted uppercase mb-2">{stat.sub}</p>
                <p className="text-4xl md:text-5xl font-light text-secondary mb-2">{stat.value}</p>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 Vision */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase">
                  АЛСЫН ХАРАА · THE VISION
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                Эрчим хүч үйлдвэрлэдэг
                <br />
                <span className="italic font-serif font-normal text-primary">байшин</span>
              </h2>

              <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                Mongolia&apos;s first Passive House Premium certified home — a building that
                generates more energy than it uses, turning the world&apos;s harshest winter
                into an asset. Бид дэлхийн хамгийн хүйтэн нийслэлд тав тух, хэмнэлт,
                орлогыг нэгтгэсэн орон сууцны шинэ загварыг нэвтрүүлж байна.
              </p>

              <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-border">
                <Image
                  src="/images/passive-premium/logo.png"
                  alt="Certified Passive House"
                  width={72}
                  height={72}
                  className="object-contain"
                />
                <div>
                  <p className="text-xs text-text-muted">Certified</p>
                  <p className="font-semibold text-secondary">Passive House</p>
                  <p className="text-xs text-text-muted">Premium Class</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/passive-premium/passive02.jpeg"
                alt="Passive Premium Haus"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02 Standard */}
      <section className="py-20 md:py-28 bg-white text-secondary">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase">
              КОНЦЕПЦ · THE STANDARD
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Passive House <span className="italic font-serif font-normal text-primary">гэж юу вэ?</span>
          </h2>

          <p className="text-lg text-text-secondary max-w-3xl leading-relaxed mb-16">
            Маш сайн дулаалга, агаар ул нэвтрүүлэх битүүмжлэл, дулаан сэлбэгдэг агааржуулалтаар
            эрчим хүчний хэрэглээг эрс багасгасан барилгын олон улсын стандарт. Premium түвшин
            нь хамгийн өндөр — өөрөө сэргээдэг эрчим хүч үйлдвэрлэдэг.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-xs tracking-[0.15em] text-text-muted uppercase mb-6">ГОЛ ШАЛГУУР ҮЗҮҮЛЭЛТҮҮД · CORE CRITERIA</p>
              <div className="space-y-6">
                {criteria.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-6 border-t border-border pt-6"
                  >
                    <span className="text-4xl md:text-5xl font-light text-secondary w-28 shrink-0">{item.value}</span>
                    <div>
                      <p className="font-medium text-secondary">{item.label}</p>
                      <p className="text-sm text-text-muted">{item.unit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.15em] text-text-muted uppercase mb-6">ГҮЙЦЭТГЭЛИЙН ШАТ · PERFORMANCE CLASSES</p>
              <div className="space-y-4">
                {classes.map((cls, index) => (
                  <motion.div
                    key={cls.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex items-center justify-between p-5 border ${cls.active ? "border-primary/50 bg-primary/10" : "border-border bg-surface"}`}
                  >
                    <div className="flex items-center gap-6">
                      <span className={`text-sm font-semibold tracking-[0.15em] ${cls.active ? "text-primary" : "text-text-secondary"}`}>{cls.name}</span>
                      <span className="text-text-muted text-sm">{cls.value}</span>
                    </div>
                    <span className="text-sm text-text-muted">{cls.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Challenge */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase">
              СОРИЛТ · THE CHALLENGE
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-12">
            Яагаад Монголд <span className="italic font-serif font-normal text-primary">бэрхшээлтэй</span> вэ?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: "-23°", label: "1-р сарын дундаж температур (онцгойд -40°C хүртэл)" },
              { value: "8 сар", label: "Халаалтын улирал (9/15 – 5/15) — жилийн 2/3" },
              { value: "Нүүрс", label: "Айл өрхийн халаалт бараг бүхэлдээ нүүрсэнд түлгуүрлэдэг → утаа" },
              { value: "300₮", label: "1 кВт·ц цахилгааны үнэ — жилээс жилд өсөж байна" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-t-2 border-primary pt-6"
              >
                <p className="text-3xl md:text-4xl font-bold text-secondary mb-3">{item.value}</p>
                <p className="text-sm text-text-secondary">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface text-secondary rounded-2xl p-8 md:p-10 border-l-4 border-primary"
          >
            <p className="text-xs tracking-[0.15em] text-text-muted uppercase mb-3">БОЛОМЖ · THE OPPORTUNITY</p>
            <p className="text-xl md:text-2xl font-medium mb-2">
              Хамгийн хатуу нөхцөл бол хамгийн том нотолгоо. Энд бүтэх юм бол хаана ч бүтнэ.
            </p>
            <p className="text-text-secondary italic">
              If a Passive Premium home works in the world&apos;s coldest capital, it works anywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 05 Design */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/passive-premium/passive01.jpg"
                alt="Modern Passive Premium Home"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase">
                  АРХИТЕКТУР · THE DESIGN
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-8">
                Орчин үеийн <span className="italic font-serif font-normal text-primary">нэг давхар хаус</span>
              </h2>

              <div className="space-y-6">
                {[
                  { num: "01", title: "Хавтгай дээвэр", desc: "Цэвэр шугам, нарны панельд тохиромжтой дээвэр" },
                  { num: "02", title: "Том шилэн фасад", desc: "Урд талын өргөн цонх — өвлийн нарны дулааныг авна" },
                  { num: "03", title: "Модон louver", desc: "Наран халхавч & тансаг өнгө төрх" },
                  { num: "04", title: "Дотор гараж + террас", desc: "Машин, амралтын талбай нэгдсэн" },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 border-t border-border pt-6">
                    <span className="text-primary font-semibold text-sm">{item.num}</span>
                    <div>
                      <p className="font-medium text-secondary mb-1">{item.title}</p>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 08 System */}
      <section className="py-20 md:py-28 bg-white text-secondary">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase">
              ШИЙДЭЛ · THE SYSTEM
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-12">
            Технологийн <span className="italic font-serif font-normal text-primary">дөрвөн тулгуур</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systems.map((sys, index) => (
              <motion.div
                key={sys.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-surface border border-border rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <sys.icon className="w-8 h-8 text-primary" />
                  <span className="text-xs tracking-[0.1em] text-text-muted uppercase">{sys.sub}</span>
                </div>

                <p className="text-3xl font-light text-secondary mb-2">{sys.value}</p>
                <p className="font-semibold text-secondary mb-3">{sys.label}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{sys.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-surface text-secondary">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase">
              ҮНЭ ЦЭНЭ · WHY IT PAYS
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-12">
            Гурван давхар <span className="italic font-serif font-normal text-primary">үнэ цэнэ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <val.icon className="w-10 h-10 text-primary mb-6" />
                <p className="text-2xl font-serif italic text-secondary mb-1">{val.title}</p>
                <p className="text-sm font-semibold tracking-[0.15em] text-text-muted mb-4">{val.mnTitle}</p>
                <p className="text-text-secondary leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 13 Timeline */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase">
              ХУГАЦАА · TIMELINE
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-12">
            Барилгын төлөвлөгөө — <span className="italic font-serif font-normal text-primary">2026</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  {index < timeline.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px bg-primary/30" />
                  )}
                </div>

                <p className="text-2xl font-light text-primary mb-2">{item.date}</p>
                <p className="font-semibold text-secondary mb-2">{item.title}</p>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-text-muted pl-4 border-l-4 border-primary">
            Нийт ~12 долоо хоног: суурь тавихаас ашиглалт хүртэл.
          </p>
        </div>
      </section>

      {/* 20 Next Project */}
      <section className="py-20 md:py-28 bg-surface text-secondary">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.2em] text-text-muted uppercase">
                  ИРЭЭДҮЙ · NEXT PROJECT (2027)
                </span>
              </div>

              <p className="text-7xl md:text-9xl font-light text-secondary mb-6">2027</p>

              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
                Дараагийн төсөл — <span className="italic font-serif font-normal text-primary">Passive Condo</span>
              </h2>

              <div className="space-y-4">
                {[
                  "Олон айлын орон сууцны хувилбар",
                  "Хаус төслийн ар хэсэгт байршина",
                  "Эхний хаусын туршлага дээр суурьлина",
                  "Нийт 209.8 kW нарны систем (хөгжүүлэлт)",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 border-b border-border pb-4">
                    <Home className="w-4 h-4 text-primary" />
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/passive-premium/condo.jpg"
                alt="Passive Condo 2027"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.2em] text-text-muted uppercase mb-4">COMFORT · SAVINGS · INCOME</p>

            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              Passive Premium <span className="italic font-serif font-normal text-primary">Орлоготой орон сууц</span>
            </h2>

            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              Дэлхийн хамгийн хүйтэн нийслэлд тав тух, хэмнэлт, орлогыг нэг дор.
              Бидэнтэй холбогдож, Passive Premium амьдралын хэв маягийн талаар дэлгэрэнгүй мэдээлэл аваарай.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primaryDark transition-colors group"
            >
              Холбоо барих
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
