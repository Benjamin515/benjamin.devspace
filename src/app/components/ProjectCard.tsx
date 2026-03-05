import { Link } from "react-router";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { hoverLift } from "../lib/motion";
import type { Project } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={hoverLift} className="h-full">
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <ImageWithFallback
            src={project.hero}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex flex-col items-center justify-between mb-3">
            <div className="ml-2 mb-4">
              <Badge variant="ghost" className="text-xs">
                {project.category}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{project.tech.length - 3}
                </Badge>
              )}
            </div>
          </div>
          <h3 className="font-semibold leading-tight">{project.title}</h3>
          <p className="text-sm text-muted-foreground mt-2">
            {project.tagline}
          </p>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground">{project.summary}</p>
          <ul className="mt-4 space-y-2">
            {project.impact.slice(0, 2).map((item, index) => (
              <li
                key={index}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button asChild className="w-full" variant="default">
            <Link to={`/projects/${project.slug}`}>
              View Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="flex gap-2 w-full">
            {project.links.live && (
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Live
                </a>
              </Button>
            )}
            {project.links.code && (
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-1 h-3 w-3" />
                  Code
                </a>
              </Button>
            )}
            {/* project.links.storybook && (
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a
                  href={project.links.storybook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="mr-1 h-3 w-3" />
                  Docs
                </a>
              </Button>
            ) */}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
