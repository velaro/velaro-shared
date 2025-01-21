import { useState, useEffect } from "react";

export default function useIsMobileDevice() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;

      const mobileDevices = /iPhone|iPad|iPod|Android|Mobile/i;
      setIsMobile(mobileDevices.test(userAgent));
    };

    checkDevice();
  }, []);

  return isMobile;
}
