import React, { Component } from 'react';
import './ButtonSelection.css';

class ButtonSelection extends Component {
    constructor() {
        super();
        this.state = {
            buttonSelected : false
        };
    }

    buttonOnClick = (props) => {
        const oppositeState = !this.state.buttonSelected;
        oppositeState ? this.props.addButtonSelection(this.props.value, this.props.type) : this.props.removeButtonSelection(this.props.value, this.props.type);

        this.setState({
            buttonSelected: oppositeState
        });
    };

    render() {
        const buttonSelectionStyle = this.state.buttonSelected ? 'ButtonSelectionClicked' : 'ButtonSelectionUnclicked';
        return (
            <div className={"btn "+buttonSelectionStyle} onClick={this.buttonOnClick}>
                {this.props.value}
            </div>
        );
    };
};

export default ButtonSelection;