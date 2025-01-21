import React, { useEffect, useState } from 'react'

import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

import { Link,useLocation, useNavigate } from 'react-router-dom';


function NavigationBar({AppRoutes, runScroll}) {

  const location = useLocation();
  const navigate = useNavigate();

  const pageMapping = {
    '/': 1,
    '/portfolio': 2,
    '/about': 3,
    '/contacts': 4,
  };



  const footerMediaLinks = [
    {
      icon: <FiGithub />,
      href: "https://github.com/Erneeh",
    },
    {
      icon: <FiInstagram />,
      href: "https://www.instagram.com/erneeu/",
    },
    {
      icon: <FiLinkedin />,
      href: "https://www.linkedin.com/in/ernestas-undz%C4%97nas-b8a814213/",
    },

  ]
  // Get current index based on the current route
  const currentIndex = pageMapping[location.pathname] || 1; // Default to 1 if no match
  const totalPages = Object.keys(pageMapping).length;


  const reversePageMapping = Object.entries(pageMapping).reduce(
    (acc, [path, index]) => ({ ...acc, [index]: path }),
    {}
  );

  
  const handleScroll = (e) => {
    const direction = e.deltaY > 0 ? 1 : -1; // Scroll direction
    let newIndex = currentIndex + direction;

    // Ensure the index stays within bounds
    if (newIndex >= 0 && newIndex <= totalPages) {
      navigate(reversePageMapping[newIndex]); // Navigate to the new page
    }
  };



  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNextPageClick = () => {
    let newIndex = currentIndex + 1;
    if (newIndex > totalPages) {
      newIndex = 1; // Loop back to the first page if exceeding
    }
    navigate(reversePageMapping[newIndex]); // Navigate to the next page
  };



  return (
    <>
    <div 
    className='grid grid-cols-10 grid-rows-10 h-screen w-full shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] bg-gradient-to-r from-slate-900 to-slate-700'  onWheel={handleScroll}>
      {/* this is the top of nav */}
      <div className={`col-span-10 row-span-1 ${ isScrolled ? "hidden" : ""}`}>
        <div className='h-full grid grid-cols-10 items-center justify-center px-5'>
          {/* name */}
          <div className='col-span-2 col-start-1 flex items-center justify-center min-w-fit px-5'>
            <h1 className='text-white font-semibold tracking-widest'><Link to="/">ERNESTAS</Link></h1>
          </div>
          {/* button */}
          <div className='col-span-2 col-start-9  flex items-center justify-center px-5 min-w-fit'>
            <button className='p-3 bg-gray-400 text-gray-300 rounded-full h-fit w-fit cursor-pointer hover:scale-110 duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
          </div>
        </div>
      </div>
      
      
      {/* this is the left side of nav */}
        <div className='hidden md:grid md:row-span-8 justify-center items-center min-w-fit'>
          <div className='grid grid-rows-9 h-full justify-items-center items-center '>

            <div className="w-px h-4/5 bg-gray-300 row-span-2 row-start-3 self-start">
            </div>

            <div className='rounded-full border row-span-1 border-gray-300 w-14 h-14 items-center justify-center flex text-white row-start-5'>
            {String(currentIndex).padStart(2, '0')}
            </div>

            <div className="w-px h-4/5 bg-gray-300 row-span-2 self-end row-start-6" >
            </div>
          </div>
        </div>
      {/* this is the content prop */}
      <div className='md:col-span-8 md:row-span-8 row-span-8 col-span-10 justify-center items-center flex overflow-y-scroll no-scrollbar'
      >
        {AppRoutes}
      </div>
      {/* this is the right side of nav */}
      <div className='hidden md:grid md:row-span-8 w-2/3 justify-center items-center'>
        <div className='grid grid-rows-9 grid-cols-2 h-full justify-items-center items-center p-2 gap-6'>
          <div className='row-span-3 row-start-4 text-center text-sm leading-none text-white'>
          {String(currentIndex).padStart(2, '0')}<br />/<br />{String(totalPages).padStart(2, '0')}
          </div>
          <div className="w-px h-full bg-gray-300 row-span-3 row-start-4 self-start">
          </div>
        </div>
      </div>

      {/* this is the bottom of nav */}
      <div className='col-span-10 md:row-span-1'>
        <div className='h-full grid grid-cols-10 items-center justify-center px-5'>
          {/* links */}
          <div className='col-span-2 col-start-1 flex items-center justify-center min-w-fit px-5'>
            <nav className=''>
              <ul className='flex gap-6 justify-center items-center  text-white'>
                {footerMediaLinks.map((links, index) => {
                  return (
                    <>
                    <li 
                    className='cursor-pointer hover:scale-125 duration-300'>
                      <a href={links.href} target='_blank'>{links.icon}</a>
                    </li>
                    </>
                  ) 
                })}
                </ul>
            </nav>
          </div>
          {/* button */}
          <div className='col-span-2 col-start-9  flex items-center justify-center px-5 min-w-fit'>
            <button 
            onClick={handleNextPageClick}
            className='p-3 bg-gray-400 text-gray-300 rounded-full h-fit w-fit cursor-pointer hover:scale-110 duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default NavigationBar;