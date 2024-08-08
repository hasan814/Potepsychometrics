"use client";

import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";

import "./Subscribe.css";
import { containerVariants } from "@/utils/animation";

const Subscribe = () => {
  return (
    <motion.div
      initial={{ width: ".5rem", borderRadius: "100%" }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: { type: "easeOut", duration: 1 },
      }}
      className="s-sub"
    >
      <motion.div
        variants={containerVariants}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
      >
        <LuMail size={30} color="grey" />
      </motion.div>
      <motion.input
        variants={containerVariants}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
        type="text"
        placeholder="Subscribe"
      />
      <motion.div
        variants={containerVariants}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
        className="subscribe-now"
      >
        Subscribe Now
      </motion.div>
    </motion.div>
  );
};

export default Subscribe;
