import React, { useState, useEffect } from "react";
import { Carousel } from "antd";

export const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const contentStyle = {
    height: "95vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <Carousel autoplay>
        <div>
          {windowWidth < 600 && (
              <img src="https://th.bing.com/th/id/OIP.sXCiPtdoUpUHuiLrHUOaPAHaH5?rs=1&pid=ImgDetMain" style={{width:'100vw' , height:'100vh'}} alt="" />
          )}
          {windowWidth >= 600 && windowWidth < 1200 && (
            <img src="https://theviralnewj.com/wp-content/uploads/2022/09/Pro-kabaddi-stadium-2.jpg" style={{width:'100vw' , height:'100vh'}} alt="" />
          )}
          {windowWidth >= 1200 && (
            <img src="https://theviralnewj.com/wp-content/uploads/2022/09/Pro-kabaddi-stadium-2.jpg" style={{width:'100vw' , height:'100vh'}} alt="" />
          )}
        </div>
      </Carousel>
    </>
  );
};
