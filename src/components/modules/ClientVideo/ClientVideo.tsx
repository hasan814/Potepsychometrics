"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import "./ClientVideo.css";

const ClientVideo = () => {
  // ============== Ref =================
  const ref = useRef<HTMLVideoElement>(null);

  // ============== Scroll =================
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // ============== Transform =================
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // ============== Rendering =================
  return (
    <div className="bv-container">
      <div className="container">
        <motion.video
          style={{ scale }}
          ref={ref}
          className="bv-video"
          loop
          muted
          autoPlay
          controls
        >
          <source src="/video.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </div>
  );
};

export default ClientVideo;
