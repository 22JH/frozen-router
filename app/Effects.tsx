"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";
import { dir } from "console";
function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;
  if (!frozen) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  const key = usePathname();
  const currentDepth = key === "/" ? 0 : key.split("/").splice(1).length;
  const previousDepth = localStorage.getItem("page-depth") || 0;
  localStorage.setItem("page-depth", currentDepth.toString());

  const direction = () => {
    if (Number(previousDepth) === Number(currentDepth)) {
      return {
        hidden: { x: "100%" },
        enter: { x: 0 },
        exit: { x: 0.1 },
      };
    }

    if (Number(previousDepth) < Number(currentDepth)) {
      return {
        hidden: { y: "100%" },
        enter: { y: 0 },
        exit: { y: 0.1 },
      };
    }

    if (Number(previousDepth) > Number(currentDepth)) {
      return {
        hidden: { y: "-100%" },
        enter: { y: 0 },
        exit: { y: 0.1 },
      };
    }
  };
  const variants = {};
  console.log(direction());
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={direction()}
        transition={{ ease: "easeInOut", duration: 0.35 }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
