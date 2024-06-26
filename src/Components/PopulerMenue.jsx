// import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MunuItem from "./MunuItem";
import useMenu from "../hook/useMenu";

const PopulerMenue = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === "popular")
  // const [menu, setmenu] = useState([]);
  // useEffect(() => {
  //   fetch(`menue.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const populerMunue = data.filter((item) => item.category === "popular");
  //       setmenu(populerMunue);
  //     });
  // }, []);
  return (
    <section className="my-10">
      <SectionTitle
        heading={"From our menu"}
        subHeading={"Populer Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-2">
        {
            popular.map(item=> <MunuItem key={item._id}
            item={item}></MunuItem>)
        }
      </div>
    </section>
  );
};

export default PopulerMenue;
