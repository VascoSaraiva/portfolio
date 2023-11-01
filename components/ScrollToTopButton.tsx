'use client'

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ScrollToTopButton = () => {

  const [scrollY, setScrollY] = useState(0);
  const { resolvedTheme } = useTheme()

  useEffect(() => {

    function showButton() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', showButton);

    return () => {
      window.removeEventListener('scroll', showButton);
    };


  }, [])


  function scrollToTop() {
    const isBrowser = () => typeof window !== 'undefined';

    if (!isBrowser()) return;
    window.scrollTo({ top: 0 });
  }


  return (
    <button aria-label="Scroll to top" onClick={scrollToTop} className={`${scrollY > 500 ? 'opacity-100' : 'opacity-0'} fixed bottom-8 right-5 ${resolvedTheme !== 'light' ? 'bg-main-300 text-main-600 hover:text-main-700' : 'bg-main-700 text-main-100 hover:bg-main-700/75'} p-2  transition ease-in-out shadow-xl rounded-md`}>
      <KeyboardArrowUpOutlinedIcon />
    </button>
  )
}

export default ScrollToTopButton