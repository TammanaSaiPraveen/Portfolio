"use client"

import { motion } from "framer-motion"

const stats = [
  {
    icon: "💻",
    value: "50+",
    label: "Projects Completed",
  },
  {
    icon: "👥",
    value: "20+",
    label: "Satisfied Clients",
  },
  {
    icon: "🏆",
    value: "3+",
    label: "Years Experience",
  },
]

const About = () => {
  return (
    <section
      id="about"
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7Lv1Lgh3uH18kefmOEylHYWiyvTKd_8Tw-wtZgtdYoUvjN35hnBcatMLyaUGoS4MgOw&usqp=CAU"
                alt="Web Developer Illustration"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3
                className="text-2xl font-semibold"
                style={{ color: 'var(--text-color)' }}
              >
              Hi, I am a Full Stack Web Developer and Web Designer, passionate about building modern web applications using the MERN stack.
              </h3>
              <p
                style={{ color: 'var(--text-light)' }}
              >
              I am a Computer Science student from India with a strong foundation in software development and a keen interest in full stack technologies. I've worked on various real-world projects, taking care of both frontend and backend development.
              </p>
              <p
                style={{ color: 'var(--text-light)' }}
              >
              I have hands-on experience working with startups and freelance projects where I was actively involved in building major features and solving real problems. I'm comfortable working with technologies like MongoDB, Express.js, React.js, Node.js, and more.
              </p>
              <p
                style={{ color: 'var(--text-light)' }}
              >
              I enjoy exploring new tools and technologies and always strive to improve my skills. I'm enthusiastic about open source, continuous learning, and building meaningful digital experiences.
               </p>
              <div className="grid grid-cols-2 gap-4">
                {/* <div>
                  <h4 className="font-semibold text-gray-900">Name:</h4>
                  <p className="text-gray-600">Tammana Sai Praveen</p>
                </div> */}
                {/* <div>
                  <h4 className="font-semibold text-gray-900">Email:</h4>
                  <p className="text-gray-600">hello@example.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location:</h4>
                  <p className="text-gray-600">India</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Availability:</h4>
                  <p className="text-gray-600">Available for hire</p>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
