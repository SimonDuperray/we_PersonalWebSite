/*
  ================================
  == PERSONAL WEBSITE PORTFOLIO ==
  ================================
    Creation: 2/12/2020
    Author: Simon Duperray
*/

import React, { Component } from 'react';
import './App.css';

import banner from "../src/images/banner.jpg";

// IMPORT PACKAGES
import Typical from "../node_modules/react-typical";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// IMPORT COMPONENTS
import Services__card from "./components/Services__card";
import Teams__card from "./components/Teams__card";

class App extends Component{
  constructor(props){
    super(props);
    this.state={responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      }
    }
  }
  componentDidMount(){
    $(document).ready(function(){
      $(window).scroll(function(){
        if(this.scrollY>20){
          $('.navbar').addClass("sticky");
        } else {
          $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500){
          $('.scroll-up-btn').addClass("show");
        } else {
          $('.scroll-up-btn').removeClass("show");
        }
      });
    });
  }
  render(){
    return (
      <div className="App">
        {/* SCROLL BTN START */}
        <div className="scroll-up-btn">
          <i className="fas fa-angle-up"></i>
        </div>
        {/* SCROLL BTN END */}

        {/* NAVBAR START */}
        <nav className="navbar" id="navbar">
          <div className="max-width">
            <div className="logo"><a href="#home">Si<span>monD.</span></a></div>
            <ul className="menu">
              <li><a href="#home" className="menu-btn">Home</a></li>
              <li><a href="#about" className="menu-btn">About</a></li>
              <li><a href="#services" className="menu-btn">Services</a></li>
              <li><a href="#skills" className="menu-btn">Skills</a></li>
              <li><a href="#portfolio" className="menu-btn">Portfolio</a></li>
              <li><a href="#teams" className="menu-btn">Team</a></li>
              <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
          </div>
        </nav>
        {/* NAVBAR END */}

        {/* HOME START */}
        <section className="home" id="home">
          <div className="max-width">
            <div className="home-content">
              <div className="text-1">Hello, my name is</div>
              <div className="text-2">Simon Duperray</div>
              <div className="text-3">
                And I'm a &nbsp;
                <span className="typing">
                  <Typical
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                      'Developer',
                      1000,
                      'Student',
                      1000,
                      'Self-Taught',
                      1000
                    ]}
                  />
                </span>
              </div>
              <a href="#contact">Hire me</a>
            </div>
          </div>
        </section>
        {/* HOME END */}

        {/* ABOUT START */}
        <section className="about" id="about">
          <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
              <div className="column left">
                <img src={banner}/>
              </div>
              <div className="column right content-border">
                <div className="text">
                  I'm Simon and I'm a &nbsp;
                  <span className="typing-2">
                    <Typical
                      loop={Infinity}
                      wrapper='b'
                      steps={[
                        'Developer',
                        1000,
                        'Student',
                        1000,
                        'Self-Taught',
                        1000
                      ]}
                    />
                  </span>
                </div>
                <p>
                  Inquisitive and devotee, I like developing my skills in several fields, computing, electronics, music or sport.
                  I attended several online courses on full-stack web development, Android mobile apps. I also took a few courses on artificial intelligence, machine learning, deep learning, reinforcement learning, giving me the opportunity to realise a lot of interesting projects like a simulated autonomous car, or some classifier algorithms.
                  I practise table tennis for 7 years as player, trainer and coach, and running for 4 years. Moreover I become initiated to piano for few months. 
                </p>
                <a href="">Download CV</a>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT END */}

        {/* SERVICES START */}
        <section className="services" id="services">
          <div className="max-width">
            <h2 className="title">My services</h2>
            <div className="serv-content content-border">
              <Services__card 
                icon="1"
                title="Web Development" 
                description="Full Stack Websites | Mobile Applications | PWA" 
              />
              <Services__card 
                icon="2"
                title="Electronics" 
                description="Microcontroller | PIC | STM32F103 | Arduino" 
              />
              <Services__card 
                icon="3"
                title="Artificial Intelligence" 
                description="Machine, deep, reinforcement learning deployment algorithm" 
              />
            </div>
          </div>
        </section>
        {/* SERVICES END */}

        {/* SKILLS START */}
        <section className="skills" id="skills">
          <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
              {/* WEB & MOBILE DEV SKILLS */}
              <div className="column right">
                <h2 className="skills-part">Web Development Skills</h2>
                <div className="bars">
                  <div className="info">
                    <span>HTML | CSS | JavaScript</span>
                    <span>90%</span>
                  </div>
                  <div className="line html"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>React.JS | React Native</span>
                        <span>60%</span>
                    </div>
                    <div class="line react"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>PHP</span>
                        <span>80%</span>
                    </div>
                    <div class="line php"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>MySQL</span>
                        <span>70%</span>
                    </div>
                    <div class="line sql"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Java</span>
                        <span>50%</span>
                    </div>
                    <div class="line java"></div>
                </div>
              </div>
              {/* ELECTRONICS SKILLS */}
              <div className="column right">
                <h2 className="skills-part">Electronics Skills</h2>
                <div class="bars">
                    <div class="info">
                        <span>Arduino</span>
                        <span>90%</span>
                    </div>
                    <div class="line arduino"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>STM32F103</span>
                        <span>70%</span>
                    </div>
                    <div class="line stm"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>C</span>
                        <span>70%</span>
                    </div>
                    <div class="line c"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Eclipse</span>
                        <span>70%</span>
                    </div>
                    <div class="line eclipse"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Circuit Board Design</span>
                        <span>60%</span>
                    </div>
                    <div class="line circuit"></div>
                </div>          
              </div>
              {/* ARTIFICIAL INTELLIGENCE SKILLS */}
              <div className="column right">
                <h2 className="skills-part">AI Skills</h2>
                <div class="bars">
                    <div class="info">
                        <span>Python</span>
                        <span>90%</span>
                    </div>
                    <div class="line python"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>R</span>
                        <span>40%</span>
                    </div>
                    <div class="line r"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>TensorFlow</span>
                        <span>50%</span>
                    </div>
                    <div class="line tensorflow"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>Numpy</span>
                        <span>80%</span>
                    </div>
                    <div class="line numpy"></div>
                </div>
                <div class="bars">
                    <div class="info">
                        <span>ScikitLearn</span>
                        <span>70%</span>
                    </div>
                    <div class="line scikit"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SKILLS END */}

        {/* PORTFOLIO START */}
        <section className="portfolio" id="portfolio">
          <div className="max-width">
            <h2 className="title">My portfolio</h2>
            <ul className="filters-wrapper">
              <li className="filter">All</li>
              <li className="filter">AI</li>
              <li className="filter">Web</li>
              <li className="filter">Electronics</li>
            </ul>
            <div className="portfolio-content">
              <div class="card">
                <div class="box">
                  <i class="fas fa-code"></i>
                  <div class="text">Angexplorer</div>
                  <p>Full Stack Websites | Mobile applications | Progressive Web Apps</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                    <i class="fas fa-microchip"></i>
                    <div class="text">Arduino IA</div>
                    <p>Microcontroller | PIC | STM32F013 | Arduino</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                    <i class="fas fa-code"></i>
                    <div class="text">WILTY</div>
                    <p>Full Stack Websites | Mobile applications | Progressive Web Apps</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                    <i class="fas fa-microchip"></i>
                    <div class="text">Station météo</div>
                    <p>Microcontroller | PIC | STM32F013 | Arduino</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                    <i class="fas fa-code"></i>
                    <div class="text">Distributeur boisson</div>
                    <p>Full Stack Websites | Mobile applications | Progressive Web Apps</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                    <i class="fas fa-microchip"></i>
                    <div class="text">Neuralink</div>
                    <p>Microcontroller | PIC | STM32F013 | Arduino</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                    <i class="fas fa-code"></i>
                    <div class="text">ADR-Java</div>
                    <p>Full Stack Websites | Mobile applications | Progressive Web Apps</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                    <i class="fas fa-microchip"></i>
                    <div class="text">Sudoku solver</div>
                    <p>Microcontroller | PIC | STM32F013 | Arduino</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                    <i class="fas fa-code"></i>
                    <div class="text">Personal website</div>
                    <p>Full Stack Websites | Mobile applications | Progressive Web Apps</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                    <i class="fas fa-microchip"></i>
                    <div class="text">Project Manager</div>
                    <p>Microcontroller | PIC | STM32F013 | Arduino</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                    <i class="fas fa-code"></i>
                    <div class="text">Chrono_BG</div>
                    <p>Full Stack Websites | Mobile applications | Progressive Web Apps</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                    <i class="fas fa-microchip"></i>
                    <div class="text">PIC18FK20</div>
                    <p>Microcontroller | PIC | STM32F013 | Arduino</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PORTFOLIO END */}

        {/* TEAMS START */}
        <section className="teams" id="teams">
          <div className="max-width">
            <h2 className="title">My team</h2>
            <div className="carousel content-border">
              <OwlCarousel
                // loop
                margin={10}
                responsiveClass="true"
                responsive={this.state.responsive}
              >
                <Teams__card 
                  engineer="1"
                />
                <Teams__card 
                  engineer="2"
                />
                <Teams__card 
                  engineer="3"
                />
                <Teams__card 
                  engineer="4"
                />
                <Teams__card 
                  engineer="5"
                />
                <Teams__card 
                  engineer="6"
                />
              </OwlCarousel>
            </div>
          </div>
        </section>
        {/* TEAMS END */}

        {/* CONTACT START */}
        <section className="contact" id="contact">
          <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
              <div className="column left">
                <div className="text">Personal Details</div>
                <div className="icons">
                  <div class="row">
                    <i class="fas fa-user"></i>
                    <div class="info">
                      <div class="head">Name</div>
                      <div class="sub-title">Simon Duperray, 20 yo</div>
                    </div>
                  </div>
                  <div class="row">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="info">
                      <div class="head">Address</div>
                      <div class="sub-title">Angers, France</div>
                    </div>
                  </div>        
                  <div class="row">
                    <i class="fas fa-envelope"></i>
                    <div class="info">
                      <div class="head">Email</div>
                      <div class="sub-title">simon.duperray@reseau.eseo.fr</div>
                    </div>
                  </div>    
                  <div class="row">
                    <i class="fas fa-phone-square-alt"></i>
                    <div class="info">
                      <div class="head">Phone</div>
                      <div class="sub-title">+33 647 104 138</div>
                    </div>
                  </div> 
                </div>
              </div>
              <div className="column right">
                <div className="text">Message me</div>
                <form action="">
                  <div class="fields">
                    <div class="field name">
                      <input type="text" placeholder="Name" required/>
                    </div>
                    <div class="field email">
                      <input type="email" placeholder="Email" required/>
                    </div>
                  </div>
                  <div class="field">
                    <input type="text" placeholder="Subject" required/>
                  </div>
                  <div class="field textarea">
                    <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                  </div>
                  <div class="button">
                    <button type="submit">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT END */}

        {/* FOOTER START */}
        <footer>
          <span>Created By <a href="#home">Kartodix</a> | <span className="far fa-copyright"></span> 2020 All rights reserved.</span>
        </footer>
        {/* FOOTER END */}
      </div>
    );
  }
}

export default App;