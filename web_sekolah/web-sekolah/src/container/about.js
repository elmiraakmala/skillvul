
import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './about.css';
import { BiTrophy, BiRocket, BiGroup } from "react-icons/bi"; //React-icons

class About extends React.Component {
    render() {
      return ( 
        <div>
            <div class="container">
                <div class="row">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="icon-box">
                <div class="icon"><i><BiTrophy /></i></div>
                    <h4><a href="">EXCELLENCE</a></h4>
                    <p>Excellence is non-negotiable. We strive for excellence in everything we do and aim to inspire it in
                    each of our students.</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div class="icon-box">
                <div class="icon"><i><BiRocket /></i></div>
                    <h4><a href="">INNOVATION</a></h4>
                    <p>In our pursuit of excellence, we are constantly looking beyond the status quo.</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div class="icon-box">
                <div class="icon"><i><BiGroup /></i></div>
                    <h4><a href="">PARTNERSHIP</a></h4>
                    <p>By collaborating and connecting with our partners, we can truly understand and deliver to their needs. </p>
                </div>
            </div>
            </div>
            </div>
        </div>
      );
    }
  }

 
  export default About;

