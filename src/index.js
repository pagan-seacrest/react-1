import {Component} from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import "./components/styles.scss";

document.getElementById("root").style.display = "flex"
document.getElementById("root").style.justifyContent = "center"

export default class Main extends Component {
    
    render () {
        document.body.style.backgroundColor = "grey"
        return (
            <header className="page-header">
              <Button background="#b2b2b2" clickFirst={true} text="Open first modal"/>
              <Button background="#ccc" clickFirst={false} text="Open second modal"/>
            </header>
        )
    }

}

ReactDOM.render(<Main />, document.getElementById("root"))