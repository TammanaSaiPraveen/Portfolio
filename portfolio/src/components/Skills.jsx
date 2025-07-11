"use client"

import { motion } from "framer-motion"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 93 },
        { name: "JavaScript", level: 97 },
        { name: "React.js", level: 96 },
        { name: "Tailwind CSS", level: 94 },
        { name: "Responsive Design", level: 98 },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 75 },
        { name: "Java", level: 95 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 75 },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
        { name: "SQL", level: 90 },
        { name: "MongoDB", level: 90 },
      ],
    },
    {
      title: "Computer Science",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 },
      ],
    },
  ]

  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Time Management",
    "Adaptability",
  ]

  const additionalSkills = [
    "Git",
    "GitHub",
    "Responsive Design",
    "Debugging",
    "UI/UX Design",
  ]

  return (
    <section
      id="skills"
      className="min-h-screen py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--background-color)' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: 'var(--text-color)' }}
            >
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg p-6 shadow-lg dark:shadow-none border border-gray-200 dark:border-gray-700"
                style={{ backgroundColor: 'var(--card-background)' }}
              >
                <h3
                  className="text-xl font-semibold mb-6"
                  style={{ color: 'var(--text-color)' }}
                >
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span
                          style={{ color: 'var(--text-color)' }}
                        >{skill.name}</span>
                        <span
                          style={{ color: 'var(--text-light)' }}
                        >{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="bg-blue-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 rounded-lg p-6 shadow-lg dark:shadow-none border border-gray-200 dark:border-gray-700"
            style={{ backgroundColor: 'var(--card-background)' }}
          >
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: 'var(--text-color)' }}
            >
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 rounded-lg p-6 shadow-lg dark:shadow-none border border-gray-200 dark:border-gray-700"
            style={{ backgroundColor: 'var(--card-background)' }}
          >
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: 'var(--text-color)' }}
            >
              Additional Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
