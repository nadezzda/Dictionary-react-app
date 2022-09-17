import React from "react";
import "./Result.css"
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetic from "./Phonetic";

export default function Result(props){
    if (props.results) {
     return(
        <div className="Results">
            <div className="word">
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function(phonetic, index) {
                if (index < 1) {
                  return(
                    <div key={index}>
                        <Phonetic phonetic={phonetic} />
                    </div>
                );  
                } else {
                    return null
                }
            })}
            </div>
            {props.results.meanings.map(function (meaning, index) {
                return (
                <div key={index} className="result">
                    <Meaning meaning={meaning} />
                    <Synonyms synonyms={meaning.synonyms} />
                </div>
                );
            })}
        </div>
    );   
    } else {
        return null;
    }
    
}