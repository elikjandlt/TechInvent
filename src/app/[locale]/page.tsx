import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import ZehnderTimeline from "@/components/sections/ZehnderTimeline";
import ZehnderStats from "@/components/sections/ZehnderStats";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Vision />
      <ZehnderTimeline />
      <ZehnderStats />
    </main>
  );
}
