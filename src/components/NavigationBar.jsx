import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import { FiInstagram, FiGithub, FiLinkedin, FiArrowUp, FiArrowDown } from "react-icons/fi";

import { Link,useLocation, useNavigate } from 'react-router-dom';


function NavigationBar({AppRoutes, language, setLanguage}) {

  const location = useLocation();
  const navigate = useNavigate();

  const pageMapping = {
    '/': 1,
    '/portfolio': 2,
    '/contacts': 3,
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

  const handleNextPageReverseClick = () => {
    let newIndex = currentIndex - 1;
    if (newIndex > totalPages) {
      newIndex = 1;
    }
    navigate(reversePageMapping[newIndex]);
  }



  return (
    <>
    <div
    className='grid grid-cols-10 grid-rows-10 h-[100dvh] w-full shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] bg-gradient-to-r from-slate-900 to-slate-700'>
      {/* this is the top of nav */}
      <div className={`col-span-10 row-span-1 ${ isScrolled ? "hidden" : ""}`}>
        <div className="flex h-full items-center justify-between gap-2 px-3 sm:px-10">
          <Link to="/" className="text-xs font-semibold tracking-wide text-white sm:text-lg">Ernestas Undzėnas</Link>
          <div className="flex items-center gap-3">
            <div role="group" aria-label="Kalba / Language" className="flex rounded-full border border-slate-500 p-1 text-xs sm:text-sm">
              {['lt', 'en'].map(code => (
                <button key={code} type="button" lang={code} aria-pressed={language === code} onClick={() => setLanguage(code)} className={`rounded-full px-2 py-2 sm:px-3 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-200 ${language === code ? 'bg-sky-200 text-slate-900' : 'text-slate-200 hover:bg-slate-600'}`}>
                  {code === 'lt' ? 'Lietuvių' : 'English'}
                </button>
              ))}
            </div>
            {currentIndex !== 1 && <button aria-label={language === 'lt' ? 'Ankstesnis puslapis' : 'Previous page'} onClick={handleNextPageReverseClick} className="rounded-full bg-slate-600 p-3 text-white"><FiArrowUp /></button>}
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
              <ul className='flex gap-6 justify-center items-center text-white'>
                {footerMediaLinks.map((links) => {
                  return (
                    <li key={links.href}
                    className='cursor-pointer hover:scale-125 duration-300'>
                      <a href={links.href} target='_blank'>{links.icon}</a>
                    </li>
                  )
                })}
                </ul>
            </nav>
          </div>
          {/* button */}
          <div className='col-span-2 col-start-9  flex items-center justify-center px-5 min-w-fit'>
            {currentIndex !== totalPages && (
              <button
              aria-label={language === 'lt' ? 'Kitas puslapis' : 'Next page'}
              onClick={handleNextPageClick}
              className='p-3 bg-gray-400 text-gray-300 rounded-full h-fit w-fit cursor-pointer hover:scale-110 duration-300'>
              <FiArrowDown />
              </button>
            )}

          </div>
        </div>
      </div>

    </div>
    </>
  )
}

NavigationBar.propTypes = { AppRoutes: PropTypes.node.isRequired, language: PropTypes.oneOf(['lt', 'en']).isRequired, setLanguage: PropTypes.func.isRequired };
export default NavigationBar;
