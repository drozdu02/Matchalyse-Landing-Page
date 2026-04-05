import { Button } from "@/components/ui/button"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import HowItWorks from "./components/how-it-works"
import Features from "./components/features"
import Stats from "./components/stats"
import Footer from "./components/footer"

export default function Page() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
}
