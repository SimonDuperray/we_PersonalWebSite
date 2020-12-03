import React, { Component } from "react";
import "./css/Services__card.css";

class Services__card extends Component{
    render(){
        const renderIcon = () => {
            switch(this.props.icon){
                case "1":
                    return <i className="fas fa-code"></i>;
                case "2":
                    return <i className="fas fa-microchip"></i>;
                case "3":
                    return <i className="fas fa-brain"></i>;
            }
        }
        return(
            <div className="card">
                <div className="box">
                    {renderIcon()}
                    <div className="text">{this.props.title}</div>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}
export default Services__card;