import { motion, useInView } from "framer-motion";
import { useRef, Children, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const StaggeredContainer = ({
  children,
  className,
  staggerDelay = 0.1,
  direction = "up",
}: StaggeredContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directionOffset = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(className)}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return (
            <motion.div variants={itemVariants} className="flex flex-col w-full min-w-0">
              {child}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
};

export default StaggeredContainer;
