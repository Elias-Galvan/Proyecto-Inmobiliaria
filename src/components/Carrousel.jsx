import Carousel from "react-bootstrap/Carousel";
import igm1 from "../assets/statics/img1.jpg"
import img2 from "../assets/statics/img2.jpeg"
import img3 from "../assets/statics/img3.webp"
import "../assets/css/Carrousel.css"

function Carrousel() {
  return (
    <Carousel style={{height:"100vh"}}>
      <Carousel.Item>

        <img
          className="d-block w-100 "  
          
          src={igm1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
