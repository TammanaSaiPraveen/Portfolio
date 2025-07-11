import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import resumeFile from "../assets/pdf/resume.pdf";
import resumeFile from "../assets/pdf/TammanaSaiPraveen-Resume222.pdf"
import profileImage from "../assets/images/Profile-Image.jpg";

const roles = ["Full Stack Developer","MERN Stack Developer" ,"Problem Solver", "Tech Enthusiast"];

const TypingAnimation = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === roles.length) return;

    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => (reverse ? prev - 1 : prev + 1));
    }, reverse ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div
      className="text-xl md:text-2xl mb-6"
      style={{ color: "var(--text-light)", minHeight: "2rem" }}
    >
      {`${roles[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </div>
  );
};

const Homepage = () => {
  return (
    <section
      className="min-h-screen flex items-center w-full"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="homepage-layout items-center justify-between gap-12 py-20">
          {/* LEFT COLUMN - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="homepage-column-left"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span style={{ color: "var(--text-color)" }}>
                Tammana Sai Praveen
              </span>
            </h1>

            <TypingAnimation />

            <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
              <a
                href={resumeFile}
                download
                className="px-8 py-3 rounded-md"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--white)",
                }}
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-8 py-3 rounded-md border-2"
                style={{
                  borderColor: "var(--primary-color)",
                  backgroundColor: "var(--white)",
                  color: "var(--text-color)",
                }}
              >
                View Projects
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="homepage-column-right flex justify-center md:justify-end"
          >
            <div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg"
              style={{ minWidth: "320px", minHeight: "320px" }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
