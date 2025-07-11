"use client"

import { motion } from "framer-motion"
// import resumeFile from "../assets/pdf/resume.pdf"
import resumeFile from "../assets/pdf/TammanaSaiPraveen-Resume222.pdf"

const Resume = () => {
  const experiences = [
    {
      _id: "1",
      title: "FullStack Development Intern",
      company: "Koyya Enterprises Private Limited",
      period: "Sep 2024 – Jan 2025",
      description: "Worked on developing responsive user interfaces and implementing modern frontend features.",
      achievements: [
        "Developed responsive web interfaces using React and Tailwind CSS",
        "Implemented interactive UI components and animations"
      ]
    }
  ]

  const education = [
    {
      _id: "1",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Sasi Institute of Technology and Engineering",
      period: "2022 – Present",
      details: "GPA: 9.0"
    },
    {
      _id: "2",
      degree: "Intermediate (MPC)",
      institution: "Sasi Junior College, Tanuku",
      period: "2020 – 2022",
      details: "GPA: 9.2"
    },
    {
      _id: "3",
      degree: "SSC",
      institution: "Sasi English Medium School, Tanuku",
      period: "2019 – 2020",
      details: "GPA: 10"
    }
  ]

  return (
    <section
      id="resume"
      className="min-h-screen py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--background-color)' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: 'var(--text-color)' }}
            >
              Resume
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience Section */}
            <div>
              <h3
                className="text-2xl font-semibold mb-8 flex items-center"
                style={{ color: 'var(--text-color)' }}
              >
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white mr-3">
                  💼
                </span>
                Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div
                    key={exp._id}
                    className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-700"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="space-y-2">
                      <h4
                        className="text-xl font-semibold"
                        style={{ color: 'var(--text-color)' }}
                      >
                        {exp.title}
                      </h4>
                      <div
                        className="text-sm"
                        style={{ color: 'var(--text-light)' }}
                      >
                        {exp.company} | {exp.period}
                      </div>
                      <p
                        style={{ color: 'var(--text-light)' }}
                      >{exp.description}</p>
                      {exp.achievements?.length > 0 && (
                        <ul
                          className="list-disc list-inside space-y-1"
                          style={{ color: 'var(--text-light)' }}
                        >
                          {exp.achievements.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3
                className="text-2xl font-semibold mb-8 flex items-center"
                style={{ color: 'var(--text-color)' }}
              >
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white mr-3">
                  🎓
                </span>
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu) => (
                  <div
                    key={edu._id}
                    className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-700"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="space-y-2">
                      <h4
                        className="text-xl font-semibold"
                        style={{ color: 'var(--text-color)' }}
                      >
                        {edu.degree}
                      </h4>
                      <div
                        className="text-sm"
                        style={{ color: 'var(--text-light)' }}
                      >
                        {edu.institution} | {edu.period}
                      </div>
                      {edu.details && (
                        <p
                          style={{ color: 'var(--text-light)' }}
                        >{edu.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center mt-16">
            <a
              href={resumeFile}
              download="MyResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
