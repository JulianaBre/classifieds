import React, { Component, cloneElement, Children } from "react";
import PropTypes from "prop-types";

import Tab from "./tabber-tab";
import Controls from "./tabber-controls";
import Container from "./tabber-container";
import Content from "./tabber-content";

/**
 * Parent container level tabber component.  
 * This component allows for child component structure:
 * 
 * Tabber.Controls - the top container for the tabs
 * Tabber.Tab - individual tab
 * Tabber.Container - the container associated with each tab
 * Tabber.Content - the content in the Container e.g. HTML
 * Example:
<Tabber activeTabClass="active"className="tabber">
        <Tabber.Controls>
          <Tabber.Tab>
              <div>Real Estate</div>
          </Tabber.Tab>
          <Tabber.Tab>
              <div>Autos</div>
          </Tabber.Tab>
        </Tabber.Controls>
        <Tabber.Container>
          <Tabber.Content>
            {this._realEstate()}
          </Tabber.Content>
          <Tabber.Content>
            {this._tabContent("Tab 2 Content")}
          </Tabber.Content>
        </Tabber.Container>
      </Tabber>
*/
export default class Tabber extends Component {
  /** Constructor  called before component mounts and initializes
   * the activeTab.  Bind the functions so that they can be called
   * with this keyword in callback.
  */
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };

    this.setActiveTab = this.setActiveTab.bind(this);
    this._addActiveTab = this._addActiveTab.bind(this);
  }
  
  /** Function that sets the active tab if changed */
  setActiveTab(tabRef) {
    if (this.state.activeTab !== tabRef) {
      this.setState({
        activeTab: tabRef
      });
    }
  }
  /** Clones the children components and pass additional props to help 
   * determine the active tab.  
   */
  _addActiveTab(component) {
    const tabberProps = {
      activeTab: this.state.activeTab,
      setActiveTab: this.setActiveTab,
      activeTabClass: this.props.activeTabClass
    };
    return cloneElement(component, tabberProps);
  }

  // Iterate thru direct children components and call function to clone
  render() {
    const { className, children } = this.props;
    return (
      <div className={className}>
        {Children.map(children, this._addActiveTab)}
      </div>
    );
  }
}

Tabber.propTypes = {
  /** Init active class */
  activeTabClass: PropTypes.string,
  /** pass in className for styling */
  className: PropTypes.string,
  /** child components under Tabber */
  children: PropTypes.node
};

// Defines the child components
Tabber.Tab = Tab;
Tabber.Controls = Controls;
Tabber.Container = Container;
Tabber.Content = Content;
