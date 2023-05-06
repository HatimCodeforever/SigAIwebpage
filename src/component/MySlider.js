import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'
import homai from './img/homai.png'
import A1 from './img/ai-1.jpg';
import A2 from './img/a1-2.jpg';
import A3 from './img/a1-45.jpg';

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
      <div style={{
        background: 'linear-gradient(to right, #C33764, #1D2671)',
        height: '140vh',
      }}>
        <div>
          <Slider {...settings} style={{background: "black"}}>
            <div>
              <img src={A1} className='mt-1' alt="Slider Image 1" />
            </div>
            <div>
              <img src={A2} className='mt-1' alt="Slider Image 2" />
            </div>
            <div>
              <img src={A3} alt="Slider Image 3" />
            </div>
          </Slider>
        </div>
        <div className='mt-3'>
          <div className='row' style={{maxHeight: '400px'}}>
            <div className='col-md-8 col-sm-4 home-text'>
              <h2><b>WHAT IS AI ?</b></h2>
            <p style={{ color: 'white' }}>
                AI stands for "Artificial Intelligence," which refers to the ability of machines to perform tasks that typically require human intelligence, such as recognizing speech, making decisions, and solving problems. AI involves the development of computer algorithms and systems that can learn, reason, and perform tasks autonomously, without human intervention.
                There are different approaches to AI, including rule-based systems, statistical methods, and machine learning. Machine learning, in particular, has seen significant advancements in recent years, and it involves training algorithms on large datasets to recognize patterns and make predictions.
                AI has numerous applications in various industries, including healthcare, finance, manufacturing, and transportation, among others. Some examples of AI applications include self-driving cars, voice assistants, image and speech recognition, fraud detection, and medical diagnosis.
              </p>
            </div>
            <div className='col-md-4 col-sm-8 home' >
            <img src={homai} alt='no home image' />
            </div>
          </div>
        </div>
      </div>

    </>


  );
};

export default MySlider;
