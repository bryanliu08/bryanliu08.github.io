"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Publications data - empty for now
const publications: never[] = [];

// Projects data - empty for now
const projects: never[] = [];

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-20 md:py-32">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-medium hover-underline"
          >
            bl
          </button>
          <div className="flex items-center gap-6 text-sm text-muted">
            <button onClick={() => scrollToSection("about")} className="hover:text-foreground transition-colors hover-underline">
              about
            </button>
            <button onClick={() => scrollToSection("publications")} className="hover:text-foreground transition-colors hover-underline">
              publications
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-foreground transition-colors hover-underline">
              projects
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero / About */}
      <section id="about" className="min-h-[50vh] flex flex-col justify-center pt-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="text-5xl md:text-6xl">═</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-medium tracking-tight mb-6"
          >
            hi! i&apos;m <span className="font-semibold">bryan</span> 👋
          </motion.h1>

          {/* Profile Image */}
          <motion.div
            variants={fadeInUp}
            className="mt-2 mb-8"
          >
            <div className="relative w-32 h-32 overflow-hidden rounded-lg">
              <img
                src="/profile.png"
                alt="Bryan Liu"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4 text-muted leading-relaxed">
            <p>
              incoming undergraduate mathematics student at{" "}
              <span className="text-foreground">university of toronto</span>.
            </p>

            <p>
              my research interests lie in{" "}
              <em className="text-foreground not-italic">multi-agent alignment</em>,
              particularly the dynamics of{" "}
              <span className="text-foreground">byzantine agents</span> and{" "}
              <span className="text-foreground">contagion</span> in multi-agent systems—
              understanding how misinformation spreads
              with the broader goal of making these systems safer and more robust
              to failures, attacks, and emergent risks.
            </p>

            <p>
              i currently do research with{" "}
              <a
                href="https://zhijing-jin.com/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover-underline inline-flex items-center gap-1"
              >
                prof. zhijing jin&apos;s jinesis ai lab
                <ArrowUpRight className="w-3 h-3" />
              </a>
              , have worked in software engineering for{" "}
              <span className="text-foreground">claymoo</span>, and enjoy exploring
              the intersection of ml systems and quantitative methods.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-5 mt-10"
          >
            <a
              href="https://github.com/bryanliu08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/bryan-liu-525237304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:bryanliu@cs.toronto.edu"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <span className="text-muted text-sm">bryan [at] cs [dot] toronto [dot] edu</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-lg font-medium">publications</h2>
            <span className="text-muted text-sm">selected work</span>
          </div>

          <p className="text-muted text-sm">
            papers in progress. check back soon!
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-lg font-medium">projects</h2>
            <span className="text-muted text-sm">things i&apos;ve built</span>
          </div>

          <p className="text-muted text-sm">
            projects coming soon. currently brewing some ideas!
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 border-t border-border"
      >
        <div className="flex items-center justify-between text-sm text-muted">
          <p>© 2025 bryan liu</p>
          <p>built with next.js + tailwind</p>
        </div>
      </motion.footer>
    </main>
  );
}
