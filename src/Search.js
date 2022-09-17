import React, {useState} from "react";
import "./Search.css";
import Result from "./Result";
import Photos from "./Photos";
import axios from "axios";

export default function SearchEngine(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        //documentation: https://dictionaryapi.dev/
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);
        //documentation: https://www.pexels.com/ru-ru/api/documentation/?
        let pexelsApiKey = `563492ad6f91700001000001467b24b70ec44ba0887bda4994131f33`;
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
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
        <div className="Search">
            <div className="Engine">
                <section>
                <form onSubmit={handeSubmit}>
                    <input className="search-form" type="search" placeholder="Enter a word..." onChange={handleKeywordChange}/>
                    <button className="btn d-none d-md-inline">Search</button>
                </form>
                <div className="hint">Suggested words: sun, wine, sea, wave...</div>
                </section>
                </div>
                <Result results={results} />
                <Photos photos={photos} />
        </div> 
    );
    } else {
        load();
        return "Loading...";
    }
}