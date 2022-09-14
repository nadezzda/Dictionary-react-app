import React, {useState} from "react";
import "./Search.css";
import Result from "./Result";
import axios from "axios";

export default function SearchEngine() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        //documentation: https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    
    return(
       <div className="Engine">
        <form onSubmit={search}>
            <input className="search-form" type="search" placeholder="Enter a word..." onChange={handleKeywordChange}/>
            <button className="btn">Search</button>
        </form>
        <Result results={results} />
       </div> 
    );
}