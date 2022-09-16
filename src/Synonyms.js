import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
        return(
            <div>
            <ul className="Synonyms">
                {props.synonyms.map(function(synonym, index) {
                    if (index < 5) {
                        return <li key={index}>{synonym}</li>;
                    } else {
                        return null;
                    }
                })}
            </ul>
            </div>
        );
    } else {
        return null;
    }
}