import React, { Component } from "react";
import "./css/Portfolio__card.css";

class Portfolio__card extends Component{
    render(){
        return (
            <div class="card">
                <div class="box">
                    {/* <i class="fas fa-code"></i>
                    <div class="text">Angexplorer</div>
                    <p>Full Stack Websites | Mobile applications</p> */}
                    <i className="fas fa-code"></i>
                    <div className="text">{this.props.name}</div>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}
export default Portfolio__card;