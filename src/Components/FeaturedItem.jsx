import SectionTitle from "./SectionTitle";
import featuredImg from "../assets/home/featured.jpg";

const FeaturedItem = () => {
  return (
    <div className="my10 bg-[url('https://i.postimg.cc/nzDDS55q/featured.jpg')] bg-fixed text-white ">

      <div className="py-6">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"from our menu"}
        ></SectionTitle>
      </div>
      <div className="md:flex items-center justify-center gap-5 py-12 px-16">
        <div className="w-1/2">
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>August 09 2024</p>
          <p className="text-2xl uppercase font-medium">Where can i get sum</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            asperiores harum, libero laborum cumque nostrum.
          </p>
          <button className="btn btn-outline border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
