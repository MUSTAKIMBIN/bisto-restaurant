import { Helmet } from "react-helmet-async";
import MenuCover from "../Components/MenuCover";
import menuImg from "../assets/menu/banner3.jpg";
import useMenu from "../hook/useMenu";
import MunuItem from "../Components/MunuItem";
import SectionTitle from "../Components/SectionTitle";
// import PopulerMenue from "../Components/PopulerMenue";
import salad from "../assets/menu/salad-bg.jpg"
import deseart from "../assets/menu/dessert-bg.jpeg"
import pizzas from "../assets/menu/pizza-bg.jpg"
import soups from "../assets/menu/soup-bg.jpg"

const Menu = () => {
  const [menu] = useMenu()
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salads = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
 
  return (
    <div>
      <Helmet>
        <title>Bisto | Menu</title>
      </Helmet>
      <MenuCover menuImg={menuImg} title={"Our menu"}></MenuCover>
      <SectionTitle heading={"Today's offer"} subHeading={"Don't miss"}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-2">
        {
            offered.map(item=> <MunuItem key={item._id}
            item={item}></MunuItem>)
        }
      </div>
      <MenuCover menuImg={salad} title={"Salad"}></MenuCover>
      <SectionTitle heading={"Today's offer"} subHeading={"Don't miss"}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-2">
        {
            salads.map(item=> <MunuItem key={item._id}
            item={item}></MunuItem>)
        }
      </div>
      <MenuCover menuImg={deseart} title={"Deseart"}></MenuCover>
      <SectionTitle heading={"Today's offer"} subHeading={"Don't miss"}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-2">
        {
            dessert.map(item=> <MunuItem key={item._id}
            item={item}></MunuItem>)
        }
      </div>
      <MenuCover menuImg={pizzas} title={"Pizza"}></MenuCover>
      <SectionTitle heading={"Today's offer"} subHeading={"Don't miss"}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-2">
        {
            pizza.map(item=> <MunuItem key={item._id}
            item={item}></MunuItem>)
        }
      </div>
      <MenuCover menuImg={soups} title={"Soup"}></MenuCover>
      <SectionTitle heading={"Today's offer"} subHeading={"Don't miss"}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-2">
        {
            soup.map(item=> <MunuItem key={item._id}
            item={item}></MunuItem>)
        }
      </div>
      {/* <PopulerMenue></PopulerMenue>
      <MenuCover menuImg={salad} title={"Our menu"}></MenuCover>
      <PopulerMenue></PopulerMenue>
      <MenuCover menuImg={deseart} title={"Our menu"}></MenuCover>
      <PopulerMenue></PopulerMenue> */}
    </div>
  );
};

export default Menu;
