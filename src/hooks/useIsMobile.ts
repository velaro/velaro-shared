import { useState, useEffect} from "react";

export default function useIsMobile() {
const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;

      const mobileDevices = /iPhone|iPad|iPod|Android|Mobile/i;
      setIsMobile(mobileDevices.test(userAgent));
    };

    checkDevice();
  }, []);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return isMobile || screenWidth < 768;
  
}