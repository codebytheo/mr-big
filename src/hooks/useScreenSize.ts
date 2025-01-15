'use client'

import {useState, useEffect} from "react";

type WindowDimentions = {
  width: number | undefined;
};
const useScreenSize = () => {
  if (typeof window !== 'undefined') {
    // detect window screen width function
    const [screenSize, setScreenSize] = useState<WindowDimentions>({
      width: window.innerWidth
    });

      useEffect(() => {
        function handleResize() {
          setScreenSize({width:window.innerWidth})
        }
        handleResize()

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener("resize", handleResize);
      }, []);

      return screenSize
  }

}

export default useScreenSize;
