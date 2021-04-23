import React, { Component } from "react";

export default class Dashboard extends Component {
   constructor(props){
      super(props);
      this.state = {
         about: {
            description: "",
            cv: null
         },
         services: {
            web: {
               title: "",
               desc: ""
            },
            elec: {
               title: "",
               desc: ""
            },
            ia: {
               title: "",
               desc: ""
            }
         },
         skills: {
            web: {
               
            },
            elec: {

            },
            ia: {

            }
         }
      }
   }
   render() {
      return (
         <div className="container">
            <h1>My dashboard component</h1>
         </div>
      );
   }   
}