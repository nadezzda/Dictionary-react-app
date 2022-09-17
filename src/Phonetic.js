import React from "react";

export default function Phonetics(props) {
    return(
        <div className="Phonetic d-none d-md-inline">
            {props.phonetic.text}
        </div>
    );
}