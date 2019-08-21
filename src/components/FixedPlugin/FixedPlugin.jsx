import React, { Component } from "react";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show-dropdown open",
    };
  }
  handleClick = () => {
    this.props.handleFixedClick();
  };

  render() {
    return (
      <div className="fixed-plugin">
        <div id="fixedPluginClasses" className={this.props.fixedClasses}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu">
            <li className="header-title">Color</li>
            <li className="adjustments-line">
              <a className="switch-trigger">
                <p>Filters</p>
                <div className="pull-right">
                  <span
                    className={
                      this.props.bgColor === "black"
                        ? "badge filter active"
                        : "badge filter"
                    }
                    data-color="black"
                    onClick={() => {
                      this.props.handleColorClick("black");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "azure"
                        ? "badge filter badge-azure active"
                        : "badge filter badge-azure"
                    }
                    data-color="azure"
                    onClick={() => {
                      this.props.handleColorClick("azure");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "#584b42"
                        ? "badge filter badge-green active"
                        : "badge filter badge-green"
                    }
                    data-color="#584b42"
                    onClick={() => {
                      this.props.handleColorClick("#584b42");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "orange"
                        ? "badge filter badge-orange active"
                        : "badge filter badge-orange"
                    }
                    data-color="orange"
                    onClick={() => {
                      this.props.handleColorClick("orange");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "red"
                        ? "badge filter badge-red active"
                        : "badge filter badge-red"
                    }
                    data-color="red"
                    onClick={() => {
                      this.props.handleColorClick("red");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "purple"
                        ? "badge filter badge-purple active"
                        : "badge filter badge-purple"
                    }
                    data-color="purple"
                    onClick={() => {
                      this.props.handleColorClick("purple");
                    }}
                  />
                </div>
                <div className="clearfix" />
              </a>
            </li> 
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
