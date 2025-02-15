"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "experience", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Abhilash
                  <br />
                  <span className="text-muted-foreground">Reddy Mudhireddy</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Software Developer Engineer building practical solutions with <span className="text-foreground">MERN stack</span>, 
                <span className="text-foreground"> Java</span>, and <span className="text-foreground">cloud technologies</span>.
              </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>Boston, MA</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Software Developer Engineer</div>
                  <div className="text-muted-foreground">@ BNY Mellon</div>
                  <div className="text-xs text-muted-foreground">Jan 2025 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">EDUCATION</div>
                <div className="space-y-2">
                  <div className="text-foreground">MS in Computing & Information Systems</div>
                  <div className="text-muted-foreground">@ Youngstown State University</div>
                  <div className="text-xs text-muted-foreground">GPA: 3.7 | May 2025</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["Java", "React", "AWS", "Spring Boot", "MongoDB", "Docker"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="experience"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Professional Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2021 - Present</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  period: "Jan 2025 - Present",
                  role: "Software Developer Engineer (Contract)",
                  company: "BNY Mellon",
                  location: "United States",
                  description: "Designed and maintained a MERN-based customer portal with real-time notifications, serving 8,000+ daily active users and reducing support ticket volume.",
                  achievements: [
                    "Built an AWS Lambda-based ingestion pipeline processing 40,000+ transactions per hour",
                    "Reduced query latency from 400ms to 150ms via Redis caching",
                    "Mentored 2 interns on full-stack best practices"
                  ],
                  tech: ["MERN", "AWS Lambda", "S3", "DynamoDB", "Redis"],
                },
                {
                  period: "Mar 2022 - May 2023",
                  role: "Associate Software Engineer",
                  company: "Emids Technologies",
                  location: "Bangalore, Karnataka",
                  description: "Designed and deployed a Medidata document-tracking module that processed 15,000+ clinical documents across 30 studies.",
                  achievements: [
                    "Configured BDD with 30 feature files, aligning requirements",
                    "Optimized database interactions to persist 200+ trial participants",
                    "Delivered feature-ready releases in 4-week sprints"
                  ],
                  tech: ["Java 8", "Spring Boot", "Spring JPA", "BDD"],
                },
                {
                  period: "Jan 2021 - Mar 2022",
                  role: "Software Engineer",
                  company: "IPHen Technologies Pvt Ltd",
                  location: "Bangalore, Karnataka",
                  description: "Developed and deployed a secure banking dashboard on the MERN stack, enabling 5,000+ users to track transactions and account insights.",
                  achievements: [
                    "Integrated with payment gateways and KYC APIs",
                    "Reduced manual verification time by 40%",
                    "Improved transaction history rendering latency by 55%"
                  ],
                  tech: ["MERN", "Node.js", "Express.js", "MongoDB", "Payment APIs"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group space-y-4 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="grid lg:grid-cols-12 gap-4 sm:gap-6">
                    <div className="lg:col-span-3">
                      <div className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                        {job.period}
                      </div>
                    </div>

                    <div className="lg:col-span-9 space-y-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                        <div className="text-muted-foreground">{job.company} • {job.location}</div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                      
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-foreground mt-1.5 w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {job.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs text-muted-foreground border border-border rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Course Projects</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Real-Time Collaborative Coding Environment",
                  description: "Built a MERN-based platform allowing developers to write, compile, and run code collaboratively in real time for 15+ concurrent users.",
                  features: [
                    "Implemented WebSocket communication and shared editor powered by Yjs",
                    "Low-latency syntax highlighting and version control",
                    "12 RESTful APIs for authentication, project management, and code execution",
                    "90% code coverage with Jest and React Testing Library"
                  ],
                  tech: ["Express.js", "Node.js", "React", "WebSocket", "MongoDB", "Yjs"],
                },
                {
                  title: "Fraud Detection Web Application",
                  description: "Developed a Spring Boot service simulating real-time fraud detection, processing 500+ transactions per minute.",
                  features: [
                    "Engineered rule-based detection engine with configurable thresholds",
                    "Achieved 85% accuracy on synthetic datasets",
                    "Containerized with Docker Compose for consistent deployment",
                    "Rapid testing in multiple environments"
                  ],
                  tech: ["Java", "Spring Boot", "REST APIs", "Docker", "Docker Compose"],
                },
              ].map((project, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-foreground mt-1.5 w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-muted-foreground border border-border rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[3] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about software engineering and cloud technologies.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:abhilashreddy0554@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">abhilashreddy0554@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span>📱 +1 (724) 570-0762</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@abhilash-mudhireddy", url: "https://github.com/abhilash-mudhireddy" },
                  { name: "LinkedIn", handle: "abhilash-mudhireddy", url: "https://linkedin.com/in/abhilash-mudhireddy" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Abhilash Reddy Mudhireddy. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with Next.js & Tailwind CSS</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
