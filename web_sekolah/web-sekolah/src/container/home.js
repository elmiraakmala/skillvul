import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    render() {
      return ( 
          
        <div className = "section-title">
          <h2> Clover International High School </h2> 
          <p> Clover International High School offers an outstanding education for students from around the world. Our complete offering, plus our passion for excellence in education and a commitment to seeing our students succeed, is how we create bright futures for each of our students. </p> 
          
          <hr></hr>
          
          <h2> International students from a diverse global community </h2>
          <p>Each year, 2700 students from around the world study at Clover International High Schools.</p>
          <p>Our students progress through our independent school, through high school with world-class curricula that will open the door to a wide range of university and career choices.
          At every level, they receive the care, support and internationally recognised curriculum required to help them build a successful future.</p>
          <br></br>
          <br></br>
          <h2>A Passion For Education</h2>
          <p>The values of Clover International High School is underpinned by a commitment to see our students succeed in every facet of their lives.</p>
        
        </div>
      );
    }
  }

 
  export default Home;