import React from "react";
export default class StartButton extends React.Component {
    render(){
        return (
            <button className="button game-edge__button" href="#"
               onClick={() => {this.props.updateState("question")}}
            >
                {this.props.text}
            </button>
        )
    }
}