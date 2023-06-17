import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function Header() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    

 
    
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <h2 style={{ margin: '0 auto' }}>E-CUBE</h2>

    
      </nav>

      <nav className="navbar navbar-primary bg-dark">
        <Link to="/latestMovies">LatestMovies</Link>
        <Link to="/upcomingmovies">upcomingMovies</Link>
        <Link to="/events">Events</Link>
      </nav>
      <div className="container ">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          
          src="https://image.ibb.co/gC9PfH/dw.jpg"
          alt="Death Wish"
          style={{ height: "500px",width:"75%" }} 
        />
        <Carousel.Caption>
          <h3>Death Wish</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
       
          src="https://image.ibb.co/dQwWSx/coco.jpg"
          alt="Coco"
          style={{ height: "500px",width:"75%" }} 

        />

        <Carousel.Caption>
          <h3>Coco</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://image.ibb.co/f0hhZc/bp.jpg"
          alt="Black Panther"
          style={{ height: "500px",width:"75%" }} 

        />

        <Carousel.Caption>
          <h3>Black Panther</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>


  

   </div>
  );
}
export default Header;
