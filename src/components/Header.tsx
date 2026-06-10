"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/common/Image";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("home"), href: `/${locale}` },
    { label: t("products"), href: `/${locale}/products` },
    { label: t("news"), href: `/${locale}/news` },
    { label: t("contact"), href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
        <div className="flex items-center justify-between h-20">
          {/* Logos */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <img
              src="/images/zehnder.png"
              alt="Zehnder"
              className="h-10 w-auto object-contain"
            />
            <img
              src="/images/techinvent.png"
              alt="Tech Invent"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href={`/mn${pathname.replace(/^\/(mn|en)/, "")}`}
              className={`text-sm font-medium px-3 py-1 rounded ${
                locale === "mn"
                  ? "bg-primary text-white"
                  : "text-text-secondary hover:text-primary"
              }`}
            >
              MN
            </Link>
            <Link
              href={`/en${pathname.replace(/^\/(mn|en)/, "")}`}
              className={`text-sm font-medium px-3 py-1 rounded ${
                locale === "en"
                  ? "bg-primary text-white"
                  : "text-text-secondary hover:text-primary"
              }`}
            >
              EN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-secondary" />
            ) : (
              <Menu className="w-6 h-6 text-secondary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium py-2 ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-text-secondary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <Link
                  href={`/mn${pathname.replace(/^\/(mn|en)/, "")}`}
                  className={`text-sm font-medium px-3 py-1 rounded ${
                    locale === "mn"
                      ? "bg-primary text-white"
                      : "text-text-secondary"
                  }`}
                >
                  MN
                </Link>
                <Link
                  href={`/en${pathname.replace(/^\/(mn|en)/, "")}`}
                  className={`text-sm font-medium px-3 py-1 rounded ${
                    locale === "en"
                      ? "bg-primary text-white"
                      : "text-text-secondary"
                  }`}
                >
                  EN
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
