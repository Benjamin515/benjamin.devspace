import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, duration, easing } from "../lib/motion";

export function NotFound() {
  return (
    <div className="relative flex items-center justify-center min-h-[70vh]">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ duration: duration.medium, ease: easing.standard }}
        >
          <p className="text-base font-semibold text-primary">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or deleted.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View Projects
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
