import React, { Component } from "react";
import "./css/Teams__card.css";

// IMPORT IMAGES
import amelie from "../images/amelie.jpg";
import franck from "../images/franck.jpg";
import jules from "../images/jules.jpg";
import leopold from "../images/leopold.jpg";
import titouan from "../images/titouan.jpg";
import zara from "../images/zara.jpg";

class Teams__card extends Component{
    render(){
        const renderImg = () => {
            var _image="";
            switch(this.props.engineer){
                case "1":
                    _image=franck;
                    break;
                case "2":
                    _image=amelie;
                    break;
                case "3":
                    _image=jules;
                    break;
                case "4":
                    _image=titouan;
                    break;
                case "5":
                    _image=zara;
                    break;
                case "6":
                    _image=leopold;
                    break;
                default: break;
            }    
            return <img src={_image} alt="" />
        }
        const renderATag = () => {
            var _link="";
            var _name="";
            switch(this.props.engineer){
                case "1":
                    _link="https://www.linkedin.com/in/gomezfranck/";
                    _name="Franck Gomez";
                    break;
                case "2":
                    _link="https://www.linkedin.com/in/am%C3%A9liedousteyssier/";
                    _name="Amélie Dousteyssier";
                    break;
                case "3":
                    _link="https://www.linkedin.com/in/jules-del%C3%A9tang-4607431a9/";
                    _name="Jules Delétang";
                    break;
                case "4":
                    _link="https://www.linkedin.com/in/titouan-machet/";
                    _name="Titouan Machet";
                    break;
                case "5":
                    _link="https://www.linkedin.com/in/zara-marks-9411451a1/";
                    _name="Zara Marks";
                    break;
                case "6":
                    _link="https://www.linkedin.com/in/l%C3%A9opold-denis-b960011b1/";
                    _name="Léopold Denis";
                    break;
                default: break;
            }
            return <a href={_link} target="_blank" className="text name-teams">{_name}</a>
        }
        const renderDescription = () => {
            var _description="";
            switch(this.props.engineer){
                case "1":
                    _description="AI | Web Development | Entrepreneurship";
                    break;
                case "2":
                    _description="Sciences | Managment | Technology";
                    break;
                case "3":
                    _description="Electronics | Engineering | Handiwork";
                    break;
                case "4":
                    _description="Programming | Engineering | Electronics";
                    break;
                case "5":
                    _description="Electronics | Teaching | Programming";
                    break;
                case "6":
                    _description="Electronics | Music | Programming";
                    break;
                default: break;
            }
            return <p className="desc-teams">{_description}</p>
        }
        return(
            <div class="card">
                <div class="box">
                    {renderImg()}
                    {renderATag()}
                    {renderDescription()}   
                </div>
            </div>
        )
    }
}
export default Teams__card;