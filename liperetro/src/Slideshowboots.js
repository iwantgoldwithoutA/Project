import { Carousel } from "react-bootstrap";
import "./style.css";

const Slideshowboots = () => {
  return (
    <>
      <Carousel >
        <Carousel.Item interval={4000}>
          <img className="d-block" src="./railroad.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3></h3>
            <a></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block" src="./hidforest.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3></h3>
            <a></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block" src="./aboveview.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3></h3>
            <a></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block" src="./dragonspine.jpg" alt="Forth slide" />
          <Carousel.Caption>
            <h3></h3>
            <a></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block" src="./sweetbay.jpg" alt="Fifth slide" />
          <Carousel.Caption>
            <h3></h3>
            <a></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block" src="./3.jpg" alt="Sixth slide" />
          <Carousel.Caption>
            <h3></h3>
            <a></a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slideshowboots;
