import { Component } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Main from "../index";
import ReactDOM from "react-dom";
import "./styles.scss"

export class Modal extends Component {
    constructor (props) {
		super(props);
		this.state = { show: true }
		this.props = { closeButton: false }
	}

	render () {
		if (this.state.show) {
			document.body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
			return (
				<OutsideClickHandler onOutsideClick={() => {
					ReactDOM.render(<Main />, document.getElementById("root"))
				  }}>
				<div className={"modal".concat(" ", this.props.altStyle)}>
				  <header>
					  <h2 className="modal-title">{this.props.header}</h2>
				  {this.props.closeButton && <div className="cross" >{String.fromCharCode(10799)}</div>}
				  </header>
				  <p className="modal-text">{this.props.text}</p>
				  <div className="modal-bt-container">
					<button className={"modal-bt".concat(" ", this.props.altModalBtStyle)}>{this.props.actions[0]}</button>
				  	<button className={"modal-bt".concat(" ", this.props.altModalBtStyle)}>{this.props.actions[1]}</button>
				  </div>
				</div>
				</OutsideClickHandler>
	    	)
		}
	}
}
