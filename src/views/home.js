import React from "react";
import SearchBar from "../components/searchbar";
import { Banner } from "../components/banner";
import { Recommendations } from "../components/recommendations";
import { ValueProp } from "../components/valueprop";


export const Home = () => {
    return (
        <div>
            <Banner />
            <SearchBar />
            <Recommendations />
            <ValueProp/>
        </div>
    );
};

export default Home;
