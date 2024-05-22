import AnimatedCursor from "react-animated-cursor";

export const CustomCursor = () => {

  const widthScreen = window.screen.width;  

  return (
      <AnimatedCursor
        innerSize={30}
        innerStyle={{
          backgroundColor: "transparent",
          borderWidth: widthScreen < 768 ? 0 : 2,
          borderColor: widthScreen < 768 ? "transparent" : "#4A53A0",
          borderStyle: widthScreen < 768 ? "none" : "solid",
        }}
        outerSize={0}
        color='74, 83, 170'
        outerAlpha={0}
        innerScale={0}
        outerScale={0}
        
      />
  )
}