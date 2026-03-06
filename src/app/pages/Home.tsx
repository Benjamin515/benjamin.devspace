import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { motion } from "motion/react";
import { fadeInUp, duration, easing, stagger } from "../lib/motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  TestTube,
  Zap,
  ArrowRight,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript"],
    icon: Code2,
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python"],
    icon: Server,
  },
  {
    category: "Data",
    items: ["PostgreSQL", "Redis", "MongoDB"],
    icon: Database,
  },
  { category: "Infra", items: ["Docker", "Kubernetes", "AWS"], icon: Cloud },
  {
    category: "Testing",
    items: ["Jest", "Playwright", "Cypress"],
    icon: TestTube,
  },
  {
    category: "Serverless & BaaS",
    items: ["Firebase", "Supabase", "Vercel"],
    icon: Zap,
  },
];

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "30+" },
  { label: "Lighthouse Score", value: "90+" },
];

export function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                Available for hire
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Full-Stack Engineer who builds scalable, user-centric web products
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl">
              Frontend polish + backend reliability. I ship features end-to-end:
              product thinking, APIs, infra, and tests.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg">
                <Link to="/projects">
                  See Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{
              duration: duration.medium,
              ease: easing.standard,
              delay: 0.1,
            }}
          >
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col-reverse gap-y-3"
                  initial={fadeInUp.initial}
                  animate={fadeInUp.animate}
                  transition={{
                    duration: duration.medium,
                    ease: easing.standard,
                    delay: 0.2 + index * stagger.fast,
                  }}
                >
                  <dt className="text-base leading-7 text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-bold tracking-tight">
                    {stat.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              End-to-end ownership from concept to production. Each project
              includes technical deep dives, architecture decisions, and
              measurable outcomes.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true }}
                transition={{
                  duration: duration.medium,
                  ease: easing.standard,
                  delay: index * stagger.medium,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-16 flex justify-center"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:text-center"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Full-Stack Expertise
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I work across the entire stack — from designing component APIs to
              optimizing database queries and configuring CI/CD pipelines.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  className="relative pl-16"
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true }}
                  transition={{
                    duration: duration.medium,
                    ease: easing.standard,
                    delay: index * stagger.fast,
                  }}
                >
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <skill.icon
                        className="h-6 w-6 text-primary-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    {skill.category}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </dd>
                </motion.div>
              ))}
              <motion.div
                className="relative pl-16"
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true }}
                transition={{
                  duration: duration.medium,
                  ease: easing.standard,
                  delay: skills.length * stagger.fast,
                }}
              >
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Zap
                      className="h-6 w-6 text-primary-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  CI/CD
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">GitHub Actions</Badge>
                    <Badge variant="secondary">Terraform</Badge>
                  </div>
                </dd>
              </motion.div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
