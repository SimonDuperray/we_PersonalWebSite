import React, { Component } from "react";
import "./css/Portfolio__card.css";

class Portfolio__card extends Component{
    render(){
        const renderingITag = () => {
            if(this.props.category==="we"){
                return <i className="fas fa-code"></i>;
            } else {
                return <i className="fas fa-brain"></i>;
            }
        }
        return (
            // <a href={this.props.link} target="_blank">
                <div class="card">
                    <div class="box">
                        {renderingITag()}
                        <div className="name">{this.props.name}</div>
                        <div className="date">{this.props.date}</div>
                        <div className="description">{this.props.description}</div>
                        <div className="language">{this.props.language}</div>
                    </div>
                </div>
            // </a>
        )
    }
}
export default Portfolio__card; 