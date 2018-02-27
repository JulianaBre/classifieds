import React, { Component , Children } from "react";
import PropTypes from "prop-types";

/**
The Container of the Tabber content
Tabber.Container
*/
export default class Container extends Component {
  /** Render the content if it is active */
  _renderActive(content, i) {
    if (this.props.activeTab !== i || !content) {
      return null;
    }
    return content;
  }

  /** Iterate thru children components and call 
   * function to display active  */
  render() {
    const { className, children } = this.props;
    return (
      <div className={className}>
        {Children.map(children, this._renderActive, this)}
      </div>
    );
  }
};

Container.proptypes = {
  /** The number of active tab */
  activeTab: PropTypes.number,
  /** Class for styling */
  className: PropTypes.string,
  /** children of this component */
  children: PropTypes.node
};
