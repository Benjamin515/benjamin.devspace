import { useParams, Link, Navigate } from "react-router";
import { projects } from "../data/projects";
import { kenyaProjects } from "../data/projects-kenya";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import {
  ExternalLink,
  Github,
  BookOpen,
  ArrowLeft,
  Code2,
  Server,
  Cloud,
  TestTube,
  Target,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, duration, easing, stagger } from "../lib/motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CaseStudy() {
  const { slug } = useParams();
  const project =
    projects.find((p) => p.slug === slug) ||
    kenyaProjects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const sections = [
    {
      title: "Frontend",
      icon: Code2,
      data: project.frontend,
      color: "text-blue-500",
    },
    {
      title: "Backend",
      icon: Server,
      data: project.backend,
      color: "text-green-500",
    },
    {
      title: "Infrastructure",
      icon: Cloud,
      data: project.infra,
      color: "text-purple-500",
    },
    {
      title: "Testing",
      icon: TestTube,
      data: project.testing,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="relative">
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <Button asChild variant="ghost" size="sm">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              {project.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {project.links.live && (
                <Button asChild>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </a>
                </Button>
              )}
              {project.links.code && (
                <Button asChild variant="outline">
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.links.storybook && (
                <Button asChild variant="outline">
                  <a
                    href={project.links.storybook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Storybook
                  </a>
                </Button>
              )}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="mt-12 rounded-lg overflow-hidden border border-border shadow-lg"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{
              duration: duration.medium,
              ease: easing.standard,
              delay: 0.1,
            }}
          >
            <ImageWithFallback
              src={project.hero}
              alt={project.title}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ duration: duration.medium, ease: easing.standard }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Role & Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Role</p>
                    <p className="text-sm text-muted-foreground">
                      {project.role}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Timeline</p>
                    <p className="text-sm text-muted-foreground">
                      {project.timeline}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Team</p>
                    <p className="text-sm text-muted-foreground">
                      {project.team}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{
                duration: duration.medium,
                ease: easing.standard,
                delay: stagger.fast,
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {project.impact.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Context */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0 mb-12"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-primary" />
              Problem & Context
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{
                duration: duration.medium,
                ease: easing.standard,
                delay: stagger.fast,
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                    Problems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.problem.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{
                duration: duration.medium,
                ease: easing.standard,
                delay: stagger.medium,
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Target className="h-4 w-4 text-orange-500" />
                    Constraints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.constraints.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{
                duration: duration.medium,
                ease: easing.standard,
                delay: stagger.slow,
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Success Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.successCriteria.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dives */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0 mb-12"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technical Implementation
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Deep dive into the architecture, design decisions, and
              implementation details across frontend, backend, infrastructure,
              and testing.
            </p>
          </motion.div>
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true }}
                transition={{
                  duration: duration.medium,
                  ease: easing.standard,
                  delay: index * stagger.fast,
                }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <section.icon className={`h-6 w-6 ${section.color}`} />
                      {section.data.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">
                      {section.data.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.data.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Metrics */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0 mb-12"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-primary" />
              Outcomes & Metrics
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Measurable impact and key performance indicators.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.metric}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true }}
                transition={{
                  duration: duration.medium,
                  ease: easing.standard,
                  delay: index * stagger.fast,
                }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {outcome.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {outcome.metric}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl flex items-center gap-3 mb-8">
              <Lightbulb className="h-8 w-8 text-primary" />
              Key Learnings
            </h2>
            <div className="space-y-6">
              {project.learnings.map((learning, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true }}
                  transition={{
                    duration: duration.medium,
                    ease: easing.standard,
                    delay: index * stagger.medium,
                  }}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{learning}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <Separator className="mb-12" />
            <h3 className="text-2xl font-bold mb-6">Explore More Projects</h3>
            <Button asChild size="lg">
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4 rotate-180" />
                View All Projects
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
