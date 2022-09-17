import React from "react";
import Example from "./Example";

export default function Meaning(props){
    return (
    <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index){
            return (
                <div key={index}>
                    <p>
                        <strong>- </strong>{definition.definition}
                        <br />
                        <Example example={definition.example} />
                    </p>
                </div>
            );
        })}
    </div>
   );
}