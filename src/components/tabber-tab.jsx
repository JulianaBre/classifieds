import { Component, cloneElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
The individual tab
Tabber.Controls
*/
export default class Tab extends Component {
  /** Clone each child div component and add additional props
   * such as onClick functionality and styling.
   */
  render() {
    const { children, activeTabClass, isActive, handleControlClick, className } = this.props;

    const activeClassNames = {};

    activeClassNames[activeTabClass] = isActive;

    return cloneElement(children, {
      onClick: handleControlClick,
      className: classNames("tab", className, activeClassNames)
    });
  }
}

Tab.propTypes = {
  children: PropTypes.node,
  activeTabClass: PropTypes.string,
  isActive: PropTypes.bool,
  handleControlClick: PropTypes.func,
  className: PropTypes.string
};
