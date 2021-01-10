import React, { Component } from "react";
import "./css/Portfolio__card.css";

class Portfolio__card extends Component{
    render(){
        const renderingITag = () => {
            switch(this.props.category){
                case "we":
                    return <i className="fas fa-code"></i>;
                case "ai":
                    return <i className="fas fa-brain"></i>;
                case "el":
                    return <i className="fas fa-microchip"></i>;
                case "fo":
                    return <i class="fas fa-chalkboard-teacher"></i>;
                case "ot":
                    return <i class="fas fa-keyboard"></i>;
                default:
                    return <i class="fas fa-dot-circle"></i>;
            }
        }
        return (
            // <a href={this.props.link} target="_blank">
                <div class="card">
                    <a href={this.props.link} target="_bl">
                        <div class="box">
                            {renderingITag()}
                            <div className="name">{this.props.name}</div>
                            <div className="date">{this.props.date}</div>
                            <div className="description">{this.props.description}</div>
                            <div className="language">{this.props.language}</div>
                        </div>
                    </a>
                </div>
            // </a>
        )
    }
}
export default Portfolio__card; 