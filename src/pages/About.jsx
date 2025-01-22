import React, {useState} from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function About()  {


  const [selectedIndex, setSelectedIndex] = useState("01");
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
      name: "Skills I have",
      text: "lorem",
      indexNumber: "03",
    }
  ]

  const texts = [
    {
      name: "Ernestas Undzėnas",
      role: "Junior QA & Front-End Dev / Endurance Athlete",
      indexNumber: "01",
      desc: "I am not looking for shortcuts; I am here to do the work. My journey is about turning ambition into action, combining my skills, work ethic, and passion for growth to achieve my goals. This is my promise to myself: I will finish what I start and pave the way for success.",
    },
    {
      name: "Disciplined Achiever",
      role: "Relentless Problem-Solver and Discipline-Driven person",
      indexNumber: "02",
      desc: "I approach work with precision, discipline, and a relentless focus on results. Every challenge is an opportunity to learn, adapt, and deliver high-quality outcomes.",
    },
    {
      name: "Skilled Developer",
      role: "Junior Front-End Developer with QA Experience",
      indexNumber: "03",
      desc: "As a junior developer, I build responsive websites using React and Tailwind CSS. While I'm still improving my JavaScript skills, my QA experience drives me to continuously push for excellence, always aiming to do better than the rest and deliver the best possible results.",
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
         className="h-full w-full px-6 items-center justify-center grid grid-cols-1 grid-rows-7 ">
            <div className="items-center justify-center grid gap-2 h-full row-span-2">
                <motion.div variants={item} className='items-center justify-center flex relative'>
                  <h1 className='relative text-white lg:text-6xl sm:text-5xl text-4xl lg:tracking-wider tracking-wider 
                  md:tracking-wide  font-semibold duration-300'>About me</h1>
                  <h1 className='absolute text-white tracking-wide font-semibold text-[4rem] sm:text-[6rem] lg:text-[8rem] opacity-10 lg:-translate-y-3 sm:-translate-y-2.5 -translate-y-0.5 whitespace-nowrap duration-300'>ABOUT ME</h1>
                </motion.div>

                <motion.div variants={item} className='pt-2 items-center justify-center flex'>
                    <h1 className='text-gray-400 tracking-wider'>Learn more about me</h1>
                </motion.div>
            </div>
            
            <motion.div 
            variants={item}
            className="grid grid-cols-3 w-full h-full md:row-start-4 md:row-span-4 row-span-5 text-white">
                <div className='md:col-span-1 col-span-3 md:h-1/2 min-w-fit max-w-full md:grid text-center md:text-start items-center justify-center flex '>
                {links.map((links, index) => {
                  return (
                  <Link 
                  key={index} 
                  onClick={() => setSelectedIndex(links.indexNumber)}
                  className="m-2 relative group">
                    <div className='text-center space-x-3'>
                    <span>/{links.indexNumber}</span>
                    <span>{links.name}</span>
                    </div>
                    <span
                    className={`absolute left-0 right-0 mx-auto bottom-[-2px] h-[2px] bg-white transition-all duration-500 ${selectedIndex === links.indexNumber ? "w-full " : "group-hover:w-full w-0"}`}
                    ></span>
                  </Link>
                  )})}
                </div>
                <div className='md:col-span-2 col-span-3 pt-4 md:pt-0'>
                  {texts
                  .filter((text) => text.indexNumber === selectedIndex)
                  .map((text, index) => {
                      return (
                      <>
                      <motion.div
                      variants={item}
                      key={selectedIndex}
                      >
                      <div className='text-2xl font-semibold tracking-wide'>{text.name}</div>
                      <div className='text-lg text-gray-400'>{text.role}</div>
                      <br></br>
                      <br></br>
                      <div className='text-gray-400 text-xl max-w-5xl'>{text.desc}</div>
                      
                      </motion.div>
                      </>

                      )})}
                       
                </div>
                
            </motion.div>
        </motion.div>
    </>
  )
}

export default About;