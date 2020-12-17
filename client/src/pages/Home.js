import React from "react";

import SelectFurthest from "../components/SelectFurthest";

const Home = (props) => {
    const { furthest } = props;

    return (
        <div>
            <h1>Home</h1>
            {!furthest ? <SelectFurthest /> : "Show search"}
        </div>
    );
};

export default Home;
