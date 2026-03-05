import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Download, Award, Users, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, duration, easing, stagger } from "../lib/motion";

const timeline = [
  {
    year: "2024 - Present",
    role: "Senior Full-Stack Engineer",
    company: "TechCorp",
    description:
      "Leading development of microservices architecture serving 2M+ users. Built design system adopted by 12 teams.",
  },
  {
    year: "2022 - 2024",
    role: "Full-Stack Engineer",
    company: "DataAnalytics Inc.",
    description:
      "Shipped e-commerce platform from 0→1, including checkout, inventory management, and analytics dashboard.",
  },
  {
    year: "2020 - 2022",
    role: "Frontend Engineer",
    company: "Digital Agency",
    description:
      "Built marketing websites and web applications for Fortune 500 clients. Specialized in performance optimization.",
  },
];

const technicalSkills = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", level: "Expert", years: "5+" },
      { name: "JavaScript", level: "Expert", years: "6+" },
      { name: "Python", level: "Proficient", years: "3+" },
      { name: "SQL", level: "Proficient", years: "4+" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Expert", years: "5+" },
      { name: "Next.js", level: "Expert", years: "3+" },
      { name: "Tailwind CSS", level: "Expert", years: "4+" },
      { name: "Motion/Framer", level: "Proficient", years: "3+" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Expert", years: "5+" },
      { name: "Express", level: "Expert", years: "4+" },
      { name: "NestJS", level: "Proficient", years: "2+" },
      { name: "GraphQL", level: "Proficient", years: "2+" },
      { name: "REST API Design", level: "Expert", years: "5+" },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "Docker", level: "Expert", years: "4+" },
      { name: "Kubernetes", level: "Proficient", years: "2+" },
      { name: "AWS", level: "Proficient", years: "3+" },
      { name: "Terraform", level: "Proficient", years: "2+" },
      { name: "Firebase Ecosystem", level: "Expert", years: "4+" },
    ],
  },
  {
    category: "Data",
    skills: [
      { name: "PostgreSQL", level: "Expert", years: "5+" },
      { name: "Redis", level: "Proficient", years: "3+" },
      { name: "MongoDB", level: "Proficient", years: "2+" },
      { name: "Elasticsearch", level: "Familiar", years: "1+" },
    ],
  },
  {
    category: "Testing & CI",
    skills: [
      { name: "Jest", level: "Expert", years: "5+" },
      { name: "Playwright", level: "Proficient", years: "2+" },
      { name: "GitHub Actions", level: "Expert", years: "3+" },
      { name: "CircleCI", level: "Proficient", years: "2+" },
    ],
  },
  {
    category: "Collaboration & Project Management Tools",
    skills: [
      { name: "ClickUp", level: "Proficient", years: "3+" },
      { name: "Notion", level: "Proficient", years: "3+" },
      { name: "Figma", level: "Expert", years: "4+" },
      { name: "Jira", level: "Proficient", years: "2+" },
    ],
  },
];

const interests = [
  {
    icon: Award,
    title: "Technical Lead",
    description:
      "Interested in roles that combine hands-on engineering with mentorship and architecture decisions.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Passionate about building high-performing teams and establishing engineering best practices.",
  },
  {
    icon: TrendingUp,
    title: "Product Thinking",
    description:
      "Focus on delivering measurable impact — not just shipping features, but solving user problems.",
  },
];

export function About() {
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
              About Me
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Hi, I’m Benjamin — a Full-Stack Engineer specializing in modern
              React apps, resilient backend APIs, and pragmatic infrastructure.
              I care about product impact, maintainable code, and delightful
              user experiences.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:text-center"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What I'm Looking For
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Seeking opportunities where I can contribute to meaningful
              products, mentor engineers, and drive technical excellence.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  className="flex flex-col"
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true }}
                  transition={{
                    duration: duration.medium,
                    ease: easing.standard,
                    delay: index * stagger.medium,
                  }}
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                    <interest.icon
                      className="h-5 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {interest.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{interest.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Experience
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              My journey as a full-stack engineer — from frontend specialist to
              end-to-end product ownership.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative pl-8 border-l-2 border-border pb-8 last:pb-0"
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true }}
                  transition={{
                    duration: duration.medium,
                    ease: easing.standard,
                    delay: index * stagger.medium,
                  }}
                >
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold">{item.role}</h3>
                    <span className="text-sm text-muted-foreground">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">
                    {item.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technical Skills
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A comprehensive overview of my technical expertise across
              languages, frameworks, and tools.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {technicalSkills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  className="rounded-lg border border-border bg-card p-6"
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true }}
                  transition={{
                    duration: duration.medium,
                    ease: easing.standard,
                    delay: categoryIndex * stagger.fast,
                  }}
                >
                  <h3 className="font-semibold mb-4">{category.category}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.level}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {skill.years}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
