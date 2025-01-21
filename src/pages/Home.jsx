import React from 'react'
import { motion } from "framer-motion";


 function Home() {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between child animations
      },
    },
  };

  // Animation variants for each text line
  const item = {
    hidden: {
      opacity: 0, // Start fully transparent
      y: -20,     // Start slightly above
      x: -20,     // Start slightly to the left
    },
    show: {
      opacity: 1, // Fully visible
      y: 0,       // Move to original position vertically
      x: 0,       // Move to original position horizontally
      transition: {
        duration: 0.6, // Duration for each item
        ease: "easeOut", // Smooth easing
      },
    },
  };
    return (
    <>
    <motion.div 
     variants={container}
     initial="hidden" // Starting state for all items
     animate="show"   // Final state for all items
    class="h-full w-full px-6 max-h-full p-4 items-center justify-center flex">
      <div class="w-full md:h-1/2 h-full ">
        <motion.div variants={item} class='md:h-1/3 h-1/6 flex items-end text-white'>Introduction</motion.div>
        <motion.div variants={item} class='md:h-1/3 h-1/3 flex items-center text-white text-4xl sm:text-5xl'>QA-trained, Front-End focused, always evolving.</motion.div>
        <motion.div variants={item} class='md:h-1/3 h-1/3 flex items-start text-gray-400 text-'>Hi, I'm Ernestas. Grounded in QA principles, I’m continuously evolving as a Junior Front-End Developer, <br></br>sharpening my skills and embracing new challenges.</motion.div>
      </div>
    </motion.div>
  
    </>
    )
  }
  
  export default Home;
