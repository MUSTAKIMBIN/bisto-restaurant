import Banner from "../../Components/Banner";
import Category from "../../Components/Category";
import FeaturedItem from "../../Components/FeaturedItem";
import PopulerMenue from "../../Components/PopulerMenue";
import Texstimonials from "../../Components/Texstimonials";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopulerMenue/>
            <FeaturedItem></FeaturedItem>
            <Texstimonials></Texstimonials>
        </div>
    );
};

export default Home;