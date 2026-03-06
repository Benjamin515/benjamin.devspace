import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Mail,
  Phone,
  MessageSquare,
  Github,
  Linkedin,
  Calendar,
  MapPin,
  Download,
} from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, duration, easing, stagger } from "../lib/motion";
import { useState } from "react";
import { toast } from "sonner";
import { downloadResume } from "../lib/resume";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "benjamin515webdev@gmail.com",
    href: "mailto:benjamin515webdev@gmail.com",
  },
  {
    icon: Calendar,
    label: "Schedule a Call",
    value: "Book a 30-min chat",
    href: "https://calendly.com/benjamin515webdev/portfolio-discussion-with-benjamin",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    // Displayed with spaces for readability; links use canonical format
    value: "+254 799 700 070",
    hrefTel: "tel:+254799700070",
    hrefWhatsapp: "https://wa.me/254799700070",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Benjamin515",
    href: "https://github.com/Benjamin515",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/benjamin-mwiti-2a79b52a2",
  },
  /* {
    icon: Twitter,
    label: "Twitter",
    value: "@yourusername",
    href: "https://twitter.com/yourusername",
  }, */
  {
    icon: MapPin,
    label: "Location",
    value: "Kenya",
    // value: "San Francisco, CA",
    href: null,
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend API
    console.log("Form submitted:", formData);
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: duration.medium, ease: easing.standard }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I'm always open to discussing new opportunities, collaborations,
              or just chatting about technology. Feel free to reach out!
            </p>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{
                duration: duration.medium,
                ease: easing.standard,
                delay: 0.1,
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me more..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.div
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{
                  duration: duration.medium,
                  ease: easing.standard,
                  delay: 0.2,
                }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>
                      Prefer other channels? Here are all the ways you can reach
                      me.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {contactMethods.map((method, index) => (
                        <motion.div
                          key={method.label}
                          className="flex items-start gap-4"
                          initial={fadeInUp.initial}
                          animate={fadeInUp.animate}
                          transition={{
                            duration: duration.medium,
                            ease: easing.standard,
                            delay: 0.3 + index * stagger.fast,
                          }}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                            <method.icon className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">
                              {method.label}
                            </p>
                            {/* Phone entry: show readable number and Call/WhatsApp links when available */}
                            {method.hrefTel || method.hrefWhatsapp ? (
                              <div className="text-sm break-words">
                                <div className="flex items-center gap-3">
                                  <span className="text-primary font-medium">
                                    {method.value}
                                  </span>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {method.hrefTel && (
                                    <Button asChild variant="outline" size="sm">
                                      <a
                                        href={method.hrefTel}
                                        aria-label={`Call ${method.value}`}
                                      >
                                        <Phone className="mr-2 h-4 w-4" />
                                        Call
                                      </a>
                                    </Button>
                                  )}
                                  {method.hrefWhatsapp && (
                                    <Button asChild variant="ghost" size="sm">
                                      <a
                                        href={method.hrefWhatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Message on WhatsApp ${method.value}`}
                                      >
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        WhatsApp
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </div>
                            ) : method.href ? (
                              <a
                                href={method.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline break-words"
                              >
                                {method.value}
                              </a>
                            ) : (
                              <p className="text-sm text-muted-foreground">
                                {method.value}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{
                  duration: duration.medium,
                  ease: easing.standard,
                  delay: 0.4,
                }}
              >
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle>Looking to Hire?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4 opacity-90">
                      I'm currently open to full-time opportunities, contract
                      work, and technical consulting. Download my resume or
                      schedule a call to discuss your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="secondary"
                        className="cursor-pointer flex-1"
                        // title="/Eng. Benjamin CV.pdf"
                        onClick={downloadResume}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-primary-foreground/20 text-primary-foreground bg-primary hover:bg-primary-foreground/10"
                        asChild
                      >
                        <a
                          href="https://calendly.com/benjamin515webdev"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Schedule Call
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
