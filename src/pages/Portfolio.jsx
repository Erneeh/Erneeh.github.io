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
         className="h-full min-h-fit w-11/12 items-center justify-center grid grid-cols-1 grid-rows-7">
            <div className=" items-center justify-center grid gap-2 h-full row-span-2">
                <motion.div variants={item} className='items-center justify-center flex relative'>
                  <h1 className='relative text-white lg:text-6xl sm:text-5xl text-4xl lg:tracking-wider tracking-wider 
                  md:tracking-wide  font-semibold'>Portfolio</h1>
                  <h1 className='absolute text-white tracking-wide font-semibold text-[4rem] sm:text-[6rem] lg:text-[8rem] opacity-10 lg:-translate-y-3 sm:-translate-y-2.5 -translate-y-0.5'>PORTFOLIO</h1>
                </motion.div>

                <motion.div variants={item} className='  items-center justify-center flex'>
                    <h1 className='text-gray-400 tracking-wider'>My recent projects</h1>
                </motion.div>
            </div>
            <motion.div variants={item} className=" items-center justify-items-center grid p-2 gap-2 h-full row-span-4 w-full
            ">
              {completedWorks.map((works, index) => {
                 if(index>=3) return null;
                 return (
                  <a href={works.url} className={`border w-5/6 h-fit sm:w-3/4 rounded-xl flex text-white text-center items-center justify-start border-gray-600 hover:scale-105 duration-500 hover:shadow-gray-200 hover:shadow-md group:hover`

                  }>
                      <div className="w-1/6 h-full  justify-center items-center flex">{index + 1}</div>
                      <div className="w-1/6 h-full  justify-center items-center flex">{works.description}</div>
                      <div className="w-1/6 h-full  justify-center items-center flex">{works.website}</div>
                      <iframe
                      className='h-full  justify-center items-center flex rounded-r-xl w-2/3' 
                      src={works.url}
                      scrolling="no"
                      >
                      </iframe>
                  </a>
                 )
                })}
            </motion.div>
            <motion.div variants={item} className=" items-center justify-center grid gap-2 h-full row-span-1">
              <div className='items-center justify-center flex'>
                <button 

                //onClick sets isOpen = true
                 onClick={() => setIsOpen(true)}
                className= 'cursor-pointer border border-gray-400 rounded-full hover:scale-105 duration-500 hover:border-white hover:text-white p-3 text-gray-400'>
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
    </>
  )
}

export default Portfolio;