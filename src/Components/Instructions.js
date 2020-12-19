import React from 'react';
import InstructionsMessages from '../InstructionsText.js';

export default function Instructions(props) {
    return (
        <p>
            {InstructionsMessages[props.phase]}
        </p>
    )
}
