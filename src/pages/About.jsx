import React, {useState} from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function About()  {


  const [selectedIndex, setSelectedIndex] = useState(null);
  const links = [
    {
      name: "About me",
      text: "lorem",
      indexNumber: "01",
    },
    {
      name: "How I work",
      text: "lorem",
      indexNumber: "02",
    },
    {
      name: "Skills",
      text: "lorem",
      indexNumber: "03",
    }
  ]

  const texts = [
    {
      name: "Ernestas Undzėnas",
      role: "QA engineer / Front End developer",
      indexNumber: "01",
    },

  ]
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
         className="h-full w-11/12 items-center justify-center grid grid-cols-1 grid-rows-7">
            <div className=" items-center justify-center grid gap-2 h-full row-span-2">
                <motion.div variants={item} className='items-center justify-center flex relative'>
                  <h1 className='relative text-white lg:text-6xl sm:text-5xl text-4xl lg:tracking-wider tracking-wider 
                  md:tracking-wide  font-semibold'>About me</h1>
                  <h1 className='absolute text-white tracking-wide font-semibold text-[4rem] sm:text-[6rem] lg:text-[8rem] opacity-10 lg:-translate-y-3 sm:-translate-y-2.5 -translate-y-0.5 whitespace-nowrap'>ABOUT ME</h1>
                </motion.div>

                <motion.div variants={item} className='  items-center justify-center flex'>
                    <h1 className='text-gray-400 tracking-wider'>Learn more about me</h1>
                </motion.div>
            </div>
            <motion.div variants={item} 
            className="grid grid-cols-3 w-full h-full md:row-start-4 md:row-span-4 row-span-4 text-white">
                <div className='md:col-span-1 col-span-3 p-8 md:h-1/2 flex md:grid gap-5 text-center md:text-start w-full items-center justify-center'>
                {links.map((links, index) => {
                  return (
                  <Link 
                  key={index} 
                  onClick={() => setSelectedIndex(index)}
                  className={`grid grid-cols-3  p-3 cursor-pointer ${selectedIndex === index ? 'underline' : ''}`}>
                    <div className='text-center col-span-3 space-x-6'>
                    <span>{links.indexNumber}</span>
                    <span>{links.name}</span>
                    </div>
                  </Link>
                  )})}
                </div>
                <div className='md:col-span-2 col-span-3'>
                  {texts.map((text, index) => {
                      return (
                      <>
                      <div className='text-2xl font-semibold tracking-wide'>{text.name}</div>
                      <div className='text-lg text-gray-400'>{text.role}</div>
                      <br></br>
                      <br></br>
                      <div className='text-gray-400 text-xl'>{text.name}</div>
                      <br></br>
                      <div className='text-gray-400 text-xl'>{text.name}</div>
                      </>
                      )})}
                       
                </div>
            </motion.div>
        </motion.div>
    </>
  )
}

export default About;