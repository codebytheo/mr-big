'use client'

const useMobileSize = () => {

    if(typeof window != "undefined"){
      const mobile = window.matchMedia("(max-width: 500px)").matches

      return mobile;
    }
    return false;
}

export default useMobileSize;
