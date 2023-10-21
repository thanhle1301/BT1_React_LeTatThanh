import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Items from "./Items";
import Footer from "./Footer";

export default class Ex_Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="my-5">
          <Banner />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 p-0">
              <Items />
            </div>
            <div className="col-md-4 col-sm-6 p-0">
              <Items />
            </div>
            <div className="col-md-4 col-sm-6 p-0">
              <Items />
            </div>
            <div className="col-md-4 col-sm-6 p-0">
              <Items />
            </div>
            <div className="col-md-4 col-sm-6 p-0">
              <Items />
            </div>
            <div className="col-md-4 col-sm-6 p-0">
              <Items />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
