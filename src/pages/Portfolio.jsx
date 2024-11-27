import React from 'react'
import { motion } from "framer-motion";

function Portfolio()  {

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
         class="h-full w-11/12 items-center justify-center grid grid-cols-1 grid-rows-7">
            <div class=" items-center justify-center grid gap-2 h-full row-span-2">
                <motion.div variants={item} class='items-center justify-center flex relative'>
                  <h1 className='relative text-white lg:text-6xl sm:text-5xl text-4xl lg:tracking-wider tracking-wider 
                  md:tracking-wide  font-semibold'>Portfolio</h1>
                  <h1 className='absolute text-white tracking-wide font-semibold text-[4rem] sm:text-[6rem] lg:text-[8rem] opacity-10 lg:-translate-y-3 sm:-translate-y-2.5 -translate-y-0.5'>PORTFOLIO</h1>
                </motion.div>

                <motion.div variants={item} class='  items-center justify-center flex'>
                    <h1 className='text-gray-400'>My recent projects</h1>
                </motion.div>
            </div>
            <motion.div variants={item} class=" items-center justify-items-center grid p-2 gap-2 h-full row-span-4 w-full
            ">
                  <div className='border w-5/6 sm:w-3/4 rounded-xl py-8 flex text-white text-center items-center justify-start border-gray-600'>
                  <div class="min-w-fit w-1/12  ">01</div>
                  <div class="min-w-fit w-1/12 ">01</div>
                  <div class="min-w-fit w-1/3  text-start">Social Media</div>
              </div>

              <div className='border w-5/6 sm:w-3/4 rounded-xl py-8 flex text-white text-center items-center justify-start border-gray-600'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>

              <div className='border w-5/6 sm:w-3/4 rounded-xl py-8 flex text-white text-center items-center justify-start border-gray-600'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
            </motion.div>
            <div class=" items-center justify-center grid gap-2 h-full row-span-1">
              <div class='items-center justify-center flex'><h1 className='text-gray-400'>See more</h1></div>
            </div>
        </motion.div>
    </>
  )
}

export default Portfolio;