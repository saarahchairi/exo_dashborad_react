import React from "react";
import "./multicards.css";
import Data from "../data";

class MultiCards extends React.Component {
    render() {
        let indexTimeframe = this.props.timeframe;
        return (
            <div className="grand">
                {
                    Data.map((data, indexTimeframe) => {
                        return (
                            <div className="parent">
                                <div className="img" style={{backgroundColor:`${data.bgc}`, textAlign:"end", height:"50px", overflow:"hidden"}}>
                                <img src={data.img} style={{width:"80px", position:"relative", top:"-50%"}} alt=""/>
                                </div>
                                <div className={data.title} style={{backgroundColor:"hsl(235, 46%, 20%)", color:"#fff", borderRadius:"20px", textAlign:"start", padding:"20px 20px 0", position:"relative", top:"-30%", height:"170px"}}>
                                    {data.title}
                                    <div className="current" style={{padding:"20px 0 0", fontSize:"45px", fontWeight:"300"}}>
                                        {data.timeframes[indexTimeframe].current}
                                    </div>
                                    <div className="previous" style={{padding:"10px 0 20px ", color:"hsl(236, 100%, 87%)"}}>
                                        {data.timeframes[indexTimeframe].previous}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default MultiCards