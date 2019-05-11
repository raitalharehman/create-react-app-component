import * as React from "react";
import Page from "./Page";
import "./scss/index.scss";

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleUpdate(key, value) {
        var change = {};
        change[key] = value;
        this.setState(change)
    }
    render() {
        return <div className="abou-page">
            <Page />
        </div>
    }
}

export default View;
