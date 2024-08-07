"use client";

import { containerVariants, desVariants, tagVariants } from "@/utils/animation";
import { v4 as uuidv4 } from "uuid";
import { features } from "@/utils/content";
import { Feature } from "@/types/index";
import { motion } from "framer-motion";

import Image from "next/image";

import "./AboutUsPage.css";

const AboutUsPage: React.FC = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={tagVariants}
              className="tag"
            >
              Our Mission
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={desVariants}
              className="des"
            >
              At Potepsychometrics, our mission is to revolutionize
              psychological assessment through innovative technology and
              research.
            </motion.span>
          </div>
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={tagVariants}
              className="tag"
            >
              Our Vision
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={desVariants}
              className="des"
            >
              We envision a world where psychological metrics are accessible and
              reliable, helping professionals make informed decisions.
            </motion.span>
          </div>
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={tagVariants}
              className="tag"
            >
              Our Story
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={desVariants}
              className="des"
            >
              Founded in 2024, Potepsychometrics was born out of a passion for
              enhancing mental health evaluations. Our team of experts has
              dedicated years to developing tools that bridge the gap between
              technology and psychology.
            </motion.span>
          </div>
          <div className="block-features">
            {features.slice(0, 6).map((feature: Feature) => (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={containerVariants}
                key={uuidv4()}
                className="block-feature"
              >
                <Image
                  src={feature.icon}
                  alt="feature"
                  width={80}
                  height={80}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
