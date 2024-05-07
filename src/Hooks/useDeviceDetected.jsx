import { useEffect, useState } from "react";

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 832);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 832);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};

export default useDeviceDetect;
