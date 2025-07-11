"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// import portfolioImg from "../assets/projects/portfolio.png"
// import ecommerceImg from "../assets/projects/ecommerce.png"
// import languageTranslatorImg from "../assets/projects/language-translator.png"
// import weatherAppImg from "../assets/projects/weather-app.png"
// import todoAppImg from "../assets/projects/todo-app.png"
// import chatbotImg from "../assets/projects/chatbot.png"

import portfolioImg from "../assets/Projects/portfolio.png"
import ecommerceImg from "../assets/Projects/ecommerce.png"
import languageTranslatorImg from "../assets/Projects/language-translator.png"
import weatherAppImg from "../assets/Projects/weather-app.png"
import todoAppImg from "../assets/Projects/todo-app.png"
import chatbotImg from "../assets/Projects/chatbot.png"


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS",
      image: portfolioImg,
      category: "web",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "http://tammanasaipraveen-portfolio.netlify.app/",
      githubUrl: "https://github.com/TammanaSaiPraveen/Portfolio"
    },
    {
      id: 2,
      title: "Ecommerce App",
      description: "A e-commerce platform with React frontend ",
      image: ecommerceImg,
      category: "web",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://tammanasaipraveen-react-ecommerce.netlify.app/",
      githubUrl: "https://github.com/TammanaSaiPraveen/React-Ecommerce"
    },
    {
      id: 4,
      title: "Language Translator",
      description: "A web app that translates languages using external translation APIs",
      image: languageTranslatorImg,
      category: "web",
      technologies: ["React", "API Integration", "JavaScript"],
      liveUrl: "",
      githubUrl: "https://github.com/TammanaSaiPraveen/Language-Translator/tree/master"
    },
    {
      id: 5,
      title: "Weather App",
      description: "A weather forecasting app providing current weather data with a clean UI",
      image: weatherAppImg,
      category: "web",
      technologies: ["React", "API Integration", "CSS"],
      liveUrl: "https://tammanasaipraveen-weatherapp.netlify.app/",
      githubUrl: "https://github.com/TammanaSaiPraveen/Weather-App"
    },
    {
      id: 6,
      title: "Todo App",
      description: "A simple and efficient todo list app with CRUD operations",
      image: todoAppImg,
      category: "web",
      technologies: ["React", "JavaScript", "CSS"],
      liveUrl: "https://todolist-appw.netlify.app/",
      githubUrl: "https://github.com/TammanaSaiPraveen/ToDoList"
    },
    {
      id: 7,
      title: "Chatbot",
      description: "An AI-powered chatbot built with React frontend and Node.js backend for seamless conversational experiences",
      image: chatbotImg,
      category: "web",
      technologies: ["React", "Node.js", "Express", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
  ]

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section
      id="projects"
      className="min-h-screen py-20 transition-colors duration-300"
      style={{ backgroundColor: 'var(--background-color)' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: 'var(--text-color)' }}
            >
              My Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-4 mb-12">
            {["all", "web", "mobile", "design"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full capitalize transition-colors ${
                  activeFilter === filter ? "bg-blue-600 text-white" : ""
                }`}
                style={activeFilter !== filter ? { backgroundColor: 'var(--card-background)', color: 'var(--text-color)', borderColor: 'var(--gray-200)' } : {}}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg dark:shadow-none border border-gray-200 dark:border-gray-700"
                style={{ backgroundColor: 'var(--card-background)' }}
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-blue-700 transition-colors"
                      style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--text-color)' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mb-4"
                    style={{ color: 'var(--text-light)' }}
                  >{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-light)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
