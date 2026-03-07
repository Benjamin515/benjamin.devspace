import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/Benjamin515",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/benjamin-devspace/",
      icon: Linkedin,
    },
    /* {
      name: "Twitter",
      href: "https://twitter.com/yourusername",
      icon: Twitter,
    }, */
    {
      name: "Email",
      href: "mailto:benjamin515webdev@gmail.com",
      icon: Mail,
    },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                to={item.href}
                className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={item.name}
            >
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Portfolio. Built with React,
          TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-2 text-center text-xs leading-5 text-muted-foreground">
          Designed with accessibility in mind • WCAG 2.1 AA compliant
        </p>
      </div>
    </footer>
  );
}
