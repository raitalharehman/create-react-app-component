import * as React from "react";
import { Context } from "./context";


export default class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: this.updateGroup,
      name: "Welcome"
    };
  }
  updateGroup = (value) => {
    this.setState({
      name: value
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
