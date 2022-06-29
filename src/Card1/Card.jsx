import React from "react";
import "./card.css";
import ImgJerem from "../../src/images/image-jeremy.png"
class Card extends React.Component {
    choix = (destination)=>{
        this.props.onSelectTimeframe(destination);
    }
    render() {
        return (
            <div className="containerCard">
                <div className="miniContainer">
                    <div className="img">
                        <img src={ImgJerem} alt="" />
                    </div>
                    <div className="text">
                        <p>Report for</p>
                        <h1>Jeremy Robson</h1>
                    </div>
                </div>
                <p className="pDiv" onClick={()=>this.choix("daily")}>Daily</p>
                <p className="pDiv" onClick={()=>this.choix("weekly")}>Weekly</p>
                <p className="pDiv" onClick={()=>this.choix("monthly")}>Monthly</p>
            </div>
        );
    }
}

export default Card