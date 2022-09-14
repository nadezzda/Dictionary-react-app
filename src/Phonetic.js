import React from "react";

export default function Phonetics(props) {
    return(
        <div className="Phonetic">
            {props.phonetic.text}
        </div>
    );
}