import * as React from "react";
import Page from "./Page";
import "./scss/index.scss";
import getExample from "../../core/apiCalls/getExample";

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            res: null
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    componentWillMount() {
        getExample(this,'1')
    }
    
    handleUpdate(key, value) {
        var change = {};
        change[key] = value;
        this.setState(change)
    }
    render() {
        return <div className="home-page">
            <Page state={this.state.res}/>
        </div>
    }
}

export default View;
