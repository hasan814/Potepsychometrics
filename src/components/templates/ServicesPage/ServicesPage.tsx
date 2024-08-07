"use client";

import { tagVariants, titleVariants } from "@/utils/animation";
import { v4 as uuidv4 } from "uuid";
import { services } from "@/utils/content";
import { motion } from "framer-motion";

import Image from "next/image";

import "./ServicesPage.css";

const ServicesPage = () => {
  // =========== Variant ============
  const featureVariants = {
    offscreen: { scale: 0.5 },
    onscreen: { scale: 1, transition: { type: "spring", duration: 1.5 } },
  };

  // =========== Rendering ============
  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-container">
          <div className="hiw-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              Purpose
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              To outline the services offered by Potepsychometrics
            </motion.span>
          </div>
          <div className="hiw-features">
            {services.map((feature, i) => (
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={featureVariants}
                className="hiw-feature"
                key={uuidv4()}
              >
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { type: "easeIn", duration: 1, delay: 0.7 },
                  }}
                  className="detail"
                >
                  <span className="number">0{i + 1}</span>
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
                <div className="icon">
                  <Image
                    src={feature.icon}
                    alt="feature"
                    width={128}
                    height={128}
                    style={{ translate: "50% 0rem" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
