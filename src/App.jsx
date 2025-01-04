import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Cursor from "./components/Cursor";
import LandingPage from "./pages/LandingPage";
import Project1 from "./pages/Project1";
import Loader from "./components/Loader";
import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const loaderVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      {!animationComplete && (
        <motion.div
          key="loader"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={loaderVariants}
          transition={{ duration: 2 }}
        >
          <Loader onAnimationComplete={handleAnimationComplete} />
        </motion.div>
      )}

      {animationComplete && (
        <>
          <Cursor />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<LandingPage />} />
              <Route path="/:id" element={<Project1 />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
