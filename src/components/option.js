import React from 'react';

const Option = (props) => {
    return(
        <div className={"option " + props.class}>
            <button
                disabled={props.disableOptions}
                onClick={() => {props.handleAnswer(props.answer, props.index)}}
                className="option__button">
                <span className="option__button-first"></span>
                <span className="option__button-variant">{String.fromCharCode(65 + props.index)}</span>
                {props.answer}
                <span className="option__button-last"></span>
            </button>
        </div>
    )
}

export default Option;