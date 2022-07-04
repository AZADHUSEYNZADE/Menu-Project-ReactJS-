import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
    // animate={{ opacity: 0 }}
    // initial={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    // transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  );
}

export default Home;
