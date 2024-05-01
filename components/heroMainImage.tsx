"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./heroMainImage.module.css";

function HeroMainImage({ src }: { src: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: 600,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src={src}
        className={styles.img_box}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transition: "all 0.3s ease",
        }}
      />
    </motion.div>
  );
}

export default HeroMainImage;
