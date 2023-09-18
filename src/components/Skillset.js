import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCubes,faDatabase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faJava, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
const Skillset = () => {
    return (
        <div id="skillsets" className="skillsets">
            <h1 className="py-5">My Skillset</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faJava} size="2x"/>
                                </div>
                                <h3>Backend</h3>
                                <p>Spring, Springboot, Spring Security, Kerberos, Core Java, Basics of Groovy, Functional programming using Java streams API, Maven, Deployments using Jenkins</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faJs} size="2x"/>
                                </div>
                                <h3>Frontend</h3>
                                <p>ReactJS, React Redux Saga, Basics of Express JS, HTML, CSS, Basics of bootstrap, Javascript</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faDatabase} size="2x"/>
                                </div>
                                <h3>Database Layer</h3>
                                <p>Oracle SQL, MySQL, Sybase</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faLaptopCode} size="2x"/>
                                </div>
                                <h3>Testing strategies</h3>
                                <p>Cucumber, Junit, Mockito, Jest, Behavior Driven Development(BDD)</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faCubes} size="2x"/>
                                </div>
                                <h3>Algorithms and Data Structures</h3>
                                <p>Masters thesis on Domination in graphs and I am a regular problem solver and I use Java for this purpose</p>
                            </div>
                        </div>
                  
                    </div>
                </div>
            
        </div>
    )
}

export default Skillset
