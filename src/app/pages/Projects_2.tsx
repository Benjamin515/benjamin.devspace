import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { motion } from "motion/react";
import { fadeInUp, duration, easing, stagger } from "../lib/motion";

export function Projects() {
  // Desired category display order
  const orderedCategories = [
    "Scalable E-Commerce Platforms",
    "Real-Time Analytics Dashboards",
    "CI/CD Pipeline Automation",
    "Enterprise Design Systems",
    // old cross-domain category removed now that projects have specific categories
    "Kenya-Specific Web Applications",
  ];

  const grouped = projects.reduce<Record<string, typeof projects>>((acc, p) => {
    const key = p.category || "Other";
    acc[key] = acc[key] || [];
    acc[key].push(p);
    return acc;
  }, {});

  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.priority || 99) - (b.priority || 99));

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A curated, categorized showcase emphasizing strategic impact and
              technical depth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-6">Featured Work</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {featured.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true }}
                  transition={{
                    duration: duration.medium,
                    ease: easing.standard,
                    delay: i * stagger.fast,
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Sections (ordered) */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
          {orderedCategories.map((cat) => {
            const items = grouped[cat];
            if (!items || items.length === 0) return null;
            return (
              <div key={cat}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{cat}</h3>
                  <span className="text-sm text-muted-foreground">
                    {items.length} projects
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
                  {items.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={fadeInUp.initial}
                      whileInView={fadeInUp.animate}
                      viewport={{ once: true }}
                      transition={{
                        duration: duration.medium,
                        ease: easing.standard,
                        delay: index * stagger.fast,
                      }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
