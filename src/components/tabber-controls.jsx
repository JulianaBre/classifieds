import React, { Component, cloneElement, Children } from "react";
import PropTypes from "prop-types";
/**
* Controls section that contains all the tabs
* Tabber.Controls
*/
export default class Controls extends Component {
  /** Iterate thru children.
   * Clone each tab and pass additional props.
   */
  _addChildRefs(tab, count) {
    // if at the end of the tabs, return null
    if (!tab) {
      return null;
    }

    const { activeTab, activeTabClass } = this.props;
    const self = this;
    return cloneElement(tab, {
      ref: count,
      handleControlClick: event => {
        self.props.setActiveTab(count, event);
      },
      isActive: count === activeTab,
      activeTabClass
    });
  }
  // Iterate thru children components and call class to clone
  render() {
    const { children } = this.props;
    return (
      <div className="tabs">
        {Children.map(children, this._addChildRefs, this)}
      </div>
    );
  }
}

Controls.propTypes = {
  /**
  Event handler for setting the active tab
  */
  setActiveTab: PropTypes.func,
  /**
  The active tab number
  */
  activeTab: PropTypes.number,
  /**
  The CSS class to apply to the active tab
  */
  activeTabClass: PropTypes.string,
  /**
   The child components
   */
  children: PropTypes.node,
  /**
   * Class prop for styling
   */
  className: PropTypes.string
};
