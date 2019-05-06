import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="hello">
        <div className="first">
        <div className="header">
        <img width ="60px" src = "/images/ironhack-logo.svg"></img>
        <button width ="60px" ></button>
        </div>
            <h1>Say hello to ReactJS</h1>
            <p className="front">You will learn a Frontend framework from stratch, to became an Ninka Developer</p>
            <button className="awesome">Awesome!</button>
            </div>
            <div className = "container">
                <figure>
                    <img src = "/images/icon1.png" width="100px"></img>
                    <figcaption><h3>Declarative</h3><p>Reack makes it painless to create interactive UIs</p></figcaption>
                </figure>
                <figure>
                    <img src = "/images/icon2.png" width="100px"></img>
                    <figcaption><h3>Components</h3><p>Build e;kzjbbas;gnsa sadkjbsff vufbv;k ase</p></figcaption>
                </figure>
                <figure>
                    <img src = "/images/icon3.png" width="100px"></img>
                    <figcaption><h3>Single-Way</h3><p>Reack makes it painless to create interactive UIs</p></figcaption>
                </figure>
                <figure>
                    <img src = "/images/icon4.png" width="100px"></img>
                    <figcaption><h3>JSX</h3><p>Reack makes it painless to create interactive UIs</p></figcaption>
                </figure>
            </div>
        </div>

    );
  }
}

export default App;
