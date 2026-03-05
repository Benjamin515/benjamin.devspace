import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { BackToTop } from "../components/BackToTop";
import { motion } from "motion/react";
import { fadeIn, duration, easing } from "../lib/motion";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollToTop />
      <BackToTop />
      <Header />
      <motion.main
        className="flex-1"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={{ duration: duration.medium, ease: easing.standard }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}