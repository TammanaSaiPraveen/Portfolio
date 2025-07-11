"use client";

import { motion } from "framer-motion";

import reactImg from "../assets/certificates/react.jpg";
import advancedReactImg from "../assets/certificates/advanced-react.jpg";
import frontendImg from "../assets/certificates/frontend.jpg";
import htmlCssImg from "../assets/certificates/html-css.jpg";
import javascriptImg from "../assets/certificates/javascript.jpg";
import mongodbImg from "../assets/certificates/mongodb.jpg";
// import sqlImg from "../assets/certificates/sql.png";
import gitImg from "../assets/certificates/git.jpg";
// import javaImg from "../assets/certificates/java.png";
import pythonImg from "../assets/certificates/python.jpg";
// import algo1Img from "../assets/certificates/algo1.png";
// import algo2Img from "../assets/certificates/algo2.png";

const placeholderImg = "https://via.placeholder.com/150/CCCCCC/FFFFFF?text=No+Image";

const Certifications = () => {
  const certifications = [
    { id: 1, name: "React", issuer: "Meta", platform: "Coursera", date: "2023", url: "https://www.coursera.org/account/accomplishments/verify/U0LTU8CLHG2M", image: reactImg },
    { id: 2, name: "Advanced React", issuer: "Meta", platform: "Coursera", date: "2023", url: "https://www.coursera.org/account/accomplishments/verify/2Y2SSRFX0EZP", image: advancedReactImg },
    { id: 3, name: "Introduction to Frontend Development", issuer: "Meta", platform: "Coursera", date: "2023", url: "https://www.coursera.org/account/accomplishments/verify/KM85AEVW8SLN", image: frontendImg },
    { id: 4, name: "HTML and CSS", issuer: "W3C", platform: "edX", date: "2023", url: "https://courses.edx.org/certificates/13fadd2642374bc6a9c03bfc9b477586", image: htmlCssImg },
    { id: 5, name: "JavaScript", issuer: "Cisco", platform: "Cisco", date: "2023", url: "https://drive.google.com/file/d/1bh-oaM7UytF-i5ZCrNoVQhTV79C6TIP8/view", image: javascriptImg },
    { id: 6, name: "MongoDB", issuer: "MongoDB University", platform: "edX", date: "2023", url: "https://courses.edx.org/certificates/191ddb3b2f6a44d5ac56876e0e491a1d", image: mongodbImg },
    // { id: 7, name: "SQL", issuer: "University of California", platform: "Coursera", date: "2023", url: "#", image: sqlImg },
    { id: 8, name: "Git and GitHub", issuer: "Microsoft", platform: "edX", date: "2023", url: "https://courses.edx.org/certificates/ec167f7403834e4d953acea709f97329", image: gitImg },
    // { id: 9, name: "Java Programming", issuer: "Duke University", platform: "Coursera", date: "2023", url: "#", image: javaImg },
    { id: 10, name: "Python Crash Course", issuer: "Google", platform: "Coursera", date: "2023", url: "https://www.coursera.org/account/accomplishments/verify/TYFDRBE7FYBY", image: pythonImg },
    // { id: 11, name: "Algorithms Part I", issuer: "Princeton University", platform: "Coursera", date: "2023", url: "#", image: algo1Img },
    // { id: 12, name: "Algorithms Part II", issuer: "Princeton University", platform: "Coursera", date: "2023", url: "#", image: algo2Img }
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen py-20 transition-colors duration-300"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--text-color)" }}>
              My Certifications
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg p-6 shadow-lg dark:shadow-none border border-gray-200 dark:border-gray-700"
                style={{
                  backgroundColor: "var(--card-background)",
                  color: "var(--text-color)",
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={cert.image || placeholderImg}
                    alt={cert.name}
                    className="w-24 h-24 object-contain mb-4 rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = placeholderImg;
                    }}
                  />
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm mb-1" style={{ color: "var(--text-light)" }}>
                    {cert.issuer}
                  </p>
                  <p className="text-xs mb-1" style={{ color: "var(--text-light)" }}>
                    {cert.platform}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-light)" }}>
                    {cert.date}
                  </p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
