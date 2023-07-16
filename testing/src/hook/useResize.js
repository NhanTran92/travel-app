import React from "react";

const useResize = () => {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useResize;
