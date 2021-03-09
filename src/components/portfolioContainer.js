import React, { Component } from "react";
import NavTab from "./navtab";
import Index from "./index";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Footer from "./footer";

class Container extends Component {
  state = {
    currentPage: "Index"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Index") {
      return <Index />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTab
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}

export default Container;