import React from "react";


import WhatsHappening from "./whats-happening.js";
import TuitsList from "../TuitsList/index.js";

const HomeScreen = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};


export default HomeScreen;