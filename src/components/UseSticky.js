import { useState, useEffect, useRef } from 'react';

function UseSticky() {
  const [sticky, setSticky] = useState(false);
  const stickyRef = useRef(null);
  const handleScroll = () => {
    if (stickyRef.current) {
      setSticky(stickyRef.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { sticky, stickyRef };
}

export default UseSticky;
