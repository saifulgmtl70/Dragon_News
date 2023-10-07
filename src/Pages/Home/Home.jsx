import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData();




    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mt-12">
                <div className="">
                    <LeftNav></LeftNav>
                </div>

                <div className="lg:col-span-2">

                    {
                        news.map(Anews => <NewsCard key={Anews._id} Anews={Anews}></NewsCard>)
                    }
                </div>

                <div className="">
                    <RightNav></RightNav>
                </div>

            </div>

        </div>
    );
};

export default Home;