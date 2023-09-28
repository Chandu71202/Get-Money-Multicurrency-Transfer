import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Carousel.css'

export default function CarouselSection() {

  return (
    <div className='carouselSection' style={{display: 'block' ,padding:20, width: 'auto'}}>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            style={{width:'auto'}}
            src="https://www.myconnectionbank.com/assets/content/ThykOB64/2017/04/12/subpage_hero_1.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            style={{height:'auto'}}
            src="https://www.myconnectionbank.com/assets/content/d9rdwAGj/2017/04/12/subpage_hero_4.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            style={{height:'auto'}}
            src="https://www.myconnectionbank.com/assets/content/YchhBi25/workspace.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
