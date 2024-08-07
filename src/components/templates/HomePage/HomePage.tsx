"use client";

import { v4 as uuidv4 } from "uuid";
import { HomeData } from "@/utils/content";
import { Person } from "@/types/index";
import { motion } from "framer-motion";

import "./HomePage.css";
import { desVariants, titleVariants } from "@/utils/animation";
import ClientVideo from "@/modules/ClientVideo/ClientVideo";

const HomePage: React.FC = () => {
  // ============ Variants ============
  const variants = (delay: number) => ({
    initial: { y: "18rem" },
    animate: {
      y: "0rem",
      transition: { type: "spring", damping: 25, duration: 2.5, delay },
    },
  });

  const imgVariants = () => ({
    initial: { y: "18rem" },
    animate: {
      y: "0rem",
      transition: { type: "spring", duration: 2, stiffness: 30 },
    },
  });
  // ============ Rendering ============
  return (
    <div className="h-wrapper">
      <div className="container">
        <div className="h-container">
          <div className="h-right">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="h-title"
            >
              <span>Accurate Assessments</span>
              <span>Comprehensive Reports</span>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="h-desc"
            >
              Potepsychometrics offers cutting-edge solutions for accurate
              psychological evaluations. Our tools are designed to help
              professionals gain deeper insights into human behavior and mental
              health.
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="m-get-started"
            >
              Get Started
            </motion.div>
          </div>
          <div className="h-left">
            <div className="image-row">
              {HomeData.slice(0, 3).map((person: Person) => (
                <div key={uuidv4()} className="person-pill">
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt="person"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="image-row">
              {HomeData.slice(3, 6).map((person: Person) => (
                <div key={uuidv4()} className="person-pill">
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-bg"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariants()}
                      src={person.src}
                      alt="person"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
