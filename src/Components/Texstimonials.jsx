import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
import '@smastrom/react-rating/style.css'

const Texstimonials = () => {
  const [revew, setRevew] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5010/revews`)
      .then((res) => res.json())
      .then((data) => setRevew(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading={"what our clint say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {revew.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="m-20 flex flex-col items-center justify-center">
                <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
                <FaQuoteLeft className="my-5 text-5xl" />
                <p className="text-sm font-medium py-4">{item.details}</p>
                <p className="text-orange-400 text-2xl font-medium">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Texstimonials;
