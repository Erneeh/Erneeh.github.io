import React, {useState} from 'react'
import { motion } from "framer-motion";
import SeeMoreModal from '../components/SeeMoreModal'

function Portfolio()  {


  //useState function
  const [isOpen, setIsOpen] = useState(false);

  const completedWorks = [
    {
      website: 'Sumustinukai.lt',
      description: "Landing page",
      url: 'https://www.sumustinukai.lt',
      background: './src/assets/sumustinukai.png'
    },
    {
      website: 'Sumustinukai.lt',
      description: "Landing page",
      url: 'https://www.sumustinukai.lt'
    }
    ,{
      website: 'Sumustinukai.lt',
      description: "Landing page",
      url: 'https://www.sumustinukai.lt'
    }
    ,{
      website: 'Sumustinukai.lt',
      description: "Landing page",
      url: 'https://www.sumustinukai.lt'
    },
    {
      website: 'Sumustinukai.lt',
      description: "Landing page",
      url: 'https://www.sumustinukai.lt'
    }
    
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
         className="h-full w-full px-6 items-center justify-center grid grid-cols-1 grid-rows-7">
            <div className="items-center justify-center grid gap-2 h-full row-span-2">
                <motion.div variants={item} className='items-center justify-center flex relative'>
                  <h1 className='relative text-white lg:text-6xl sm:text-5xl text-4xl lg:tracking-wider tracking-wider 
                  md:tracking-wide  font-semibold duration-300'>Portfolio</h1>
                  <h1 className='absolute text-white tracking-wide font-semibold text-[4rem] sm:text-[6rem] lg:text-[8rem] opacity-10 lg:-translate-y-3 sm:-translate-y-2.5 -translate-y-0.5 duration-300'>PORTFOLIO</h1>
                </motion.div>
                <motion.div variants={item} className='pt-2  items-center justify-center flex'>
                    <h1 className='text-gray-400 tracking-wider '>My recent projects</h1>
                </motion.div>
            </div>

            <motion.div 
            variants={item} 
            className=" grid grid-cols-3 md:w-7/12 min-w-full w-full items-self-center justify-self-center text-center h-full md:row-start-3 md:row-span-4 row-span-5 text-white gap-y-6 ">
                {completedWorks.slice(0, 3).map((works, index) => {
                 return (
                  <a href={works.url} className='border col-span-3 rounded-2xl hover:scale-105 duration-500 w-full h-full grid grid-cols-5 items-self-center justify-self-center min-w-fit max-w-6xl m-2'>
                    <div className="justify-center items-center lg:flex hidden lg:col-span-1 ">{works.description}</div>
                    <div className="justify-center items-center sm:flex hidden sm:col-span-2 lg:col-span-1">{works.website}</div>        
                    <iframe
                    className="justify-center items-center col-span-5 sm:col-span-3 lg:col-span-3 sm:col-start-3 flex w-full h-full sm:rounded-r-2xl sm:rounded-l-none rounded-2xl"
                    loading='lazy'
                    src={works.url}
                    scrolling="no"
                    ></iframe>      
                  </a>
                 )
                })}
                <motion.div variants={item} className="items-center justify-center grid gap-2  col-span-3">
              <div className='items-center justify-center flex w-full'>
                <button 

                //onClick sets isOpen = true
                 onClick={() => setIsOpen(true)}
                className= ' wcursor-pointer border border-gray-400 rounded-full hover:scale-105 duration-500 hover:border-white hover:text-white p-3 text-gray-400'>
                  See more
                  <SeeMoreModal 
                  //sends these props to SeeMoreModal
                  // sends that open is true
                  open={isOpen}

                  //sends onClose function, and whether its used in the component, it will set isOpen to false
                  onClose={() => setIsOpen(false)}

                  //sends data
                  completedWorks={completedWorks}
                    >
                  </SeeMoreModal>
                </button>
                </div>
            </motion.div>
            </motion.div>

            


        </motion.div>
    </>
  )
}

export default Portfolio;