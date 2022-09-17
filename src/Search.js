import React, {useState} from "react";
import "./Search.css";
import Result from "./Result";
import axios from "axios";

export default function SearchEngine(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false)

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search() {
        //documentation: https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handeSubmit(event) {
        event.preventDefault();
        search();    
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }
    if (loaded) {
    return(
        <div>
            <div className="Engine">
                <section>
                <form onSubmit={handeSubmit}>
                    <input className="search-form" type="search" placeholder="Enter a word..." onChange={handleKeywordChange}/>
                    <button className="btn">Search</button>
                </form>
                <div className="hint">Suggested words: sun, wine, sea, wave...</div>
                </section>
                </div>
                <Result results={results} />
        </div> 
    );
    } else {
        load();
        return "Loading...";
    }
}