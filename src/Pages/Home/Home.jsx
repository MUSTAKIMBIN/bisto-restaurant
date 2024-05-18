import Banner from "../../Components/Banner";
import Category from "../../Components/Category";
import FeaturedItem from "../../Components/FeaturedItem";
import PopulerMenue from "../../Components/PopulerMenue";
import Texstimonials from "../../Components/Texstimonials";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <PopulerMenue/>
            <FeaturedItem></FeaturedItem>
            <Texstimonials></Texstimonials>
        </div>
    );
};

export default Home;