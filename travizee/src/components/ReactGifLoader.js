import React, { Component } from "react";
import LoadingOverlay from "react-loading-overlay";

class ReactGifLoader extends Component {
  render() {
    return (
      <LoadingOverlay
        {...this.props}
        active={true}
        spinner
        text="Loading..."
      ></LoadingOverlay>
    );
  }
}

export default ReactGifLoader;
