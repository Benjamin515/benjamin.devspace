import { projects } from "../data/projects";
import { kenyaProjects } from "../data/projects-kenya";
import { ProjectCard } from "../components/ProjectCard";
import { motion } from "motion/react";
import { fadeInUp, duration, easing, stagger } from "../lib/motion";

export function Projects() {
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
              A curated collection of projects demonstrating end-to-end
              ownership: from product thinking and architecture to
              implementation, testing, and deployment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
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
      </section>

      {/* Kenya-Specific Web Applications Section */}
      <section className="border-t border-border py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Kenya-Specific Web Applications
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Purpose-built platforms for East Africa. Solving real problems,
              bridging critical gaps, and empowering communities to thrive in
              the digital economy.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {kenyaProjects.map((project, index) => (
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
      </section>
    </div>
  );
}
