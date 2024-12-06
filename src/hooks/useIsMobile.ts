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

  const [screenWidth, setScreenWidth] = useState(800);
 
  //initialize the iframe size by asking parent for the size
  useEffect(() => {}, []);

  //listen to resize events from parent
  useEffect(() => {
    const receiveMessage = (event: MessageEvent) => {
      if (event.data.message === "resize") {
        setScreenWidth(event.data.innerWidth);
      }
    };
    window.addEventListener("message", receiveMessage);
    window.parent.postMessage({ message: "getSize" }, "*");
    return () => window.removeEventListener("message", receiveMessage);
  }, []);
  
  return isMobile || screenWidth < 768;
  
}