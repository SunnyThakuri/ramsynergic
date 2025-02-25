import Slider from "react-slick"
import team1 from "../../assets/AboutUI/MarkBrown.png"
import team2 from "../../assets/AboutUI/Mezie Basig.png"
import leftarrow from "../../assets/AboutUI/Frame 110.png"
import { useState } from "react"

const TeamSlider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  function SampleNextArrow(props) {
    const { style, onClick } = props
    return (
      <div
        className="slick-arrow"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <img className=' w-10 absolute lg:-left-[570px] left-[190px] mt-[20px] 2xl:-mt-[170px] lg:mt-[20px] cursor-pointer ' src={leftarrow} alt="arrow_right" />
      </div>
    );
  }
    
  function SamplePrevArrow(props) {
    const { style, onClick } = props
    return (
      <div
        className="slick-arrow"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <img className=' w-10 absolute lg:-left-[630px] 2xl:mt-[350px]  -mt-[800px] cursor-pointer rotate-180' src={leftarrow} alt="arrow_left" />
      </div>
    );
  }


  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="Courses px-4 mt-[100px]">

        <div className="left_side xl:w-[20%] lg:w-[30%]  lg:absolute xl:left-[80px] lg:left-[50px] xl:mt-[80px] lg:mt-[30px]">
          <h1 className="text-[#2C2C2C] w-[325px] text-[32px] font-semibold">Meet our team
            of creative experts.</h1>

          <p className="text-[#828282] mt-3">Unleash Creativity: Introducing Our Team of Exceptional Creative Experts</p>
        </div>
      </div>

      <Slider {...settings} className="xl:ml-[700px] lg:ml-[500px]  mx-10 lg:my-[100px] my-10 cursor-pointer gap-5 ">
        <div className="slider1 px-5  shadow-lg rounded-lg overflow-hidden">
          <div className="images">
            <img className="w-full h-[350px] md:h-auto md:w-[350px]" src={team1} alt="Mark Brown" />
          </div>
          <h1 className="text-[#333333] text-[22px] w-full font-bold mt-5">Mark Brown</h1>
          <h1 className="text-[#333333]">CEO</h1>
        </div>

        <div className="slider1 px-5 shadow-lg rounded-lg overflow-hidden ">
          <div className="images">
            <img className="w-full md:w-[350px] h-[350px] md:h-auto" src={team2} alt="Mezie Basig" />
          </div>
          <h1 className="text-[#333333] text-[22px] w-full font-bold mt-5">Mezie Basig</h1>
          <h1 className="text-[#333333]">Co-Founder</h1>
        </div>
      </Slider>

      <div className="slidingnumber 2xl:-mt-[160px] lg:-mt-[100px] -mt-[40px] text-[#FFFFFF] bottom-0 lg:ml-[100px] p-4 text-lg font-Outfit">
        0{currentSlide + 1}- 03
      </div>
    </>
  )
}

export default TeamSlider
