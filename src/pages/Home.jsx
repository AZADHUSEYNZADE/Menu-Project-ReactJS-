import React, { useState } from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";
function Home() {
  const [rotate, setRotate] = useState(false);
  return (
    <motion.div
      animate={{ rotate: rotate ? 360 : 0 }}
      onClick={() => {
        setRotate(!rotate);
      }}
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
