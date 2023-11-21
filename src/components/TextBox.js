import React from 'react';
import '../index.css';

function TextBox(props) {

    const inputChange = (e) => {
        props.changeFunc(e);
    }

    return (
        <input
            type="text"
            value={props.text}
            onChange={inputChange}
            className='inputUrl'
            onClick={(e) => {
                e.target.value='';
            }}
            placeholder='Enter URL to analyze or textual prompt to generate an image'
        />)
}

export default TextBox;