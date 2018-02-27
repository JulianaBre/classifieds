import React, { Component } from "react";
import PropTypes from "prop-types";

/**
Each Section of content within a Container e.g. HTML content
Tabber.Content
*/
export default class Content extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="section" >
        {children}
      </div>
    );
  }
}

Content.propTypes = {
  children: PropTypes.node
};
