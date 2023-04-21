import React from "react";

import SimpleImageSlider from "react-simple-image-slider";



const Carrousel = ({img}) => {
  

  return (
    <div className="carrousel">

      <SimpleImageSlider
        width="100%"
        
        height={617}
        images={img}
        showBullets={false}
        showNavs={false}
        autoPlay
        bgColor="000000"
        
      />
    </div>
  );
};

export default Carrousel;
