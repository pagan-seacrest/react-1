import { Component } from "react";
import {Modal} from "./Modal";
import ReactDOM from "react-dom";
import "./styles.scss"

export default class Button extends Component {

    click = () => {
        this.props.clickFirst ?
        ReactDOM.render(<Modal
            header="Do you want to delete this file?"
            closeButton={true}
            text="Once you delete this file, it won’t be possible to undo this action. 
            Are you sure you want to delete it?"
            actions={["Ok", "Cancel"]} />, document.getElementById("root") ):
        ReactDOM.render(<Modal
            header="You're having unsaved changes. Are you sure you want to leave?"
            altStyle="modal-alt"
            altModalBtStyle="modal-bt-alt"
            closeButton={true}
            text="Unless you save your last changes, ones are going to be returned to previous state"
            actions={["Ok", "Cancel"]} />, document.getElementById("root") )
    }

    render () {
        return (<button
        className="page-bt"
        style={{backgroundColor: this.props.background}}
        background={this.props.background}
        onClick={this.click}>{this.props.text}
        </button>)
    }
}