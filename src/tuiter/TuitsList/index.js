import React from "react";
import { useSelector } from "react-redux";
import TuitListItem from "./TuitListItem.js";
import tuits from "../data/tuits.json"


const TuitsList = () => {
    tuits = useSelector((state) => state.tuits);

    return (
        <ul className="list-group">
            {
                tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit} />)
            }
        </ul>
    )
};
export default TuitsList;