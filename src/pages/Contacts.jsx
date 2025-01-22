
import { motion } from "framer-motion";

import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { RiTiktokLine } from "react-icons/ri";

import React from 'react';


 function Contacts() {
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

  const mediaLinks = [
        {
          logo: <FiLinkedin />,
          media: "LinkedIn",
          href: "https://www.linkedin.com/in/ernestas-undz%C4%97nas-b8a814213/",
        },
        {
          logo: <FiInstagram />,
          media: "Instagram",
          href: "https://www.instagram.com/erneeu/",
        },
        {
          logo: <RiTiktokLine />,
          media: "TikTok",
          href: "https://www.tiktok.com/@erneeuu",
        },
        {
          logo: <FiGithub />,
          media: "Github",
          href: "https://github.com/Erneeh",
        }
    ]

    return (
    <>
    <motion.div 
      variants={container}
      initial="hidden" // Starting state for all items
      animate="show"   // Final state for all items
      class="h-full w-full px-8 max-h-full  items-center justify-center flex">
          <div class="w-full md:h-1/2 h-full grid grid-rows-8 grid-cols-1 min-w-fit">
              <motion.div 
              variants={item} 
              className='flex items-center text-white text-4xl sm:text-6xl md:row-span-1  duration-300'>I can help you!</motion.div>
              <motion.div 
              variants={item} 
              className='flex md:items-center text-gray-400 md:row-span-1'>Get in touch with me if you got anything to talk about!</motion.div>
              <motion.div 
              variants={item} 
              className='md:row-span-2 md:row-start-4 flex md:items-center text-white'>
                <a 
                className='cursor-pointer md:hover:scale-105 duration-300 text-3xl sm:text-5xl h-full items-center grid break-words truncate max-w-full'
                href="mailto:erne.undze@gmail.com">erne.undze@gmail.com</a>
              </motion.div>
              <motion.div
              variants={item}
              className='md:row-start-7 flex items-center text-gray-400'
              >Follow me</motion.div>
              <motion.div
              variants={item}
              className="md:row-start-8 text-white flex md:items-center">
                <li className='grid md:flex gap-6 items-center  text-white'>
                  {mediaLinks.map((link) => {
                  return (
                      <>
                        <ul 
                        className='cursor-pointer hover:scale-125 duration-300'>
                            <a 
                            href={link.href} 
                            target='_blank'
                            className="flex items-center gap-1 ">{link.logo}{link.media}</a>
                        </ul>
                      </>
                  )})}
                </li>
              </motion.div>
          </div>
    </motion.div>
  
    </>
    )
  }
  
  export default Contacts;
