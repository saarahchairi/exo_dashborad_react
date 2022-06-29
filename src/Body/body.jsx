import React, { useState } from "react";
import "./body.css";
import Card from "../Card1/Card";
import MultiCards from "../MultiCards/MultiCards";

function Body () {
    let [indexTimeframe, choix] = useState("daily");
        return(
            <div className="body">
                <Card onSelectTimeframe={choix}/>
                <MultiCards timeframe={indexTimeframe}/>
            </div>
        );
}

export default Body